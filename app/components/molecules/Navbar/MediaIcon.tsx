// components/Icon.tsx
import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  className?: string;
  href: string;
}

export function MediaIcon({ icon: Icon, className, href }: IconProps) {
  return (
    <Link href={href}>
      <Icon
        className={clsx(
          "w-5 h-5 cursor-pointer transition-colors duration-300  hover:text-primary-green",
          className
        )}
      />
    </Link>
  );
}
