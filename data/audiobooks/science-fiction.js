import { extra, mapIndexIDs } from 'data/playlist/setup'

const id = 8
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/audiobooks/science-fiction/${title}`

let scienceFiction = {
  title: `Science Fiction`,
  id,
  tracks: [
    {
      title: `Narration, Dialogue`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-science-fiction-dreamspinner-cover-art.jpeg`),
      src: path(`stephanie-cannon-us-midatlantic-audiobook-narration-dreamspinner-character-drama-science-fiction-dialogue.mp3`),
      ...extras,
    },
    {
      title: `1st person YA`,
      cover: path(`stephanie-cannon-audiobook-narrator-science-fiction-mindwalker-cover-art.jpeg`),
      src: path(`stephanie-cannon-us-audiobook-narration-1st-person-science-fiction-mindwalker-sample.mp3`),
      ...extras,
    },
    {
      title: `Transatlantic, Scottish Dialogue`,
      cover: path(`stephanie-cannon-us-audiobook-narrator-science-fiction-dreams-the-sarah-midnight-trilogy-cover-art.jpg`),
      src: path(`stephanie-cannon-audiobook-3rd-person-narration-dialogue-scottish-transatlantic-science-fiction-sample.mp3`),
      ...extras,
    },
    {
      title: `3rd person`,
      cover: path(`stephanie-cannon-audiobook-narrator-science-fiction-bluebird-cover-art.jpg`),
      src: path(`stephanie-cannon-us-audiobook-3rd-person-narration-science-fiction-bluebird-sample.mp3`),
      ...extras,
    },
  ],
}

scienceFiction.tracks = mapIndexIDs(scienceFiction.tracks)

export default scienceFiction
