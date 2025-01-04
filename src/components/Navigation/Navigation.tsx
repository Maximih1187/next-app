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

const Navigation = ({ navlinks }: Props) => {
  const pashname = usePathname();

  return (
    <>
      {navlinks.map((link) => {
        const isActive = pashname === link.href;
        return (
          <Link
            key={link.lable}
            className={isActive ? "active" : ""}
            href={link.href}
          >
            {link.lable}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
