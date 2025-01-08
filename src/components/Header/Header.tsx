import React from "react";
import styles from "./styled.module.css";
import Navigation from "../Navigation/Navigation";





async function headerNavItem() {
   const response = await fetch('http://localhost:3001/api/headers');
   return await response.json()

}

const Header = async () => {
   // const navItems = [
   //    { lable: "Home", href: "/" },
   //    { lable: "About", href: "/about" },
   //    { lable: "Tel", href: "/tel" },
   //    { lable: "404", href: "/404" },
   // ];

   const navlinks = await headerNavItem()
   console.log(navlinks);


   return (
      <header className={styles.header}>
         <nav>
            <ul className={styles.ul}>
               <Navigation
                  navlinks={navlinks}
               />
            </ul>
         </nav>
      </header>
   );
};

export default Header;
