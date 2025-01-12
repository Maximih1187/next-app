"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


type NavItem = {
  lable: string;
  href: string;
};
type Props = {
  navlinks: NavItem[];
};

const Navigation = (
  { navlinks }: Props
) => {
  const pashname = usePathname();

  console.log(pashname);

  return (
    <>
      {navlinks ? navlinks.map((link) => {
        let isActive =
          pashname === link.href ||
          pashname === `${"/posts"}${pashname.slice(link.href.length)}`;


        return (
          <Link
            key={link.lable}
            className={isActive ? "active" : ""}
            href={link.href}
          >
            {link.lable}
          </Link>
        );
      }) : null}
    </>
  );
};

export default Navigation;
