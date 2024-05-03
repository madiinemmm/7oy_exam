import React from "react";
import styles from "./index.module.css";

const AudioStore = () => {
  // Ob'ektning xususiyatlari
  const { audio, audio_img, audio_title } = styles;

  // Mazmunni emas, ba'zi qismlar funksiyalarga ajratib chiqish
  const title = "BRINGING YOU THE";
  const subtitle = "BEST";

  // Utility funksiya
  const formatName = (name) => {
    return name.toUpperCase();
  };

  return (
    <div className={audio}>
      <div className={audio_img}></div>
      <div className={audio_title}>
        <h2>
          {title} <span>{formatName(subtitle)}</span> AUDIO GEAR
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier
          store for high-end headphones, earphones, speakers, and audio
          accessories. We have a large showroom and luxury demonstration rooms
          available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default AudioStore;
