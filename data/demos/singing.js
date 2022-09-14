import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 10
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/singing/stephanie-cannon-singing-clip-${src}.mp3`

let singing = {
  title: 'Singing',
  id,
  main,
  tracks: [
    {
      title: `Dixieland Jazz`,
      src: path('dixieland-jazz-upbeat-bill-bailey'),
      ...extras,
    },
    {
      title: `Musical Jingle, Sweet`,
      src: path('musical-jingle-sweet-upbeat-nothing-can-ruin-my-day'),
      ...extras,
    },
  ],
}

singing.tracks = mapIndexIDs(singing.tracks)
singing.main = singing.tracks[0]

export default singing
