import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Snowfall from "react-snowfall";
import Script from "next/script";
import React, { useRef, useState, useEffect } from "react";
import CardComponent from "../components/CardComponent";
// import the icons you need
export default function Home() {
  const json = [
    {
      id: "1",
      name: "Leo",
      src: "//www.youtube.com/embed/BsH8jqxpcno",
      category: "leo"
    },
    {
      id: "2",
      name: "Leo",
      src: "//www.youtube.com/embed/50BT55tehB8",
      category: "leo"
    },
    {
      id: "3",
      name: "Leo",
      src: "//www.youtube.com/embed/WTzxlajXyqs",
      category: "leo"
    },
    {
      id: "4",
      name: "Fire",
      src: "//www.youtube.com/embed/Lx8xPthMi9c",
      category: "fire"
    }
  ];
  return (
    <div className={styles.container}>
      
      
      <Head>

        <title>Fivem Sirens</title>
        <meta name="description" content="New Fivem Site Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Snowfall
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
        style={{
          position: "fixed",
        }}
      />
      <main className={styles.main}>
        <h1 className={styles.title}>
          <label className={styles.lol}>Fivem</label>{" "}
          <a href="https://discord.gg/ewdQPc9G4m">Sirens</a>
        </h1>

        <p className={styles.description}>
          This is still worked on, don't mind the mess!
          <code className={styles.code}>Nextjs</code>
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
        {json.map((item) => (
            <CardComponent {...item} key={item.id}   />
          ))}
         
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
