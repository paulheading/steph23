import { extra, mapIndexIDs } from 'data/playlist/setup'

const id = 4
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/audiobooks/literary-fiction/${title}`

let literaryFiction = {
  title: `Literary Fiction`,
  id,
  tracks: [
    {
      title: `1st person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-fiction-contemporary-the-origins-of-iris.jpg`),
      src: path(`stephanie-cannon-us-audiobook-narration-1st-person-literary-fiction-contemporary-sample-the-origins-of-iris.mp3`),
      ...extras,
    },
    {
      title: `Transatlantic, 3rd person`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-classic-literary-fiction-the-age-of-innocence-cover-art.jpeg`),
      src: path(`stephanie-cannon-transatlantic-audiobook-sample-classic-fiction-3rd-person-narration-dialogue-male-female-the-age-of-innocence.mp3`),
      ...extras,
    },
    {
      title: `1st person`,
      cover: path(`stephanie-cannon-audiobook-narrator-literary-fiction-the-detective-and-the-woman-cover-art.jpg`),
      src: path(`stephanie-cannon-us-1st-person-literary-fiction-audiobook-narration-sample-the-detective-and-the-woman.mp3`),
      ...extras,
    },
  ],
}

literaryFiction.tracks = mapIndexIDs(literaryFiction.tracks)

export default literaryFiction
