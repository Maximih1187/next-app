import Link from "next/link";
import styles from "./styles.module.css";

type Props = {
  id: string;
  title: string;
};

const Poster = ({ id, title }: Props) => {
  return (
    <li className={styles.li}>
      <Link className={styles.link} href={`/posts/${id}`}>{title}</Link>
    </li>
  );
};

export default Poster;
