import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { buyFeature } from "../redux";

const HookFeature = () => {
  const numOfCake = useSelector((state) => state.feature.numOfFeature);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Features - {numOfCake}</h2>
      <button onClick={() => dispatch(buyFeature())}>Buy Feature</button>
    </div>
  );
};

export default HookFeature;
