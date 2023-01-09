import styles from "../styles/Home.module.css";
import React, { ReactNode } from "react";

function Modal({ref2, children }: {ref2: any;  children: ReactNode }) {
  return (
    <div className={styles.modal_container}>
      <div ref={ref2} className={styles.modal}>
        {children}
      </div>
    </div>
  );
}
export default Modal;
