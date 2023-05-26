import React, { useEffect } from "react";
import Link from "next/link";

import styles from "./Languages.module.scss";
import { usePathname } from "next/navigation";

export default function Languages() {
  const pathname = usePathname();

  return (
    <nav className={styles.Languages}>
      <ul className={styles.Languages__Menu}>
        <li className={styles.Languages__Item}>
          <Link href="/hy" className={styles.Languages__Link}>
            Հայ
          </Link>
        </li>
        <li className={styles.Languages__Item}>
          <Link href="/ru" className={styles.Languages__Link}>
            Рус
          </Link>
        </li>
        <li className={styles.Languages__Item}>
          <Link href="/en" className={styles.Languages__Link}>
            Eng
          </Link>
        </li>
      </ul>
    </nav>
  );
}
