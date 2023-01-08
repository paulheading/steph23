import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 12
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/demos/studio/${title}.mp3`

let studio = {
  audio: {
    title: 'Studio',
    id,
    main,
    tracks: [
      {
        title: `Sample`,
        src: path('stephanie-cannon-home-studio-raw-sample-narrator-voiceover-voice-actor-v-o'),
        ...extras,
      },
    ],
  },
}

studio.audio.tracks = mapIndexIDs(studio.audio.tracks)
studio.audio.main = studio.audio.tracks[0]

export default studio
