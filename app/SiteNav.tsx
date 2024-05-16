"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export const SecondLevelNav = () => {
  const path = usePathname();
  const activeOnPrefix = (prefix: string) =>
    path.startsWith(prefix) ? "font-semibold" : "typo-link";
  return (
    <ul className="flex flex-col flex-wrap gap-7 text-base md:flex-row">
      <li>
        <Link href="/" className={activeOnPrefix("/projects")}>
          Projekty
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className={activeOnPrefix("/opportunities")}
        >
          Hledané role
        </Link>
      </li>
      <li>
        <Link href="/" className={activeOnPrefix("/events")}>
          Akce
        </Link>
      </li>
    </ul>
  );
};
