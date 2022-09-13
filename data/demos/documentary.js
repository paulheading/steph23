import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 5
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/documentary/stephanie-cannon-documentary-${src}.mp3`

let documentary = {
  title: 'Documentary',
  id,
  main,
  tracks: [
    {
      title: 'Serious, engaging',
      src: path('us-serious-engaging-tale-of-two-schools'),
      ...extras,
    },
    {
      title: 'Upbeat, docu narration',
      src: path('us-upbeat-smiley-beach-boys-television'),
      ...extras,
    },
  ],
}

documentary.tracks = mapIndexIDs(documentary.tracks)
documentary.main = documentary.tracks[0]

export default documentary
