import styles from "./styles.module.css";
import React from "react";
import TeLLayout from "@/components/TeLLayout/TeLLayout";

export default function Home() {
  return (
    <div className={styles.container}>
      <TeLLayout />
    </div>
  );
}
