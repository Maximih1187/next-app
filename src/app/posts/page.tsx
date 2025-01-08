import styles from "./styles.module.css";
import type { Metadata } from "next";
import UlPosts from "@/components/UlPosts/UlPosts";



export const metadata: Metadata = {
  title: 'Posts',
  description: "Generated by create next app",
  keywords: "Posts страница",
};

export async function getFetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'
    )
    if (!response.ok) {
      throw new Error('пиздос')
    }
    return await response.json()
  } catch (error) {
    console.log(error);
  }
}

export default async function Posts() {
  const resPosts = await getFetchPosts()

  return (
    <div className={styles.container}>
      <UlPosts resPosts={resPosts} />
    </div>
  );
}
