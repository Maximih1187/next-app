import styles from "./styles.module.css";
import React, { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children,
  disabled,
}) => {
  return (
    <button disabled={disabled} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
