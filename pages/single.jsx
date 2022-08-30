import { useState } from "react";
import { eLearning } from "data/playlist";
import { Head, Playlist } from "components";

export default function Single() {
  const [active, setActive] = useState(eLearning.main);
  const handleSetActive = (track) => setActive(track);
  const playlistProps = {
    handleSetActive,
    active,
  };

  return (
    <div>
      <Head />
      <div>active: {active.title}</div>
      <div>
        <Playlist src={eLearning} {...playlistProps} />
      </div>
    </div>
  );
}
