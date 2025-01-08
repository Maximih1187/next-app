import { getPosts } from "@/service/getPost";
import styles from "./styles.module.css";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPosts({ id });
  return {
    title: `About ${post.title}`,
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const post = await getPosts({ id });


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.id}>{post.id}</div>
        <div className={styles.title}>{post.title}</div>
      </div>
      <div className={styles.wrapperbutton}>
        <Link className={styles.button} href="/posts">
          Назад
        </Link>
        <Link className={styles.button} href={`${id}/albums`}>
          Albums
        </Link >
      </div>
    </div>
  );
}
