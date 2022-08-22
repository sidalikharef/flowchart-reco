import React from "react";
import { NodeProps } from "./schema";

const DecisionNode = function ({ data, isSelected }: NodeProps) {
  const borderColor = isSelected ? "#666666" : "#bbbbbb";
  const text = (typeof data.title === "function" && data.title()) || data.title;
  const width = data.width || 120;
  const halfWidth = width / 2;
  const height = data.height || 60;
  const halfHeight = height / 2;
  const top = `${data.x + halfWidth},${data.y}`;
  const bottom = `${data.x + halfWidth},${data.y + height}`;
  const left = `${data.x},${data.y + halfHeight}`;
  const right = `${data.x + width},${data.y + halfHeight}`;
  return (
    <>
      <polygon
        points={`${left} ${top} ${right} ${bottom}`}
        fill={"white"}
        strokeWidth={1}
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

export { DecisionNode };
