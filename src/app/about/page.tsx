import Link from "next/link";
import styles from "./styles.module.css";
import type { Metadata } from "next";

interface IPoste {
  userId: string;
  id: string;
  title: string;
  body: string;
}

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

export const metadata: Metadata = {
  title: "About",
  description: "Generated by create next app",
  keywords: "домашняя страница",
};

export default async function About() {
  const data: IPoste[] = await getData();
  return (
    <div className={styles.container}>
      <div className={styles.box}>About</div>
      <ol className={styles.ul}>
        {data.map((post: IPoste) => {
          return (
            <Link href={`/about/${post.id}`} key={post.id}>
              <li className={styles.li}>{post.title}</li>
            </Link>
          );
        })}
      </ol>
    </div>
  );
}
