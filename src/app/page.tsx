"use client";

import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import Button from "../components/Button/Button";

export default function Home() {
  const [text, setText] = useState<number>();
  useEffect(() => {}, [text]);
  const nameButton = () => {
    setText(Math.random());
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>Home</div>
      <div>
        <Button onClick={() => nameButton()}>Привет</Button>
        <Button onClick={() => nameButton()}> Как дела?</Button>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
