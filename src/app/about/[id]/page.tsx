import styles from "./styles.module.css";
// import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

// export async function generateMetadata({ params: { id } }: Props) {
//   return {
//     title: id,
//   };
// }

const getData = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
};

export default async function Id({ params: { id } }: Props) {
  const response = await getData(id);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.id}>{response.id}</div>
        <div className={styles.title}>{response.title}</div>
      </div>
      <Link className={styles.button} href="/about">
        {/* <button className={styles.button}> */}
        Назад
        {/* </button> */}
      </Link>
    </div>
  );
}
