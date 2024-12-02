import { createSignal, type Component } from "solid-js";
import logo from "./assets/asmund.jpg";
import { Logo } from "./components/Logo/Logo";
import { RootLayout } from "./components/RootLayout/RootLayout";
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer";
import { SyncController } from "./controller/SyncController";
import { SyncButton } from "./components/SyncButton/SyncButton";

const App: Component = () => {

  const syncController = new SyncController();

  return (
    <RootLayout>
      <Logo url={logo} isConnected={syncController.isConnected.get()} />
      <SyncButton onClick={syncController.connect} isConnected={syncController.isConnected.get()} />
    </RootLayout>
  );
};

export default App;
