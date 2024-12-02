import { Component, createEffect, createSignal } from "solid-js";
import { Play, Pause } from 'lucide-solid';
import styles from './AudioPlayer.module.css'


interface AudioPlayerProps {
  url: string;
}

export const AudioPlayer: Component<AudioPlayerProps> = (props) => {
  const audio = document.createElement("audio");

  const [isPlaying, setPlaying] = createSignal(false);

  audio.src = props.url;

  const handleClick = () => {
    if (isPlaying()) {
      audio.pause();
    } else {
      audio.play();
    }

    setPlaying(!isPlaying());
  };

  createEffect(() => {
    audio.pause();
    audio.src = props.url
    audio.play();
  })

  return (
    <>
    {props.url}
    <button class={styles.root} onClick={handleClick}>{!isPlaying() ? <Play/> : <Pause/>}</button>
    </>
  );
};
