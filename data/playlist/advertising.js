import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 1
const extras = {
  genre: '3rd person, suspense',
  playlist_id: id,
  ...extra,
}

let advertising = {
  title: 'Advertising',
  id,
  main,
  tracks: [
    {
      src: '/demos/stephanie-cannon-radio-drama-demo-us-comedy-drama-classic-young-podcast.mp3',
      title: 'four',
      ...extras,
    },
    {
      src: '/demos/stephanie-cannon-gaming-reel-us-female-drama-fantasy-transatlantic-rp-action-texan-new-york-cockney.mp3',
      title: 'five',
      ...extras,
    },
    {
      src: '/demos/stephanie-cannon-radio-drama-demo-us-comedy-drama-classic-young-podcast.mp3',
      title: 'six',
      ...extras,
    },
  ],
}

advertising.tracks = mapIndexIDs(advertising.tracks)
advertising.main = advertising.tracks[0]

export default advertising
