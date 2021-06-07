import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCardButton = (props) => {
  const cartContext = useContext(CartContext);
  const [highlightButton, setHighlightButton] = useState(false);
  const { numberOfItemsInCart } = cartContext;
  useEffect(() => {
    if (numberOfItemsInCart > 0) {
      setHighlightButton(true);
    }
    const timeout = setTimeout(() => {
      setHighlightButton(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [numberOfItemsInCart]);

  const buttonClickHandler = () => {
    props.cartButtonClicked();
  };

  const buttonClass = `${styles.button} ${highlightButton && styles.bump}`;

  return (
    <button className={buttonClass} onClick={buttonClickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCardButton;
