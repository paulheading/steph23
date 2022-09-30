import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 12
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/demos/studio/${title}.mp3`

let studio = {
  title: 'Studio',
  id,
  main,
  tracks: [
    {
      title: `The Imitation Game, Drama`,
      src: path('drama-film-the-imitation-game-audio-clip'),
      ...extras,
    },
  ],
}

studio.tracks = mapIndexIDs(studio.tracks)
studio.main = studio.tracks[0]

export default studio
