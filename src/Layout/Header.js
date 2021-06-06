import { Fragment } from "react";
import Image from "../Assets/meals.jpeg";
import styles from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCardButton cartButtonClicked= {props.cartButtonClicked}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={Image} alt="Table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
