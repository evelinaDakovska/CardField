import React from "react";
import { SingleTread } from "../ContentContainer/types";
import SingleCardComponent from "../SingleCardComponent/SingleCardComponent";
import { isHighRating } from "../../utils/utils";

interface PropType {
  data: SingleTread[];
  onClick: () => void;
}

function MultipleDataContainer({ data, onClick }: PropType) {
  const groupRatingColor = (score: number | undefined) =>
    isHighRating(score) ? "#27aae1" : "#e89d40";

  return (
    <div onClick={onClick} className="multiple-data-container">
      <div
        className="message-count"
        style={{ backgroundColor: groupRatingColor(data[0]?.score) }}
      >
        {data.length} messages
      </div>
      <SingleCardComponent data={data[0]} />
      {Array(data.length - 1)
        .fill(null)
        .map((c, i) => {
          const offset = `${(i + 1) * 5}px`;
          return (
            <div
              key={i}
              style={{
                top: offset,
                left: offset,
                zIndex: -(i + 1),
              }}
              className="shadow-container single-card"
            />
          );
        })}
    </div>
  );
}

export default MultipleDataContainer;
