import { extra, mapIndexIDs } from 'data/playlist/setup'

const id = 9
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/audiobooks/romance/${title}`

let romance = {
  title: `Romance`,
  id,
  tracks: [
    {
      title: [`Comic`, `1st person`],
      cover: path(`stephanie-cannon-us-audiobook-narrator-romance-promises-at-indigo-bay.webp`),
      src: path(`stephanie-cannon-us-narration-romance-light-1st-person-sample-promises-at-indigo-bay-audiobook.mp3`),
      ...extras,
    },
    {
      title: [`Wry`, `3rd person`],
      cover: path(`stephanie-cannon-us-audiobook-narrator-romance-i-love-you-i-hate-you-cover-art.webp`),
      src: path(`stephanie-cannon-us-audiobook-3rd-person-narration-romance-i-love-you-i-hate-you-sample.mp3`),
      ...extras,
    },
    {
      title: [`Drama`, `3rd person`],
      cover: path(`stephanie-cannon-us-narration-romance-the-bench-audiobook-cover-art.webp`),
      src: path(`stephanie-cannon-us-narration-romance-the-bench-audiobook-sample.mp3`),
      ...extras,
    },
  ],
}

romance.tracks = mapIndexIDs(romance.tracks)

export default romance
