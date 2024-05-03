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
      <div className={styles.headphones} style={{display: "flex", width: "1110px", marginLeft: "auto", marginRight: "auto", marginTop: "130px", marginLeft: "300px" }}>
          <div className={styles.headphones_img} style={{backgroundColor: "#F1F1F1"}}>
            <img src={headphones} alt="headphones" style={{width: "300px", height: "280px", padding: "50px", }} />
          </div>
          <div className={styles.headphones_title} style={{marginLeft: "120px"}}>
            <p style={{position: 'absolute', color: "#D87D4A", letterSpacing: "5px", fontSize: "12px"}}>NEW PRODUCT</p>
            <h4 style={{fontSize: "40px"}}>XX99 Mark II <br /> Headphones</h4>
            <p style={{fontSize: "12px", letterSpacing: "1px", opacity: "50%"}}>The new XX99 Mark II headphones is the pinnacle of pristine <br /> audio. It redefines your premium headphone experience by <br /> reproducing the balanced depth and precision of studio-quality <br /> sound.</p>

            <Link to="/pages/speaker/6">
              <button style={{padding: "10px", width: "150px", backgroundColor: "#D87D4A", border: "none", color: "#fff", marginTop: "10px"}}>See Product</button>
            </Link>
          </div>
        </div>
        <div className={styles.headphon} style={{marginLeft: "300px"}}>
          
          <div className={styles.headphon_title} style={{display: "flex",  width: "1110px", marginLeft: "auto", marginRight: "auto", marginTop: "130px" }}>
            <div>

            <h4 style={{fontSize: "40px"}}>XX99 Mark I <br /> headphones</h4>
            <p  style={{fontSize: "12px", letterSpacing: "1px", opacity: "50%"}}>As the gold standard for headphones,  the classic XX99 Mark I <br /> offers detailed and accurate audio reproduction for   <br /> audiophiles, mixing engineers, and music aficionadosalike in  <br /> studios and on the go.</p>
            <Link to="/pages/headphon/3">
              <button  style={{padding: "10px", width: "150px", backgroundColor: "#D87D4A", border: "none", color: "#fff", marginTop: "10px"}}>See Product</button>
            </Link>
            </div>
          
            <div className={styles.headphon_img} style={{backgroundColor: "#F1F1F1", marginLeft: "200px"}} >
            <img src={headphon} alt="headphon" style={{width: "300px", height: "300px", padding: "80px", }}  />
            <div>
        
            </div>
         
          </div>
          
          </div>
        </div>
        <div className={styles.headphone3} style={{display: "flex", marginLeft: "300px", marginTop: "130px"}}>
          <div className={styles.headphone3_img} style={{backgroundColor: "#F1F1F1"}}>
            <img src={headphone3} alt="headphone3" style={{width: "300px", height: "300px", padding: "60px", }} />
          </div>
          <div className={styles.headphone3_title}  style={{marginLeft: "120px"}}>

            <h4 style={{fontSize: "40px"}}>XX99 Mark I <br /> headphone3es</h4>
            <p style={{fontSize: "12px", letterSpacing: "1px", opacity: "50%"}}>Enjoy your audio almost anywhere and customize it to your <br /> specific tastes with the XX59 headphones. The stylish yet <br /> durable versatile wireless headset is a brilliant companion at <br /> home or on the move.</p>
            <Link to="/pages/headphone3/3">
              <button  style={{padding: "10px", width: "150px", backgroundColor: "#D87D4A", border: "none", color: "#fff", marginTop: "10px"}}>See Product</button>
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
