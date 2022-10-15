import { extra, mapIndexIDs } from 'data/playlist/setup'

const id = 2
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/audiobooks/thrillers/${title}`

let thrillers = {
  title: `Thrillers`,
  id,
  tracks: [
    {
      title: [`1st person`],
      cover: path(`stephanie-cannon-us-audiobook-narration-1st-person-riley-sager-thrillers-the-last-time-i-lied-cover-art.webp`),
      src: path(`stephanie-cannon-us-audiobook-narration-1st-person-riley-sager-thrillers-the-last-time-i-lied-sample.mp3`),
      ...extras,
    },
    {
      title: [`3rd person`],
      cover: path(`stephanie-cannon-us-audiobook-narrator-suspense-one-night-new-york-cover-art.webp`),
      src: path(`stephanie-cannon-us-audiobook-narration-thriller-3rd-person-one-night-new-york-sample.mp3`),
      ...extras,
    },
    {
      title: [`3rd person`],
      cover: path(`stephanie-cannon-us-audiobook-narrator-thriller-strange-things-done-cover-art.webp`),
      src: path(`stephanie-cannon-us-3rd-person-dialogue-suspense-strange-things-done-audiobook-sample.mp3`),
      ...extras,
    },
  ],
}

thrillers.tracks = mapIndexIDs(thrillers.tracks)

export default thrillers
