import React from "react";
import { NodeProps } from "./schema";

const EndNode = function ({
  data,
  isSelected = false,
}: NodeProps): JSX.Element {
  const borderColor = isSelected ? "#666666" : "#bbbbbb";
  const text = "END";
  const halfWidth = (data.width || 120) / 2;
  const halfHeight = (data.height || 60) / 2;
  return (
    <>
      <ellipse
        cx={data.x + halfWidth}
        cy={data.y + halfHeight}
        rx={halfWidth}
        ry={halfHeight}
        fill={"#5e0202"}
        strokeWidth={1}
        color={"white"}
        stroke={borderColor}
      />
      <text
        x={data.x + halfWidth}
        y={data.y + halfHeight + 5}
        textAnchor={"middle"}
        fill={'#FFF'}

      >
        {text}
      </text>
    </>
  );
};

export default EndNode;
