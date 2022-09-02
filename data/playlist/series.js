import { main, extra, mapIndexGroupIDs } from 'data/playlist/setup'

const id = 3
const extras = {
  genre: '3rd person, suspense',
  playlist_id: id,
  ...extra,
}

let series = {
  title: 'Series',
  id,
  main,
  groups: [
    {
      author: 'tim',
      id,
      tracks: [
        {
          src: '/demos/stephanie-cannon-us-commercial-bright-young-exciting-kids-kinder-surprise.mp3',
          title: 'ten',
          ...extras,
        },
        {
          src: '/demos/stephanie-cannon-us-commercial-comedy-drama-everywoman-audible-transatlantic.mp3',
          title: 'eleven',
          ...extras,
        },
        {
          src: '/demos/stephanie-cannon-us-commercial-bright-young-exciting-kids-kinder-surprise.mp3',
          title: 'twelve',
          ...extras,
        },
      ],
    },
    {
      author: 'dave',
      id,
      tracks: [
        {
          src: '/demos/stephanie-cannon-us-commercial-bright-young-exciting-kids-kinder-surprise.mp3',
          title: 'thirteen',
          ...extras,
        },
        {
          src: '/demos/stephanie-cannon-us-commercial-comedy-drama-everywoman-audible-transatlantic.mp3',
          title: 'fourteen',
          ...extras,
        },
        {
          src: '/demos/stephanie-cannon-us-commercial-bright-young-exciting-kids-kinder-surprise.mp3',
          title: 'fifteen',
          ...extras,
        },
      ],
    },
    {
      author: 'nigel',
      id,
      tracks: [
        {
          src: '/demos/stephanie-cannon-us-commercial-bright-young-exciting-kids-kinder-surprise.mp3',
          title: 'sixteen',
          ...extras,
        },
        {
          src: '/demos/stephanie-cannon-us-commercial-comedy-drama-everywoman-audible-transatlantic.mp3',
          title: 'seventeen',
          ...extras,
        },
        {
          src: '/demos/stephanie-cannon-us-commercial-bright-young-exciting-kids-kinder-surprise.mp3',
          title: 'eighteen',
          ...extras,
        },
      ],
    },
  ],
}

series.groups = mapIndexGroupIDs(series.groups)
series.main = series.groups[0].tracks[0]

export default series
