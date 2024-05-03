import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "../Modal/index.module.css";

function CartModal({ setModal }) {
  const [count, setCount] = useState(1);
  const selectRef = useRef(0);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = getData();
    const total = calculateTotal(data);
    setProducts(data);
  }, []);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    selectRef.current = count;
  }, [count]);

  const handleDelete = () => {
    dispatch({ type: "Remove__all", payload: "" });
    localStorage.removeItem("products");
  };

  const handleCheckout = () => {
    navigate(`/pages/checkout`);
  };

  const getData = () => {
    const data = localStorage.getItem("products");
    return data ? JSON.parse(data) : [];
  };

  const calculateTotal = (data) => {
    return data.reduce((total, product) => {
      return total + Number(product.count * product.price);
    }, 0);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h1>CART ({products.length})</h1>
          <button onClick={handleDelete}>Remove all</button>
          <p className={styles.exit} onClick={() => setModal(false)}>
            X
          </p>
        </div>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.images}>
              <img src={product.image} alt="" />
            </div>
            <div className={styles.name}>
              <h3>{product.title}</h3>
              <h6>$ {product.price}</h6>
            </div>
            <div className={styles.count}>
              <button className={styles.decrement} onClick={decrement}>
                -
              </button>
              <div className={styles.raqam}>{count}</div>
              <button className={styles.increment} onClick={increment}>
                +
              </button>
            </div>
          </div>
        ))}
        <div className={styles.total}>
          <h2>TOTAL</h2>
          <p>$ {calculateTotal(products)}</p>
        </div>
        <button onClick={handleCheckout} className={styles.button}>
          CHECKOUT <h1></h1>
        </button>
      </div>
    </div>
  );
}

export default CartModal;
