const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'app', 'math');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const d of list) {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) results = results.concat(walk(full));
    else if (d.isFile() && d.name === 'page.tsx') results.push(full);
  }
  return results;
}

const files = walk(root);
const small = [];
for (const f of files) {
  const stat = fs.statSync(f);
  const size = stat.size;
  if (size < 1200) small.push({ path: f, size });
}
small.sort((a,b)=>a.path.localeCompare(b.path));
console.log(JSON.stringify(small, null, 2));
