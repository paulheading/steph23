import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 4
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/corporate/stephanie-cannon-corporate-${src}.mp3`

let corporate = {
  title: 'Corporate Narration',
  id,
  main,
  tracks: [
    {
      title: 'Corporate Narration Reel',
      src: path('narration-demo-explainer-museum-us'),
      ...extras,
    },
    {
      title: 'Engaginig, Real, Explainer',
      src: path('us-engaging-explainer-real-adobe'),
      ...extras,
    },
    {
      title: 'Friendly, professional IVR',
      src: path('ivr-us-friendly-professional-alaska-airlines'),
      ...extras,
    },
    {
      title: 'Patient, informative, warm',
      src: path('us-explainer-patient-informative-warm'),
      ...extras,
    },
    {
      title: 'Upbeat museum guide',
      src: path('us-museum-guide-upbeat-leeds-castle'),
      ...extras,
    },
    {
      title: 'RP Accent, online assistant',
      src: path('rp-young-friendly-online-assistant-barbican'),
      ...extras,
    },
  ],
}

corporate.tracks = mapIndexIDs(corporate.tracks)
corporate.main = corporate.tracks[0]

export default corporate
