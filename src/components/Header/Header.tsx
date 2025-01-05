import React from "react";
import styles from "./styled.module.css";

import Navigation from "../Navigation/Navigation";

const Header = () => {
   const navItems = [
      { lable: "Home", href: "/" },
      { lable: "About", href: "/about" },
      { lable: "Tel", href: "/tel" },
      { lable: "404", href: "/404" },
   ];

   return (
      <header className={styles.header}>
         <nav>
            <ul className={styles.ul}>
               <Navigation navlinks={navItems} />
            </ul>
         </nav>
      </header>
   );
};

export default Header;
