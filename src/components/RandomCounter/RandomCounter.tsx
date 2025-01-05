"use client";
import Button from "../Button/Button";
import styles from "./styles.module.css";
import React, { useState } from "react";

const RandomCounter = () => {
  const [text, setText] = useState<string>();
  const nameButton = () => {
    setText((Math.random() * 100).toFixed(1));
  };
  return (
    <div>
      <div className={styles.box}>
        <div>
          <Button onClick={nameButton}>Привет</Button>
          <Button onClick={nameButton}> Как дела?</Button>
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default RandomCounter;
