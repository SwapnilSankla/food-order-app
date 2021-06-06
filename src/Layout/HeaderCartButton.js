import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCardButton = (props) => {
  const cartContext = useContext(CartContext);

  const buttonClickHandler = () => {
    props.cartButtonClicked();
  };

  return (
    <button className={styles.button} onClick={buttonClickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{cartContext.numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCardButton;
