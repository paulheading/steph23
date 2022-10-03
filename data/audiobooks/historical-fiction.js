import { extra, mapIndexIDs } from 'data/playlist/setup'

const id = 3
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/audiobooks/historical-fiction/${title}`

let historicalFiction = {
  title: `Historical Fiction`,
  id,
  tracks: [
    {
      title: `3rd person`,
      cover: path(`stephanie-cannon-us-narrator-the-lost-mother-cover-art-historical-fiction-audiobook.webp`),
      src: path(`stephanie-cannon-us-historical-fiction-audiobook-sample-the-lost-mother-drama-3rd-person-narration.mp3`),
      ...extras,
    },
    {
      title: `Southern, 1st person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-historical-fiction-flight-girls-cover-art.webp`),
      src: path(`stephanie-cannon-us-audiobook-narration-sample-1st-person-southern-flight-girls-historical-fiction.mp3`),
      ...extras,
    },
    {
      title: `3rd person`,
      cover: path(`stephanie-cannon-us-audiobook-historical-fiction-narrator-not-without-my-sister-cover-art.webp`),
      src: path(`stephanie-cannon-us-3rd-person-historical-fiction-audiobook-sample-narration-not-without-my-sister.mp3`),
      ...extras,
    },
  ],
}

historicalFiction.tracks = mapIndexIDs(historicalFiction.tracks)

export default historicalFiction
