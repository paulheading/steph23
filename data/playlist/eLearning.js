import { main, extra, createTrackIds } from "data/playlist/setup";

const id = 0;

let eLearning = {
  id,
  main,
  tracks: [
    {
      playlist_id: id,
      src: "demos/stephanie-cannon-advertising-demo-us-comic-smooth-character-real-upbeat-hip.mp3",
      title: "one",
      ...extra,
    },
    {
      playlist_id: id,
      src: "demos/stephanie-cannon-animation-demo-us-female-comedy-adult-teen-toddler-boy-accents-energetic.mp3",
      title: "two",
      ...extra,
    },
    {
      playlist_id: id,
      src: "demos/stephanie-cannon-advertising-demo-us-comic-smooth-character-real-upbeat-hip.mp3",
      title: "three",
      ...extra,
    },
  ],
};

eLearning = createTrackIds(eLearning);
eLearning.main = eLearning.tracks[0];

export default eLearning;
