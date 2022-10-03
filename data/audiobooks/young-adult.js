import { extra, mapIndexIDs } from 'data/playlist/setup'

const id = 6
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/audiobooks/young-adult/${title}`

let youngAdult = {
  title: `Young Adult`,
  id,
  tracks: [
    {
      title: `3rd person`,
      cover: path(`stephanie-cannon-us-audiobook-narration-3rd-person-young-adult-strange-lies-cover-art.webp`),
      src: path(`stephanie-cannon-us-audiobook-narration-3rd-person-young-adult-strange lies audible sample.mp3`),
      ...extras,
    },
    {
      title: `Dialogue, 1st person`,
      cover: path(`stephanie-cannon-us-audiobook-narration-3rd-person-young-adult-skylark-cover-art.webp`),
      src: path(`stephanie-cannon-us-audiobook-narration-1st-person-young-adult-fiction-dialogue-teen-skylark-sample.mp3`),
      ...extras,
    },
    {
      title: `1st person`,
      cover: path(`stephanie-cannon-us-audiobook-narration-young-adult-one-cover-art.webp`),
      src: path(`stephanie-cannon-us-audiobook-narration-1st-person-young-adult-child-teen-dialogue-sample-one.mp3`),
      ...extras,
    },
    {
      title: `3rd person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-ya-lgbtq-pulp-cover-art.webp`),
      src: path(`stephanie-cannon-us-audiobook-narration-3rd-person-young-adult-lgbtq-pulp-sample.mp3`),
      ...extras,
    },
  ],
}

youngAdult.tracks = mapIndexIDs(youngAdult.tracks)

export default youngAdult
