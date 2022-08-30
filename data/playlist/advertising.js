import { main, extra, createTrackIds } from "data/playlist/setup";

const id = 1;

let advertising = {
  id,
  main,
  tracks: [
    {
      playlist_id: id,
      src: "demos/stephanie-cannon-radio-drama-demo-us-comedy-drama-classic-young-podcast.mp3",
      title: "four",
      ...extra,
    },
    {
      playlist_id: id,
      src: "demos/stephanie-cannon-gaming-reel-us-female-drama-fantasy-transatlantic-rp-action-texan-new-york-cockney.mp3",
      title: "five",
      ...extra,
    },
    {
      playlist_id: id,
      src: "demos/stephanie-cannon-radio-drama-demo-us-comedy-drama-classic-young-podcast.mp3",
      title: "six",
      ...extra,
    },
  ],
};

advertising = createTrackIds(advertising);
advertising.main = advertising.tracks[0];

export default advertising;
