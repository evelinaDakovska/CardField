import React from "react";
import { SingleTread } from "../ContentContainer/types";
import SingleCardComponent from "../SingleCardComponent/SingleCardComponent";
import { isHightRating } from "../../utils/utils";

interface PropType {
  data: SingleTread[];
  onClick: () => void;
}

function MultipleDataContainer({ data, onClick }: PropType) {
  const groupRaitingColor = (score: number | undefined) =>
    isHightRating(score) ? "#27aae1" : "#e89d40";

  const calculateOffset = (i: number) => `${(i + 1) * 5}px`;

  return (
    <div onClick={onClick} className="multiple-data-container">
      <div
        className="message-count"
        style={{ backgroundColor: groupRaitingColor(data[0]?.score) }}
      >
        {data.length} messages
      </div>
      <SingleCardComponent data={data[0]} />
      {Array(data.length - 1)
        .fill(null)
        .map((c, i) => (
          <div
            key={i}
            style={{
              top: calculateOffset(i),
              left: calculateOffset(i),
              zIndex: -(i + 1),
            }}
            className="shadow-container single-card"
          />
        ))}
    </div>
  );
}

export default MultipleDataContainer;
