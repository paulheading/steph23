let id = 0;
let progress = 0;
let duration = 0;
let playing = false;

export const extra = {
  id,
  progress,
  duration,
  playing,
};

export const main = {
  src: "",
  title: "",
  ...extra,
};

export function createTrackIds(data) {
  data.tracks = data.tracks.map((track, index) => {
    track.id = index;
    return track;
  });
  return data;
}
