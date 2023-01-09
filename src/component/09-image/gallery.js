import React from "react";
import "./gallery.scss";
import images from "./image.json";

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <div key={index}>
          <a href={require(`../../assets/img/${img.name}`)} target="_blank">
            <img src={require(`../../assets/img/${img.name}`)} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
