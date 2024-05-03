import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./index.module.css";
import Loader from "../Loader";

function HeroCard() {
  // useParams hooks orqali page ni olish
  const { page } = useParams();
  // Data va loader holatlarini saqlab turish uchun useState hooks larni ishlatamiz
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  // useEffect hooks orqali data olish
  useEffect(() => {
    // Ma'lumot olish boshlandi, loader ni yoqamiz
    setLoader(true);
    // Fetch asinxron ma'lumot olish
    fetch(`http://localhost:3004/${page}`)
      .then((res) => res.json())
      .then((data) => {
        // Ma'lumotlarni saqlaymiz va loader ni o'chirib qo'yamiz
        setData(data);
        setLoader(false);
      })
      .catch((err) => {
        // Xato bo'lganda xato haqida habar beramiz va loader ni o'chirib qo'yamiz
        console.log(err);
        setLoader(false);
      });
  }, [page]); // page o'zgaruvchisi o'zgarganda useEffect qayta ishlaydi

  return (
    <>
      {/* loader true bo'lsa Loader komponentni ko'rsatamiz, aks holda datani ko'rsatamiz */}
      {loader ? (
        <Loader />
      ) : (
        <div>
          {/* data arraydan har bir elementni map qilamiz */}
          {data.map((el, index) => {
            // Oddiy ternary operator yordamida flex-direction ni belgilaymiz
            const flexDirection = index % 2 === 1 ? "row-reverse" : "";
            return (
              // Har bir karta uchun card__wrapper divini chiqaramiz
              <div
                key={index}
                status={(index + 1) % 2 === 0 ? "right" : "left"}
                className={styles.card__wrapper}
                style={{ flexDirection: flexDirection }}
              >
                {/* Karta rasmni chiqaramiz */}
                <div className={styles.card__img}>
                  <img src={el.image} alt={el.name} />
                </div>
                {/* Karta sarlavhasini chiqaramiz */}
                <div className={styles.card__title}>
                  <h4>NEW PRODUCT</h4>
                  <h2>{el.name}</h2>
                  <p>{el.description}</p>
                  <Link to={`/pages/${page}/${el.id}`}>
                    <button>See Product</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default HeroCard;
