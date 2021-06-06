import { useContext } from "react";
import CartContext from "../Store/cart-context";
import Modal from "../UI/Modal";
import styles from "./ShoppingCart.module.css";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = ctx.total;

  const closeClickHandler = () => {
    props.closeOverlay();
  };

  const orderClickHandler = () => {
    console.log("Ordering...");
    props.closeOverlay();
  };

  return (
    <Modal closeOverlay={props.closeOverlay}>
      {!ctx.isCartEmpty && (
        <ul>
          {Array.from(ctx.items.values()).map((item) => (
            <ShoppingCartItem
              key={item.name}
              name={item.name}
              count={item.count}
              price={item.price}
            />
          ))}
        </ul>
      )}
      {!ctx.isCartEmpty && (
        <div className={styles.total}>
          <label>Total Amount</label>
          <label>${totalAmount}</label>
        </div>
      )}
      {ctx.isCartEmpty && <p className={styles.p}>Your cart is empty!</p>}
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={closeClickHandler}>
          Close
        </button>
        <button
          className={!ctx.isCartEmpty ? styles.button : styles["disabled-button"]}
          disabled={ctx.isCartEmpty}
          onClick={orderClickHandler}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default ShoppingCart;
