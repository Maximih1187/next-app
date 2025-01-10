
import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  FC,
  // FormEvent,
  InputHTMLAttributes,
  SetStateAction,
  // useState,
} from "react";
import styles from "./styles.module.css";
// import Button from "../Button/Button";
// import { getPosts } from "@/service/getPost";


interface IProp extends InputHTMLAttributes<HTMLInputElement> {

  setFilterStr: Dispatch<SetStateAction<string>>
}

const Search: FC<IProp> = ({ disabled, setFilterStr }) => {
  // const [value, setValue] = useState("");

  const hendleSubmit: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilterStr(e.target.value);
    // const search = e.target.search.value;
    // setValue()
  };

  return (
    <form
      autoComplete="off"
      autoCapitalize="off"
      // onSubmit={hendleSubmit}
      className={styles.form}>
      <input
        // onSubmit={hendleSubmit}
        name="search"
        disabled={disabled}
        placeholder="введи запрос"
        className={styles.input}
        type="search"
        onChange={(e) => hendleSubmit(e)}

      />
      {/* <input
        value={'search'}
        className={styles.button}


        type="submit"

      /> */}


    </form>
  );
};

export default Search;
