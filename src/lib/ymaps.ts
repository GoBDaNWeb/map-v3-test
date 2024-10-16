import React from "react";
import ReactDom from "react-dom";

const init = async () => {
  const [ymaps3React] = await Promise.all([
    ymaps3.import("@yandex/ymaps3-reactify"),
    ymaps3.ready,
  ]);
  return ymaps3React;
};
const ymaps3React = await init();

export const reactify = ymaps3React.reactify.bindTo(React, ReactDom);
export const {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapMarker,
} = reactify.module(ymaps3);
