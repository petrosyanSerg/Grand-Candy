"use client";
import React from "react";
import Meta from "@/components/Meta/Meta";
import Container from "@/components/UI/Container/Container";
import { useTranslations } from "next-intl";
import styles from "./contact.module.scss";
import Form from "@/components/Form/Form";

export default function Contacts() {
  const t = useTranslations("Contacts");
  return (
    <Meta title="Contacts | Grand Candy">
      <Container>
        <main>
          <aside>
            <h1>{t("name")}</h1>
          </aside>
          <div>
            <Form />
          </div>
        </main>
      </Container>
    </Meta>
  );
}
