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
import earphone from '../../assets/earphone.png'
import { Link } from "react-router-dom";

function Headphones() {
  const { page } = useParams();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
   
      <MainTitle title={page}></MainTitle>     
      <div className={styles.earphone} style={{display: "flex", width: "1110px", marginLeft: "auto", marginRight: "auto", marginTop: "130px", marginLeft: "300px"}}>
        
          <div className={styles.earphone_img} style={{backgroundColor: "#F1F1F1"}}>
            <img src={earphone} alt="earphone"  style={{width: "300px", height: "300px", padding: "60px", }}  />
          </div>
          <div className={styles.earphone_title} style={{marginLeft: "120px"}}>
            <p style={{position: 'absolute', color: "#D87D4A", letterSpacing: "5px", fontSize: "12px"}}>NEW PRODUCT</p>
            <h4  style={{fontSize: "40px"}}>YX1 Wireless Earphones</h4>
            <p  style={{fontSize: "12px", letterSpacing: "1px", opacity: "50%"}}>Tailor your listening experience with bespoke dynamic drivers <br /> from the new YX1 Wireless Earphones. Enjoy incredible <br /> high-fidelity sound even in noisy environments with its active <br />   noise cancellation feature.</p>

            <Link to="/pages/earphone/4">
              <button style={{padding: "10px", width: "150px", backgroundColor: "#D87D4A", border: "none", color: "#fff", marginTop: "10px"}}>See Product</button>
            </Link>
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
