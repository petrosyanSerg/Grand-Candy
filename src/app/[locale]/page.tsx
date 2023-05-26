"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useTranslations } from "next-intl";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Container from "@/components/UI/Container/Container";
import image from "../../assets/images/homeImage/img1.jpg";
import circles from "../../assets/images/homeImage/circles.png";
import Link from "next/link";
import URL from "@/routes/LinkURL";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <>
      <Container>
        <main className={styles.Section}>
          <div className={styles.Section__ImageCont}>
            <div className={styles.Section__ImageWrapper}>
              <Image
                className={styles.Section__Img}
                src={image}
                alt="Grand Candy Smile"
              />
            </div>
            <div className={styles.Section__Circles}>
              <Image
                src={circles}
                className={styles.Section__CirclesImage}
                alt="Candy"
              />
            </div>
          </div>
          <div className={styles.Section__Content}>
            <div className={styles.Section__ContentCont}>
              <h1 className={styles.Section__CompanyName}>
                {t("companyName")}
              </h1>
              <h2 className={styles.Section__CompanyGuid}>{t("guid")}</h2>
              <p className={styles.Section__TextMain}>{t("textMain")}</p>
            </div>
            <p className={styles.Section__Medias}>
              <span className={styles.Section__MediaWrapper}>
                <Link
                  className={styles.Section__MediaLink}
                  href={URL.instagram}
                  target="_blank"
                >
                  <BsInstagram className={styles.Section__MediaIcon} />
                </Link>
              </span>
              <span className={styles.Section__MediaWrapper}>
                <Link
                  className={styles.Section__MediaLink}
                  href={URL.facebook}
                  target="_blank"
                >
                  <FaFacebookF className={styles.Section__MediaIcon} />
                </Link>
              </span>
              <span className={styles.Section__MediaWrapper}>
                <Link
                  className={styles.Section__MediaLink}
                  href={URL.linkedin}
                  target="_blank"
                >
                  <BsLinkedin className={styles.Section__MediaIcon} />
                </Link>
              </span>
              <span className={styles.Section__MediaWrapper}>
                <Link
                  className={styles.Section__MediaLink}
                  href={URL.youtube}
                  target="_blank"
                >
                  <BsYoutube className={styles.Section__MediaIcon} />
                </Link>
              </span>
            </p>
          </div>
        </main>
      </Container>
      <div className={styles.Bg_Elem}></div>
    </>
  );
}
