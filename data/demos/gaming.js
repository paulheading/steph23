import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 1
const extras = {
  genre: 'dont-need-this',
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/gaming/stephanie-cannon-${src}.mp3`

let gaming = {
  title: 'Gaming',
  id,
  main,
  tracks: [
    {
      title: 'Gaming Reel',
      src: `/demos/gaming/stephanie-cannon-gaming-reel-us-female-drama-fantasy-transatlantic-rp-action-texan-new-york-cockney.mp3`,
      ...extras,
    },
    {
      title: '20s, standard US',
      src: path('us-gaming-20s-female-mystery'),
      ...extras,
    },
    {
      title: 'Everywoman, suspense, horror',
      src: path('us-gaming-everywoman-30s-suspense-horror-drama'),
      ...extras,
    },
    {
      title: 'Transatlantic, fantasy, mystic',
      src: path('gaming-transatlantic-mystic-fantasy'),
      ...extras,
    },
    {
      title: 'Texan, action, fighting emotes',
      src: path('gaming-texan-action-fighting-emotes'),
      ...extras,
    },
    {
      title: 'RP Villain, Serious',
      src: path('rp-gaming-villain-serious-big-boss'),
      ...extras,
    },
    {
      title: 'Droid, transatlantic',
      src: path('transatlantic-gaming-droid-science-fiction-distopian'),
      ...extras,
    },
    {
      title: 'New York Moll, drama',
      src: path('gaming-new-york-moll-drama-1920s-emotional'),
      ...extras,
    },
    {
      title: 'US reporter, professional',
      src: path('gaming-us-reporter-professional-standard-american'),
      ...extras,
    },
    {
      title: 'Midwest, caring officer',
      src: path('gaming-us-midwest-minnesota-caring-officer-drama-real'),
      ...extras,
    },
    {
      title: 'Cockney NPC',
      src: path('cockney-gaming-schemer-goblin-troll-swindler-npc'),
      ...extras,
    },
  ],
}

gaming.tracks = mapIndexIDs(gaming.tracks)
gaming.main = gaming.tracks[0]

export default gaming
