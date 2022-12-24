import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Snowfall from "react-snowfall";
import Script from "next/script";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";

// import the icons you need
export default function Home() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const ref = useRef(null);
  const ref1 = useRef(null);
  useClickAway(ref, () => {
    setOpen(!open);
  });
  useClickAway(ref1, () => {
    setOpen1(!open1);
  });
  return (
    <div className={styles.container}>
      <Snowfall
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
        style={{
          position: "fixed",
        }}
      />
      <Head>
        <title>FivemSirens Coming Soon</title>
        <meta name="description" content="New Fivem Site Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <label className={styles.lol}>Coming</label>{" "}
          <a href="https://discord.gg/ewdQPc9G4m">Soon!</a>
        </h1>

        <p className={styles.description}>
          Working day and night on this page!
          <code className={styles.code}>2 Day Streak</code>
        </p>
        {/* Made the div here just for the buttons don't delete it */}
        <div>
          <a
            href=""
            className={`${styles.button} ${styles.one}`}
            target="_blank"
          >
            Leo
          </a>
          <a
            href=""
            className={`${styles.button} ${styles.three}`}
            target="_blank"
          >
            Fire
          </a>
        </div>
        <div className={styles.container2}>
          <div className={styles.card}>
            <div className={styles.box}>
              <div className={styles.content}>
                <h2>01</h2>
                <h3>leofile_0001</h3>
                <>
                  <a onClick={() => setOpen(!open)}>Demo Video</a>
                  <br />
                  {open && (
                    <div className={styles.modal_container}>
                      <div ref={ref} className={styles.modal}>
                        <iframe
                          width="800"
                          height="400"
                          frameBorder="0"
                          allowFullScreen
                          src="//www.youtube.com/embed/ccW_OYApEZE"
                        ></iframe>
                      </div>
                    </div>
                  )}
                </>
                <a href="#">Download</a>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.box}>
              <div className={styles.content}>
                <h2>02</h2>
                <h3>firefile_0001</h3>
                <>
                  <a onClick={() => setOpen1(!open1)}>Demo Video</a>
                  <br />
                  {open && (
                    <div className={styles.modal_container}>
                      <div ref={ref1} className={styles.modal}>
                        <iframe
                          width="800"
                          height="400"
                          frameBorder="0"
                          allowFullScreen
                          src="//www.youtube.com/embed/UougN78TlDM"
                        ></iframe>
                      </div>
                    </div>
                  )}
                </>
                <a href="#">Download</a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className={styles.grid}>
          <a className={styles.card2}>
            <h2>Join Our Discord &rarr;</h2>
            <p>Join one of the greatest communities!</p>
          </a>
        </div>

        {/* The first youtube modal here */}

        <Script src="/modals.js"></Script>
      </main>
      <footer className={styles.footer}>
        Made with 🖤 by {"Grainger#5445"}
      </footer>
    </div>
  );
}
