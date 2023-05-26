import { ReactNode } from "react";
import styles from "./Container.module.scss";
interface IContainerProps {
  children: ReactNode;
}
export default function Container({ children }: IContainerProps) {
  return <section className={styles.container}>{children}</section>;
}
