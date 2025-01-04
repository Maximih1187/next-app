import Link from "next/link";
import styles from "./styles.module.css";

type Props = {
  id: string;
  title: string;
};

const Poster = ({ id, title }: Props) => {
  return (
    <li className={styles.li}>
      <Link href={`/about/${id}`}>{title}</Link>
    </li>
  );
};

export default Poster;
