import styles from "../styles/Home.module.css";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Modal from "./Modal";

function CardComponent({
  name,
  id,
  src,
  category
}: {
  name: string;
  id: string;
  src: string;
  category: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsOpen(false);
  });

  return (
    <>
      {isOpen && (
        <Modal ref2={ref}>
          <iframe
            width="800"
            height="400"
            frameBorder="0"
            allowFullScreen
            src={src}
          ></iframe>
        </Modal>
      )}
      <div className={styles.card}>
       
       <div className={styles.box}>
              <div className={styles.content}>
                <h2>{id}</h2>
                <h3>{name}</h3>
                <>
                  <a key={name} onClick={(e) => setIsOpen(true)}>Demo Video</a>
                  <br />
                </>
                <a href="#">{category}</a>
              </div>
        </div>
        </div>
    </>
  );
}
export default CardComponent;
