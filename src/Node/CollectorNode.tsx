import React from "react";
import { NodeProps } from "./schema";

const CollectorNode = function ({
  data,
  isSelected = false,
}: NodeProps): JSX.Element {
  const borderColor = isSelected ? "#666666" : "#bbbbbb";
  const text = data.title;
  const halfWidth = (data.width || 120) / 2;
  const halfHeight = (data.height || 60) / 2;
  return (
    <>
      <rect
        width={data.width || 120}
        height={data.height || 60}
        fill={"#9c1f4d"}
        x={data.x}
        y={data.y}
        strokeWidth={1}
        stroke={borderColor}
      />
      <text x={data.x + halfWidth} y={data.y + halfHeight + 5} textAnchor={"middle"}       fill={'#FFF'}>
      <hr
        style={{
            color: '#FFF',
            backgroundColor: '#FFF',

        }}
    />
        {text}
       <hr
        style={{
            color: '#FFF',
            backgroundColor: '#FFF',

        }}
    />
      </text>
    </>
  );
};


export default CollectorNode;
