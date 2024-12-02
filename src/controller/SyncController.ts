import { State } from "../utils/State";

export class SyncController {
  socket: WebSocket | null = null;

  isConnected = new State<boolean>(false);

  connect = () => {
    const audio = document.createElement("audio");

    this.socket = new WebSocket("ws://asmund-fm-sync.deno.dev/");

    console.log(this.socket);

    this.socket.addEventListener("open", () => {
      this.isConnected.set(true);
    });

    this.socket.addEventListener("close", () => {
      this.isConnected.set(false);
    });

    this.socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);

      if (data.eventType === "onClientSyncPlay") {

        audio.pause();
        audio.src = data.payload.trackUrl;
        audio.play();
      }
    });
  };
}
