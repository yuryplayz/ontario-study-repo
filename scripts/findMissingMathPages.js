const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'app');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const d of list) {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) {
      results = results.concat(walk(full));
    } else if (d.isFile() && full.endsWith('.tsx')) {
      results.push(full);
    }
  }
  return results;
}

const files = walk(root);
const hrefRegex = /href=\{?"(\/math\/[^"}]+)"\}?/g;
const refs = new Set();
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = hrefRegex.exec(content))) {
    refs.add(m[1]);
  }
}

const referenced = Array.from(refs).sort();
const existing = [];
const missing = [];
for (const ref of referenced) {
  // map /math/grade10 -> app/math/grade10/page.tsx
  const candidate = path.join(root, ref.replace(/^\//, ''), 'page.tsx');
  if (fs.existsSync(candidate)) existing.push(ref);
  else missing.push({ path: ref, expected: candidate });
}

const result = { referenced: referenced, existing, missing };
console.log(JSON.stringify(result, null, 2));
