import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 2
const extras = {
  genre: '3rd person, suspense',
  playlist_id: id,
  ...extra,
}

let gaming = {
  title: 'Gaming',
  id,
  main,
  tracks: [
    {
      src: '/demos/stephanie-cannon-us-commercial-bright-young-exciting-kids-kinder-surprise.mp3',
      title: 'seven',
      ...extras,
    },
    {
      src: '/demos/stephanie-cannon-us-commercial-comedy-drama-everywoman-audible-transatlantic.mp3',
      title: 'eight',
      ...extras,
    },
    {
      src: '/demos/stephanie-cannon-us-commercial-bright-young-exciting-kids-kinder-surprise.mp3',
      title: 'nine',
      ...extras,
    },
  ],
}

gaming.tracks = mapIndexIDs(gaming.tracks)
gaming.main = gaming.tracks[0]

export default gaming
