import { extra, mapIndexIDs } from 'data/playlist/setup'

const id = 0
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/audiobooks/favourites/${title}`

let favourites = {
  id,
  tracks: [
    {
      title: `The Coral Bride`,
      genre: `Mystery, 3rd person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-the-coral-bride-cover-art.jpeg`),
      src: path(`stephanie-cannon-us-audiobook-narrator-fiction-3rd-person-the-coral-bride-sample.mp3`),
      ...extras,
    },
    {
      title: `The Note`,
      genre: `Southern, 1st person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-fiction-southern-1st-person-south-carolina-the-note-cover-art.jpeg`),
      src: path(`stephanie-cannon-us-audiobook-narrator-fiction-southern-1st-person-south-carolina-sample-the-note.mp3`),
      ...extras,
    },
    {
      title: `One`,
      genre: `Teen/YA, 1st person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-ya-fiction-teen-child-one-cover-art.jpg`),
      src: path(`stephanie-cannon-us-audiobook-narrator-ya-fiction-sample-teen-child-1st-person-dialogue-one.mp3`),
      ...extras,
    },
    {
      title: `Luca's Lost Voice`,
      genre: `Kids Upbeat, 1st person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-childrens-fiction-lucas-lost-voice-cover-art.jpeg`),
      src: path(`stephanie-cannon-us-audiobook-sample-narrator-childrens-fiction-1st-person-lucas-lost-voice-stella.mp3`),
      ...extras,
    },
  ],
}

favourites.tracks = mapIndexIDs(favourites.tracks)

export default favourites
