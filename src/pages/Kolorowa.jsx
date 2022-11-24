import React, { useState } from "react";
import Modal from "react-modal";

function Kolorowa() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedImg, setClickedImg] = useState("");

  function toggleModal(e) {
    setIsOpen(!isOpen);
    setClickedImg(e.target.src);
    console.log(e.target.src);
  }

  const images = Object.keys(import.meta.glob("./kolorowa/*", { as: "raw" }));
  const imagesHtml = images.map((url) => (
    <img src={`./assets/${url.slice(2)}`} alt="" onClick={toggleModal} />
  ));

  return (
    <>
      <div className="img-grid">{imagesHtml}</div>
    </>
  );
}

export default Kolorowa;
