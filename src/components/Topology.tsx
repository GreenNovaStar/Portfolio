import { content } from '../content';

/**
 * Decorative distributed-systems diagram for the feature project card:
 * four regional nodes around a central control-plane core, with two
 * animated "live" edges. Purely illustrative (aria-hidden on the parent).
 */
export function Topology() {
  const [nw, ne, sw, se] = content.work.topologyNodes;
  const core = content.work.topologyCore;

  return (
    <svg className="topo" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6d8bff" />
          <stop offset="1" stopColor="#4bd6e6" />
        </linearGradient>
        <radialGradient id="coreGrad">
          <stop offset="0" stopColor="#b17dff" />
          <stop offset="1" stopColor="#6d8bff" />
        </radialGradient>
      </defs>

      <line x1="160" y1="100" x2="60" y2="45" />
      <line className="edge-live" x1="160" y1="100" x2="260" y2="45" />
      <line x1="160" y1="100" x2="60" y2="160" />
      <line className="edge-live" x1="160" y1="100" x2="260" y2="160" />
      <line x1="60" y1="45" x2="260" y2="45" />
      <line x1="60" y1="160" x2="260" y2="160" />

      <circle className="node" cx="60" cy="45" r="14" />
      <text x="60" y="24" textAnchor="middle">
        {nw}
      </text>
      <circle className="node" cx="260" cy="45" r="14" />
      <text x="260" y="24" textAnchor="middle">
        {ne}
      </text>
      <circle className="node" cx="60" cy="160" r="14" />
      <text x="60" y="186" textAnchor="middle">
        {sw}
      </text>
      <circle className="node" cx="260" cy="160" r="14" />
      <text x="260" y="186" textAnchor="middle">
        {se}
      </text>

      <circle className="core" cx="160" cy="100" r="20" />
      <text x="160" y="134" textAnchor="middle" style={{ fill: 'var(--text-dim)' }}>
        {core}
      </text>
    </svg>
  );
}
