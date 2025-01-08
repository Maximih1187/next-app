import { getPosts } from "@/service/getPost";
import styles from "./styles.module.css";
import type { Metadata } from "next";
import Link from "next/link";


// interface Props {
//   params: {
//     id: string;
//   };
// }

export const metadata: Metadata = {
  title: 'Albums'

}

export async function getListFromAlbums() {
  try {
    const itemsFromAlbums = await fetch('https://jsonplaceholder.typicode.com/albums')
    if (!itemsFromAlbums) throw new Error("Альбому пиздос");
    return itemsFromAlbums.json()
  } catch (error) {
    console.log(error);
  }
}

type itemAlbum = {
  id: string;
  title: string
}

interface IlistAlbums {
  listFromAlbums: itemAlbum[]
}

export default async function Albums() {
  const listFromAlbums = await getListFromAlbums()
  console.log(listFromAlbums);

  return (
    <div className={styles.container} >
      <h1>Albums</h1>
      <ul>
        {listFromAlbums ? listFromAlbums.map((item: itemAlbum) => {
          return (
            <li className={styles.li} key={item.id}>
              <Link href={`albums/${item.id}`} >{item.title}</Link>
            </li>)

        }) : <h2>
          loading...
        </h2>}
      </ul>
    </div>
  );
}
