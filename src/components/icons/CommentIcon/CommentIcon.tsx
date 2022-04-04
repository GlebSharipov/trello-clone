import { SVGProps } from "react";

export const CommentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    {...props}
  >
    <defs>
      <style>{".cls-2{fill:#0593ff}"}</style>
    </defs>
    <g id="Comment">
      <path
        d="M25 5H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h1v3a1 1 0 0 0 .53.88 1 1 0 0 0 1-.05L15.3 23H25a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Z"
        style={{
          fill: "#d8e1ef",
        }}
      />
      <circle className="cls-2" cx={21} cy={14} r={1} />
      <circle className="cls-2" cx={16} cy={14} r={1} />
      <circle className="cls-2" cx={11} cy={14} r={1} />
    </g>
  </svg>
);
