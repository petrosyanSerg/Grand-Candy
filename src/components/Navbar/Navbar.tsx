import React from "react";
import Link from "next/link";
import Pathname from "@/routes/Pathname";
import { useTranslations } from "next-intl";
import { CgCloseO } from "react-icons/cg";
import styles from "./Navbar.module.scss";

interface INavbar {
  onClose: () => void;
}

export default function Navbar({ onClose }: INavbar) {
  const t = useTranslations("MainLink");
  return (
    <nav className={styles.Navbar}>
      <span className={styles.Navbar__Close} onClick={onClose}>
        <CgCloseO className={styles.Navbar__Close__Icon} />
      </span>
      <ul className={styles.Navbar__Menu} onClick={onClose}>
        <li className={styles.Navbar__Item}>
          <Link className={styles.Navbar__Link} href={Pathname.home}>
            {t("home")}
          </Link>
        </li>
        <li className={styles.Navbar__Item}>
          <Link className={styles.Navbar__Link} href={Pathname.about}>
            {t("about")}
          </Link>
        </li>
        <li className={styles.Navbar__Item}>
          <Link className={styles.Navbar__Link} href={Pathname.product}>
            {t("products")}
          </Link>
        </li>
        <li className={styles.Navbar__Item}>
          <Link className={styles.Navbar__Link} href={Pathname.stores}>
            {t("stores")}
          </Link>
        </li>
        <li className={styles.Navbar__Item}>
          <Link className={styles.Navbar__Link} href={Pathname.contacts}>
            {t("contacts")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
