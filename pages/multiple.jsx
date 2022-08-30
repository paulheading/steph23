import { useState } from "react";
import { eLearning, advertising } from "data/playlist";
import { Playlist } from "components/playlist";
import styles from "styles/home.module.scss";

export default function Multiple() {
  const [active, setActive] = useState(eLearning.main);
  const handleSetActive = (track) => setActive(track);
  const playlistProps = {
    handleSetActive,
    active,
  };

  return (
    <div>
      <div>active: {active.title}</div>
      <div className={styles.flex}>
        <Playlist src={eLearning} {...playlistProps} />
        <Playlist src={advertising} {...playlistProps} />
      </div>
    </div>
  );
}
