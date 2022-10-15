import { extra, mapIndexIDs } from 'data/playlist/setup'

const id = 7
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/audiobooks/non-fiction/${title}`

let nonFiction = {
  title: `Non Fiction`,
  id,
  tracks: [
    {
      title: [`3rd person`],
      cover: path(`stephanie-cannon-us-audiobook-narrator-branding-that-means-business-non-fiction-cover-art.webp`),
      src: path(`stephanie-cannon-non-fiction-us-branding-that-means-business-audiobook-sample.mp3`),
      ...extras,
    },
    {
      title: [`1st person`],
      cover: path(`stephanie-cannon-non-fiction-us-audiobook-narrator-cover-art-reality-no-reality.webp`),
      src: path(`stephanie-cannon-us-non-fiction-audiobook-narration-sample-reality-no-realiity-lia-kim.mp3`),
      ...extras,
    },
    {
      title: [`3rd person`],
      cover: path(`stephanie-cannon-us-narrator-non-fiction-world-religions-audiobook-cover-art.webp`),
      src: path(`stephanie-cannon-us-narration-non-fiction-audiobook-sample-world-religions-.mp3`),
      ...extras,
    },
  ],
}

nonFiction.tracks = mapIndexIDs(nonFiction.tracks)

export default nonFiction
