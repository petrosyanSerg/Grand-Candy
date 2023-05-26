"use client";
import React from "react";
import Meta from "@/components/Meta/Meta";
import Container from "@/components/UI/Container/Container";
import Slider from "@/components/UI/Slider/Slider";
import { useTranslations } from "next-intl";
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }, { locale: "hy" }];
}
import styles from "./about.module.scss";
export default function About() {
  const t = useTranslations("About");
  return (
    <Meta title="About | Grand Candy">
      <Container>
        <main className={styles.About}>
          <Slider />
          <div className={styles.About__Content}>
            <h1 className={styles.About__Title}>{t("title")}</h1>
            <p className={styles.About__Text}>{t("text")}</p>
          </div>
        </main>
      </Container>
    </Meta>
  );
}
