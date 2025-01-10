"use server"
import styles from "./styles.module.css";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: {
    id: string;
    albumsid: string;
  };
}

interface IitemAlbum {
  id: number,
  title: string
}

export async function getFetchPosts(id: string) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`
    )
    if (!response.ok) {
      throw new Error('пиздос')
    }

    return await response.json()
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { albumsid } = await params;

  return {
    title: `Albums_${albumsid}`,
  };
}

export default async function Albumsid({ params }: Props) {

  const { id, albumsid } = await params;
  const albumsAitem: IitemAlbum = await getFetchPosts(id);

  return (
    <div className={styles.container} >
      <h1 className={styles.h1}>{`Albums_${albumsid}`}</h1>
      {!albumsAitem ? <div>loading...</div> :

        <div className={styles.title} key={albumsAitem.id}>{albumsAitem.title}</div>
      }
      <Link className={styles.button} href={`/posts/${id}/albums`}>назад</Link>
    </div>
  );
}
