import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";

function Err0r() {
  const images = Object.keys(import.meta.glob("./assets/*", { as: "raw" }));
  const imagesHtml = images.map((url, i) => (
    <Link to={`${url.slice(9)}`} key={i}>
      <img
        src={`./assets/Project/Err0r/${url.slice(9)}`}
        alt=""
        key={i}
        id={`${i}`}
      />
    </Link>
  ));

  return (
    <>
      <div className="img-grid">{imagesHtml}</div>
    </>
  );
}

export default Err0r;
