import { Component } from "solid-js";
import styles from "./SyncButton.module.css";

interface SyncButtonProps {
  isConnected: boolean;
  onClick: () => void;
}

export const SyncButton: Component<SyncButtonProps> = (props) => {
  const handleClick = () => {
    if (props.isConnected) {
      return;
    }

    props.onClick();
  };
  return (
    <button
      class={styles.root}
      onClick={handleClick}
      data-is-connected={props.isConnected}
    >
      {props.isConnected ? "Поймали волну!" : "Подключиться"}
    </button>
  );
};
