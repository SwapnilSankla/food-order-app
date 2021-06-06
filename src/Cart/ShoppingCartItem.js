import { useContext } from "react";
import CartContext from "../Store/cart-context";
import styles from "./ShoppingCartItem.module.css";

const ShoppingCartItem = (props) => {
  const ctx = useContext(CartContext);

  const addButtonHandler = () => {
    ctx.addItem({
      name: props.name,
      count: 1,
      price: props.price,
    })
  }

  const removeButtonHandler = () => {
    ctx.removeItem(props.name)
  }

  return (
    <div className={styles['car-item-wrapper']}>
      <div className={styles["cart-item"]}>
        <h2>{props.name}</h2>
        <div>
          <button onClick={addButtonHandler}>+</button>
          <button onClick={removeButtonHandler}>-</button>
        </div>
      </div>
      <div className={styles.summary}>
        <label className={styles.price}>
          ${parseFloat(props.price).toFixed(2)}
        </label>
        <label className={styles.amount}>x {props.count}</label>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
