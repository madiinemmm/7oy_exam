import { useParams } from "react-router-dom";
import React from "react";
import styles from "./index.module.css";
import Cards from "../../components/Cards";
import Audio from "../../components/Audio";
import MainTitle from "../../components/MainTitle";
import LeftImages from "../../components/LeftImages";
import headphones from '../../assets/headphones (2).png'
import headphon from '../../assets/Headphon.png'
import headphone3 from '../../assets/headphone3.png'
import speaker from '../../assets/speaker.png'
import speaker2 from '../../assets/speaker2.png'
import { Link } from "react-router-dom";

function Headphones() {
  const { page } = useParams();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <MainTitle title={page}>SPEAKERS</MainTitle>
      <div className={styles.speaker} style={{display: "flex", width: "1110px", marginLeft: "auto", marginRight: "auto", marginTop: "130px", marginLeft: "300px"}}>
          <div className={styles.speaker_img} style={{backgroundColor: "#F1F1F1"}}>
            <img src={speaker} alt="speaker" style={{width: "300px", height: "300px", padding: "60px", }} />
          </div>
          <div className={styles.speaker_title} style={{marginLeft: "120px"}}>
            <p style={{position: 'absolute', color: "#D87D4A", letterSpacing: "5px", fontSize: "12px"}}>NEW PRODUCT</p>
            <h4  style={{fontSize: "40px"}}>ZX9 Speaker</h4>
            <p style={{fontSize: "12px", letterSpacing: "1px", opacity: "50%"}}>Upgrade your sound system with the all new ZX9 active <br /> speaker. It’s a bookshelf speaker system that offers truly <br /> wireless connectivity -- creating new possibilities for more <br /> pleasing and practical audio setups.</p>

            <Link to="/pages/speaker/6">
              <button style={{padding: "10px", width: "150px", backgroundColor: "#D87D4A", border: "none", color: "#fff", marginTop: "10px"}}>See Product</button>
            </Link>
          </div>
        </div>
        <div className={styles.speaker2} style={{display: "flex", marginLeft: "300px"}}>
         
          <div className={styles.speaker2_title} >
            <h4 style={{fontSize: "40px"}}>ZX7 <br />SPEAKER</h4>
            <p style={{fontSize: "12px", letterSpacing: "1px", opacity: "50%"}}>Stream high quality sound wirelessly with minimal loss. The ZX7 <br /> bookshelf speaker uses high-end audiophile components that <br /> represents the top of the line powered speakers for home or <br /> studio use.</p>
            <Link to="/pages/speaker2/3">
              <button style={{padding: "10px", width: "150px", backgroundColor: "#D87D4A", border: "none", color: "#fff", marginTop: "10px"}}>See Product</button>
            </Link>
          </div>
          <div className={styles.speaker2_img} style={{marginLeft: "120px", backgroundColor: "#F1F1F1"}}>
            <img src={speaker2} alt="speaker2" style={{width: "280px", height: "320px", padding: "60px", }} />
          </div>
        </div>

      <div className={styles.contain}>
        <LeftImages></LeftImages>
        <Cards></Cards>
        <Audio></Audio>
      </div>

    </>
  );
}

export default Headphones;
