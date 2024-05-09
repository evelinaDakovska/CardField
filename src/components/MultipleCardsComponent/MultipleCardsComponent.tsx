import React, { useState } from "react";
import "./MultipleCardsComponent.scss";
import { SingleTread } from "../ContentContainer/types";
import SingleCardComponent from "../SingleCardComponent/SingleCardComponent";
import MultipleDataContainer from "./MultipleDataContainer";

interface PropType {
  data: SingleTread[];
}

function MultipleCardsComponent({ data }: PropType) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const expandCards = () => {
    setIsCollapsed((x) => !x);
  };
  return isCollapsed ? (
    <MultipleDataContainer onClick={expandCards} key={data[0].id} data={data} />
  ) : (
    <>
      {data.map((current: SingleTread) => (
        <SingleCardComponent key={current.id} data={current} />
      ))}
    </>
  );
}

export default MultipleCardsComponent;
