import React from "react";
import { NodeProps } from "./schema";

const StartNode = function ({
  data,
  isSelected = false,
}: NodeProps): JSX.Element {
  const borderColor = isSelected ? "#666666" : "#bbbbbb";
  const text = "START";
  const halfWidth = (data.width || 120)/2 ;
  const halfHeight = (data.height || 60)/2 ;
  return (
    <>
      <ellipse
        cx={data.x + halfWidth}
        cy={data.y + halfHeight}
        rx={halfWidth}
        ry={halfHeight}
        fill={"#2d4b5a"}
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

export default StartNode;
