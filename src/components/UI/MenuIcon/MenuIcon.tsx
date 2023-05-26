import React from "react";
import { CgMenuCake } from "react-icons/cg";
import styles from "./MenuIcon.module.scss";
interface IMenuIcon {
  onOpen: () => void;
}
export default function MenuIcon({ onOpen }: IMenuIcon) {
  return (
    <div className={styles.Icon} onClick={onOpen}>
      <CgMenuCake />
    </div>
  );
}
