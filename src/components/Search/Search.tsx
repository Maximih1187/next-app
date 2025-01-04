"use client";
import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import styles from "./styles.module.css";

import { searchPosts } from "@/service/getPost";

interface IProp {
  setPosts: Dispatch<SetStateAction<never[]>>;
}

const Search: FC<IProp> = ({ setPosts }) => {
  const [value, setValue] = useState("");

  const hendleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPosts(value).then((data) => setPosts(data));
    setValue("");
  };

  return (
    <form onSubmit={(e) => hendleSubmit(e)} className={styles.form}>
      <input
        onChange={(event) => {
          setValue(event.target.value);
        }}
        type="search"
        value={value}
      />
      <button type="submit">search</button>
    </form>
  );
};

export default Search;
