"use client";
import React from "react";
import Languages from "../Languages/Languages";
import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/images/logo/Logo.png";
import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.scss";
import MenuIcon from "../UI/MenuIcon/MenuIcon";
import useToggle from "@/assets/hooks/useToggle";
import Pathname from "@/routes/Pathname";

export default function Header() {
  const { handleClose, handleOpen, isOpen } = useToggle();

  return (
    <header className={styles.header}>
      <div className={styles.Logo}>
        <Link href={Pathname.home} className={styles.Logo__Link}>
          <Image
            src={Logo}
            alt="Logo Grand Candy"
            placeholder="blur"
            className={styles.Logo__Img}
          />
        </Link>
      </div>
      <Languages />
      <MenuIcon onOpen={handleOpen} />
      {isOpen && <Navbar onClose={handleClose} />}
    </header>
  );
}
