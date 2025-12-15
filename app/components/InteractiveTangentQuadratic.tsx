"use client";

import { useRef, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function round(n: number, dp = 2) {
  const p = 10 ** dp;
  return Math.round(n * p) / p;
}

type Viewport = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
};

function xToPx(x: number, vp: Viewport, width: number) {
  return ((x - vp.xMin) / (vp.xMax - vp.xMin)) * width;
}

function yToPx(y: number, vp: Viewport, height: number) {
  // SVG y increases downward
  return (1 - (y - vp.yMin) / (vp.yMax - vp.yMin)) * height;
}

function pxToX(px: number, vp: Viewport, width: number) {
  return vp.xMin + (px / width) * (vp.xMax - vp.xMin);
}

export default function InteractiveTangentQuadratic() {
  // f(x) = A(x - H)^2 + K
  const [A, setA] = useState(1);
  const [H, setH] = useState(0);
  const [K, setK] = useState(0);
  const [a, setAPoint] = useState(3);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const draggingRef = useRef(false);

  const width = 760;
  const height = 360;

  const f = (x: number) => A * (x - H) * (x - H) + K;
  const fp = (x: number) => 2 * A * (x - H);

  // Point and tangent info
  const y0 = f(a);
  const m = fp(a);
  const b = y0 - m * a;

  // Viewport (auto-scale y)
  const viewport: Viewport = (() => {
    const xMin = -10;
    const xMax = 10;
    const samples = 200;
    let yMin = Infinity;
    let yMax = -Infinity;

    for (let i = 0; i <= samples; i++) {
      const x = xMin + (i / samples) * (xMax - xMin);
      const y = f(x);
      yMin = Math.min(yMin, y);
      yMax = Math.max(yMax, y);
    }

    const pad = Math.max(2, (yMax - yMin) * 0.15);
    yMin -= pad;
    yMax += pad;

    if (Math.abs(yMax - yMin) < 1e-6) {
      yMin -= 1;
      yMax += 1;
    }

    return { xMin, xMax, yMin, yMax };
  })();

  // Curve polyline
  const curvePath = (() => {
    const samples = 220;
    const pts: string[] = [];
    for (let i = 0; i <= samples; i++) {
      const x = viewport.xMin + (i / samples) * (viewport.xMax - viewport.xMin);
      const y = f(x);
      pts.push(`${xToPx(x, viewport, width)},${yToPx(y, viewport, height)}`);
    }
    return pts.join(" ");
  })();

  // Tangent line endpoints in pixel space
  const tangentLine = (() => {
    const x1 = viewport.xMin;
    const y1 = m * x1 + b;
    const x2 = viewport.xMax;
    const y2 = m * x2 + b;

    return {
      x1: xToPx(x1, viewport, width),
      y1: yToPx(y1, viewport, height),
      x2: xToPx(x2, viewport, width),
      y2: yToPx(y2, viewport, height),
    };
  })();

  // Axes
  const xAxisY = viewport.yMin <= 0 && viewport.yMax >= 0 ? yToPx(0, viewport, height) : null;
  const yAxisX = viewport.xMin <= 0 && viewport.xMax >= 0 ? xToPx(0, viewport, width) : null;

  // Point pixel coords
  const pointPx = {
    cx: xToPx(a, viewport, width),
    cy: yToPx(y0, viewport, height),
  };

  function setAFromClientX(clientX: number) {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const px = clamp(clientX - rect.left, 0, rect.width);
    const x = pxToX((px / rect.width) * width, viewport, width);
    setAPoint(round(clamp(x, viewport.xMin, viewport.xMax), 2));
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Interactive tangent line explorer</h3>
          <p className="text-sm text-zinc-600">
            Explore a quadratic function and its tangent line. Drag the point on the graph or use the sliders.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-700">a (vertical stretch)</span>
                <span className="font-mono text-zinc-700">{A.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min={-3}
                max={3}
                step={0.1}
                value={A}
                onChange={(e) => setA(Number(e.target.value))}
                className="w-full"
              />
            </label>

            <label className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-700">h (shift right)</span>
                <span className="font-mono text-zinc-700">{H.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min={-6}
                max={6}
                step={0.1}
                value={H}
                onChange={(e) => setH(Number(e.target.value))}
                className="w-full"
              />
            </label>

            <label className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-700">k (shift up)</span>
                <span className="font-mono text-zinc-700">{K.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min={-12}
                max={12}
                step={0.1}
                value={K}
                onChange={(e) => setK(Number(e.target.value))}
                className="w-full"
              />
            </label>

            <label className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-700">x = a (point)</span>
                <span className="font-mono text-zinc-700">{a.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min={viewport.xMin}
                max={viewport.xMax}
                step={0.1}
                value={a}
                onChange={(e) => setAPoint(Number(e.target.value))}
                className="w-full"
              />
            </label>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="text-sm text-zinc-700">Current function</div>
            <div className="mt-1 font-mono text-sm">f(x) = {A.toFixed(2)}(x − {H.toFixed(2)})² + {K.toFixed(2)}</div>
            <div className="mt-3 text-sm text-zinc-700">At x = a:</div>
            <div className="mt-1 grid gap-1 font-mono text-sm">
              <div>Point: (a, f(a)) = ({a.toFixed(2)}, {y0.toFixed(2)})</div>
              <div>Slope: m = f{"'"}(a) = {m.toFixed(2)}</div>
              <div>
                Tangent: y − {y0.toFixed(2)} = {m.toFixed(2)}(x − {a.toFixed(2)})
              </div>
              <div>y = {m.toFixed(2)}x + {b.toFixed(2)}</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-zinc-700">Graph</div>
            <div className="text-xs text-zinc-500">Drag the point</div>
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${width} ${height}`}
              className="h-auto w-full"
              onPointerDown={(e) => {
                draggingRef.current = true;
                (e.currentTarget as SVGSVGElement).setPointerCapture(e.pointerId);
                setAFromClientX(e.clientX);
              }}
              onPointerMove={(e) => {
                if (!draggingRef.current) return;
                setAFromClientX(e.clientX);
              }}
              onPointerUp={() => {
                draggingRef.current = false;
              }}
            >
              <rect x={0} y={0} width={width} height={height} fill="#ffffff" />

              {/* grid */}
              {Array.from({ length: 21 }).map((_, i) => {
                const x = (i / 20) * width;
                return <line key={`gx-${i}`} x1={x} y1={0} x2={x} y2={height} stroke="#f4f4f5" strokeWidth={1} />;
              })}
              {Array.from({ length: 11 }).map((_, i) => {
                const y = (i / 10) * height;
                return <line key={`gy-${i}`} x1={0} y1={y} x2={width} y2={y} stroke="#f4f4f5" strokeWidth={1} />;
              })}

              {/* axes */}
              {xAxisY !== null ? (
                <line x1={0} y1={xAxisY} x2={width} y2={xAxisY} stroke="#e4e4e7" strokeWidth={2} />
              ) : null}
              {yAxisX !== null ? (
                <line x1={yAxisX} y1={0} x2={yAxisX} y2={height} stroke="#e4e4e7" strokeWidth={2} />
              ) : null}

              {/* tangent */}
              <line
                x1={tangentLine.x1}
                y1={tangentLine.y1}
                x2={tangentLine.x2}
                y2={tangentLine.y2}
                stroke="#0ea5e9"
                strokeWidth={3}
                opacity={0.9}
              />

              {/* curve */}
              <polyline fill="none" stroke="#111827" strokeWidth={3} points={curvePath} />

              {/* point */}
              <circle cx={pointPx.cx} cy={pointPx.cy} r={7} fill="#ef4444" />
              <circle cx={pointPx.cx} cy={pointPx.cy} r={12} fill="#ef4444" opacity={0.12} />
            </svg>
          </div>

          <p className="text-xs text-zinc-500">Tip: changing a, h, and k shifts/stretches the parabola; the tangent updates automatically.</p>
        </div>
      </div>
    </div>
  );
}
