import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.closeOverlay}></div>;
};

const Overlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop closeOverlay={props.closeOverlay} />, document.getElementById("overlays"))}
      {createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
