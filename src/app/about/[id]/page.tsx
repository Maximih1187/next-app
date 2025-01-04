import { getPost } from "@/service/getPost";
import styles from "./styles.module.css";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPost(id);
  return {
    title: `About ${post.title}`,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPost(id);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.id}>{post.id}</div>
        <div className={styles.title}>{post.title}</div>
      </div>
      <Link className={styles.button} href="/about">
        Назад
      </Link>
    </div>
  );
}
