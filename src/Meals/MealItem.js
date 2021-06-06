import { useContext, useRef } from "react";
import CartContext from "../Store/cart-context";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const inputRef = useRef();
  const ctx = useContext(CartContext);
  const addButtonHandler = (event) => {
    event.preventDefault();
    ctx.addItem({
      name: props.name,
      count: parseInt(inputRef.current.value),
      price: props.price,
    });
  };

  return (
    <div className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <label className={styles.description}>{props.description}</label>
        <label className={styles.price}>${props.price}</label>
      </div>
      <form className={styles.form} onSubmit={addButtonHandler}>
        <div className={styles.input}>
          <label>Amount</label>
          <input
            type="number"
            ref={inputRef}
            defaultValue="1"
            min="1"
            max="5"
          ></input>
        </div>
        <button type="submit">+Add</button>
      </form>
    </div>
  );
};

export default MealItem;
