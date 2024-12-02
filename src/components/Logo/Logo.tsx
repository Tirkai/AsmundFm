import { Component, Show } from "solid-js";
import styles from "./Logo.module.css";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";

interface LogoProps {
  url: string;
  isConnected: boolean;
}

export const Logo: Component<LogoProps> = (props) => {
  return (
    <div class={styles.root}>
      <div class={styles.logo}>
        <Show when={props.isConnected}>
          <div class={styles.innerWave}></div>
        </Show>
        <img src={props.url} />
      </div>
      <div class={styles.title}>AsmundFm</div>
      <div class={styles.description}>Радио фонда семьи Асмунда Выкупасова</div>
    </div>
  );
};
