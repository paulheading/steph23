import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 11
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/singing/stephanie-cannon-singing-clip-${src}.mp3`

let singing = {
  audio: {
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
  },
}

singing.audio.tracks = mapIndexIDs(singing.audio.tracks)
singing.audio.main = singing.audio.tracks[0]

export default singing
