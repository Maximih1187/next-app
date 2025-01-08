import { getPosts } from "@/service/getPost";
import styles from "./styles.module.css";
import type { Metadata } from "next";
import Link from "next/link";


interface Props {
  params: {
    id: string;
    albumsid: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { albumsid } = await params;
  // const post = await getPosts({ id });
  return {
    title: `Albums ${albumsid}`,
  };
}

export default async function Albumsid({ params }: Props) {
  const { id, albumsid } = await params;
  return (
    <div className={styles.container} >
      <h1>{`Albums${id},${albumsid}`}</h1>
      <Link className={styles.button} href={`/posts/${id}/albums`}>назад</Link>
    </div>
  );
}
