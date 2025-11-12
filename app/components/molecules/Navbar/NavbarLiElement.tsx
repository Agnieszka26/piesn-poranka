import Link from "next/link";
import React from "react";
type NavbarLiElementProps = {
  href: string;
  label: string;
};
const NavbarLiElement = ({ href, label }: NavbarLiElementProps) => {
  return (
    <li
      key={label}
      className="cursor-pointer transition-colors duration-300  hover:text-primary-green"
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default NavbarLiElement;
