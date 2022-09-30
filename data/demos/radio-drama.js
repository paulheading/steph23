import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 5
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/radio-drama/stephanie-cannon-radio-drama-${src}.mp3`

let radioDrama = {
  title: 'Radio Drama',
  id,
  main,
  tracks: [
    {
      title: 'Radio Drama Reel',
      src: path('demo-us-comedy-drama-classic-young-podcast'),
      ...extras,
    },
    {
      title: 'Contemporary, drama / comedy',
      src: path('us-contemporary-drama-comedy-other-people'),
      ...extras,
    },
    {
      title: 'Sci Fi, character, narration',
      src: path('transatlantic-science-fiction-dialogue-character-narration-dreamspinner-clip'),
      ...extras,
    },
    {
      title: 'Young Girl, eerie drama',
      src: path('us-girl-young-eerie-drama-blood-relations'),
      ...extras,
    },
    {
      title: 'Classical Poem, transatlantic',
      src: path('us-classic-poem-transatlantic-the-good-morrow'),
      ...extras,
    },
    {
      title: 'UK, lively, contemporary',
      src: path('rp-contemporary-drama-comedy-nsfw'),
      ...extras,
    },
  ],
}

radioDrama.tracks = mapIndexIDs(radioDrama.tracks)
radioDrama.main = radioDrama.tracks[0]

export default radioDrama
