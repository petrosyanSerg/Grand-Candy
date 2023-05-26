import React, { useEffect } from "react";
import Image from "next/image";
import dataImage from "@/assets/data/imageData";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

import styles from "./Slider.module.scss";
import useIndex from "@/assets/hooks/useIndex";
export default function Slider() {
  const { index, next, prev } = useIndex(dataImage.length - 1);

  return (
    <aside className={styles.Slider}>
      <div className={styles.Slider__ImageCont}>
        <Image
          className={styles.Slider__Image}
          src={dataImage[index]}
          alt="Grand Candy"
          placeholder="blur"
        />
      </div>
      <div className={styles.Slider__Buttons}>
        <div onClick={prev} className={styles.Slider__Prev}>
          <BsArrowLeftSquareFill />
        </div>
        <div onClick={next} className={styles.Slider__Next}>
          <BsArrowRightSquareFill />
        </div>
      </div>
    </aside>
  );
}
