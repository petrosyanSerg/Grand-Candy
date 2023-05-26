import Head from "next/head";
import React, { ReactNode } from "react";

interface IMetaProps {
  title: string;
  children: ReactNode;
}
export default function Meta({ title, children }: IMetaProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
