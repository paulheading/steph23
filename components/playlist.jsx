import { useEffect, useRef, useState } from "react";
import styles from "styles/components/playlist.module.scss";

export function Playlist({ src, active, handleSetActive }) {
  const [playlist, setPlaylist] = useState(src);
  const playerRef = useRef(null);
  const activePlaylist = playlist.id === active.playlist_id;

  useEffect(() => {
    if (!activePlaylist) return;
    active.playing ? playerRef.current.play() : playerRef.current.pause();
  }, [active]);

  function updateProgress() {
    if (!playerRef.current) return;
    const duration = playerRef.current.duration;
    const time = playerRef.current.currentTime;
    const progress = (time / duration) * 100;
    if (isNaN(progress)) return;
    handleSetActive({ ...active, progress, duration });
  }

  const mainProps = {
    activePlaylist,
    playerRef,
    handleSetActive,
    active,
    main: playlist.main,
  };

  function handleTrackChange(track) {
    if (activePlaylist && active.id === track.id)
      return handleSetActive({ ...active, playing: !active.playing });
    handleSetActive({ ...active, playing: false });
    setPlaylist({ ...playlist, main: { ...track, playing: true } });
    handleSetActive({ ...track, playing: true });
  }

  const trackProps = {
    handleTrackChange,
  };

  return (
    <div className={styles.container}>
      <audio
        ref={playerRef}
        src={active.src}
        onTimeUpdate={updateProgress}
      ></audio>
      <Main {...mainProps} />
      {playlist.tracks.map((track, index) => (
        <Track key={`track${index}`} track={track} {...trackProps} />
      ))}
      <Track />
    </div>
  );
}

function Main({ activePlaylist, playerRef, active, handleSetActive, main }) {
  const barRef = useRef(null);
  const progressRef = useRef(null);

  function toggleMain() {
    if (activePlaylist)
      handleSetActive({ ...active, playing: !active.playing });
    else handleSetActive({ ...main, playing: true });
  }

  function updateMain(e) {
    if (!playerRef.current || !barRef.current || !progressRef.current) return;
    if (!active.playing) return;
    const width = barRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    let progress = (offset / width) * 100;
    progress = (progress / 100) * active.duration;
    playerRef.current.currentTime = progress;
    progressRef.current.style.width = `${progress}%`;
    handleSetActive({ ...active, progress });
  }

  function styleWidth() {
    if (!activePlaylist) return;
    return { width: `${active.progress}%` };
  }

  function buttonContent() {
    if (!activePlaylist) return "play";
    return active.playing ? "pause" : "play";
  }

  return (
    <div>
      <div>{activePlaylist ? active.title : main.title}</div>
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

function Track({ track, handleTrackChange }) {
  if (!track) return null;
  return (
    <div>
      <button onClick={() => handleTrackChange(track)}>{track.title}</button>
    </div>
  );
}
