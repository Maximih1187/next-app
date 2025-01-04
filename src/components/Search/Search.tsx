"use client";
import {
  Dispatch,
  FC,
  FormEvent,
  InputHTMLAttributes,
  SetStateAction,
  useState,
} from "react";
import styles from "./styles.module.css";

import { searchPosts } from "@/service/getPost";

interface IProp extends InputHTMLAttributes<HTMLInputElement> {
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
        placeholder="введи запрос"
        className={styles.input}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="search"
        value={value}
      />
      <button className={styles.button} type="submit">
        search
      </button>
    </form>
  );
};

export default Search;
