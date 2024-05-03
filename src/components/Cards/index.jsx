import { Link } from "react-router-dom";
import React from "react";
import styles from "./index.module.css";

// Importing images
import headphoneImg from "../../assets/Headphon.png";
import earphoneImg from "../../assets/earphone.png";
import speakerImg from "../../assets/speaker.png";

function ProductCard({ title, link, image }) {
  return (
    <div className={styles.headphones}>
      <div className={styles.images}>
        {/* Using the image prop */}
        <img src={image} alt={title} />
      </div>
      <div className={styles.cards}>
        <h3>{title}</h3>
        <p>
          <Link to={`/pages/${link}`}>
            SHOP <span><b>→</b></span>
          </Link>
        </p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div>
      <div className={styles.products}>
        {/* Providing different images to each ProductCard */}
        <ProductCard title="HEADPHONES" link="HEADPHONES" image={headphoneImg} />
        <ProductCard title="SPEAKERS" link="SPEAKERS" image={speakerImg} />
        <ProductCard title="EARPHONES" link="EARPHONES" image={earphoneImg} />
      </div>
    </div>
  );
}

export default Index;
