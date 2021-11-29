import React from "react";

function ImageBox(props) {
  return (
    <>
      <div className="image-box">
        <img
          src={props.src}
          alt={props.alt}
        ></img>
      </div>
    </>
  );
}

export default ImageBox;
