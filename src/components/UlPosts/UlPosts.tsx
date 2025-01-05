"use client";

import styles from "./styles.module.css";
import Poster from "../Poster/Poster";
import Search from "../Search/Search";
import { getPosts } from "@/service/getPost";
import { useEffect, useState, ReactNode } from "react";

export interface IPoste {
  id: string;
  title: string;
}
const UlPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [errors, setError] = useState<ReactNode | unknown>();

  useEffect(() => {
    getPoster();
  }, []);

  const getPoster = () => {
    getPosts({})
      .then((data) => {
        if (data) {
          setPosts(data);
          setLoading(false);
        } else setLoading(true);
      })
      .catch(() => {
        setLoading(true);
      });
  };

  return (
    <>
      <Search disabled={posts.length < 1} setPosts={setPosts} />
      <ul className={styles.ul}>
        {!loading ? (
          posts.map((post: IPoste) => {
            return <Poster key={post.id} id={post.id} title={post.title} />;
          })
        ) : (
          <div>loading...</div>
        )}
      </ul>
    </>
  );
};

export default UlPosts;
