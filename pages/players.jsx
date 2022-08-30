import { useState } from "react";
import { intro } from "data/playlist";
import { Player } from "components/player";
import styles from "styles/home.module.scss";

export default function Players() {
  const [active, setActive] = useState(intro[0]);
  const handleSetActive = (track) => setActive(track);
  const playerProps = {
    handleSetActive,
    active,
  };

  return (
    <div>
      <div>active: {active.title}</div>
      <div className={styles.flex}>
        {intro.map((track, index) => (
          <Player key={`player${index}`} src={track} {...playerProps} />
        ))}
      </div>
    </div>
  );
}
