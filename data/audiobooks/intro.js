import { extra, mapIndexIDs } from 'data/playlist/setup'

const id = 0
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/audiobooks/intro/${title}`

let intro = {
  id,
  tracks: [
    {
      title: `The Coral Bride`,
      genre: `Mystery, 3rd person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-the-coral-bride-cover-art.jpeg`),
      src: path(`placeholder.mp3`),
      ...extras,
    },
    {
      title: `The Note`,
      genre: `Southern, 1st person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-fiction-southern-1st-person-south-carolina-the-note-cover-art.jpeg`),
      src: path(`placeholder.mp3`),
      ...extras,
    },
    {
      title: `One`,
      genre: `Teen/YA, 1st person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-ya-fiction-teen-child-one-cover-art.jpeg`),
      src: path(`placeholder.mp3`),
      ...extras,
    },
    {
      title: `Luca's Lost Voice`,
      genre: `Kids Upbeat, 1st person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-childrens-fiction-lucas-lost-voice-cover-art.jpeg`),
      src: path(`placeholder.mp3`),
      ...extras,
    },
  ],
}

intro.tracks = mapIndexIDs(intro.tracks)

export default intro
