'use server'
import RandomCounter from "../RandomCounter/RandomCounter";
import styles from "./styles.module.css";
import Image from 'next/image'
import fedya from './img/fedya.png'


const TeLLayout = () => {
  return (
    <>
      <h1 className={styles.h1}>Привет гриды</h1>
      <div className={styles.box}>
        <div className={styles.navbar}>
        </div>
        <div className={styles.block}>
          <RandomCounter />
        </div>
        <div className={styles.navbar}>
          <Image src={fedya} className={styles.imges}
            alt="фото Федя" />
        </div>
      </div >

    </>
  );
};

export default TeLLayout;
