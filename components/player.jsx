import { useEffect, useRef, useState } from "react";
import styles from "styles/components/player.module.scss";

export function Player({ src, active, handleSetActive }) {
  const [player, setPlayer] = useState(src);
  const playerRef = useRef(null);
  const activePlayer = player.id === active.id;

  useEffect(() => {
    if (!activePlayer) return;
    active.playing ? playerRef.current.play() : playerRef.current.pause();
  }, [active]);

  function updateProgress() {
    if (!playerRef.current) return;
    const duration = playerRef.current.duration;
    const time = playerRef.current.currentTime;
    const progress = (time / duration) * 100;
    if (isNaN(progress)) return;
    if (progress === 100)
      handleSetActive({ ...active, progress: 0, playing: false });
    else handleSetActive({ ...active, progress, duration });
  }

  const mainProps = {
    activePlayer,
    player,
    playerRef,
    handleSetActive,
    active,
  };

  return (
    <div className={styles.container}>
      <audio
        ref={playerRef}
        src={active.src}
        onTimeUpdate={updateProgress}
      ></audio>
      <Main {...mainProps} />
    </div>
  );
}

function Main({ activePlayer, player, playerRef, active, handleSetActive }) {
  const barRef = useRef(null);
  const progressRef = useRef(null);

  function toggleMain() {
    if (activePlayer) handleSetActive({ ...active, playing: !active.playing });
    else handleSetActive({ ...player, playing: true });
  }

  function updateMain(e) {
    if (!playerRef.current || !barRef.current || !progressRef.current) return;
    if (!activePlayer || !active.playing) return;
    const width = barRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    let progress = (offset / width) * 100;
    progress = (progress / 100) * active.duration;
    playerRef.current.currentTime = progress;
    progressRef.current.style.width = `${progress}%`;
    handleSetActive({ ...active, progress });
  }

  function styleWidth() {
    if (!activePlayer) return;
    return { width: `${active.progress}%` };
  }

  function buttonContent() {
    if (!activePlayer) return "play";
    return active.playing ? "pause" : "play";
  }

  return (
    <div>
      <div>{player.title}</div>
      <button onClick={toggleMain}>{buttonContent()}</button>
      <div>
        <button ref={barRef} className={styles.bar} onClick={updateMain}>
          <div
            ref={progressRef}
            style={styleWidth()}
            className={styles.progress}
          ></div>
        </button>
      </div>
    </div>
  );
}
