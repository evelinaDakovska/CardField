import React, { useEffect, useState } from "react";
import SingleCardComponent from "../SingleCardComponent/SingleCardComponent";
import axios from "axios";
import MultipleCardsComponent from "../MultipleCardsComponent/MultipleCardsComponent";
import { SingleTread } from "./types";

function ContentContainer(): JSX.Element {
  const [threads, setThreads] = useState<null | SingleTread[][]>(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/threads")
      .then((res) => setThreads(res.data));
  }, []);

  return (
    <div className="content-container">
      {threads?.map((current: SingleTread[]) => {
        const key = current[0].id;
        return current.length === 1 ? (
          <SingleCardComponent key={key} data={current[0]} />
        ) : (
          <MultipleCardsComponent key={key} data={current} />
        );
      })}
    </div>
  );
}

export default ContentContainer;
