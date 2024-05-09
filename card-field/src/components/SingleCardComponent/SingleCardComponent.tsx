import React from "react";
import "./SingleCardComponent.scss";
import { SingleTread } from "../ContentContainer/types";
import moment from "moment";
import { isHighRating } from "../../utils/utils";

interface PropType {
  data: SingleTread;
}

function SingleCardComponent({ data }: PropType) {
  return (
    <div className="single-card">
      <div className="left">
        <div
          className="subject"
          style={{
            color: isHighRating(data.score) ? "#9335ff" : "#e89d40",
          }}
        >
          {data.subject}
        </div>
        <div className="question">{data.question}</div>
        <div>{data.text}</div>
      </div>
      <div className="right">
        <div
          style={{
            fontWeight: "bold",
          }}
        >
          {data.team}
        </div>
        <div>{moment(data.created_at).format("MMM Do")}</div>
      </div>
    </div>
  );
}

export default SingleCardComponent;
