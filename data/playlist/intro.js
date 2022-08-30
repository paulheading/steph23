import { eLearning, advertising } from "data/playlist";

let intro = [eLearning.main, advertising.main];

intro = intro.map((track, index) => {
  track.id = index;
  return track;
});

export default intro;
