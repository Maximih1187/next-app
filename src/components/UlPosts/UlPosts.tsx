"use client";

import styles from "./styles.module.css";
import Poster from "../Poster/Poster";
import Search from "../Search/Search";
import { useEffect, useState, ReactNode } from "react";

interface IPoste {
  id: string;
  title: string;
}
interface IResPosts {
  resPosts: IPoste[]
}

const UlPosts = ({ resPosts }: IResPosts) => {
  const [posts, setPosts] = useState<IPoste[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStr, setFilterStr] = useState('');




  useEffect(() => {
    if (resPosts)
      setPosts(resPosts);
    setLoading(false)
  }, []);


  // const filterPosts = () => {
  //   let filtr =
  //     resPosts.filter((item) => {
  //       return item.title.includes(filterStr)
  //     })
  //   // setFilter(filtr)


  // }
  // filterPosts()
  // console.log(filtr);


  return (
    <>
      <Search disabled={posts.length < 1} setFilterStr={setFilterStr}

      />
      <ul className={styles.ul}>
        {!loading ? (posts.filter((item) => { return item.title.includes(filterStr) })
          .map((post: IPoste) => {
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
