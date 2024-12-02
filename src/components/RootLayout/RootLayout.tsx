import { Component, JSXElement } from "solid-js";
import styles from "./RootLayout.module.css";

interface RootLayoutProps {
  children: JSXElement;
}

export const RootLayout: Component<RootLayoutProps> = (props) => {
  return <div class={styles.root}>{props.children}</div>;
};
