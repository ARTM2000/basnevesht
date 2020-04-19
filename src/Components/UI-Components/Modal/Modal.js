import React from "react";

import StyleSheet from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <div
    className={props.showP ? StyleSheet.MainOnShow : StyleSheet.Main}
    style={{
      opacity: props.showP ? "1" : "0",
    }}
  >
    <Backdrop show={props.showP} clicked={props.modalClosed} />
    <div
      className={StyleSheet.ShowPart}
      style={{
        transform: props.showP ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.showP ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </div>
);

export default modal;
