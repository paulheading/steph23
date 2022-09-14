import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 7
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/child-teen/stephanie-cannon-${src}.mp3`

let childTeen = {
  title: 'Child / Teen',
  id,
  main,
  tracks: [
    {
      title: 'Child / Teen Reel',
      src: path('teen-us-child-demo-us-girl-boy-uk-animation-e-learning-radio-drama-audiobooks'),
      ...extras,
    },
    {
      title: 'Young boy, animation',
      src: path('animation-us-boy-alien-cheeky-sweet-enthusiastic'),
      ...extras,
    },
    {
      title: 'Toddler, animation',
      src: path('animation-us-toddler-bratty-sweet'),
      ...extras,
    },
    {
      title: 'Teenage boy, animation',
      src: path('animation-us-teen-boy-troublemaker-aggitated-bully'),
      ...extras,
    },
    {
      title: 'Teen E-Learning',
      src: path('teen-us-e-learning-educational-elt-school-presentation'),
      ...extras,
    },
    {
      title: `UK Kid's Audiobook`,
      src: path('teen-uk-children-audiobook-narration-dialogue-girl-boy-rp'),
      ...extras,
    },
    {
      title: `Pre-teen, Radio Drama`,
      src: path('pre-teen-us-radio-drama-eerie-dark-light'),
      ...extras,
    },
    {
      title: `Teen Fiction, Audiobook`,
      src: path('teen-us-ya-audiobook-dialogue-distopian-skylark'),
      ...extras,
    },
    {
      title: `YA Fiction, Dialogue`,
      src: path('teen-child-us-audiobook-dialogue-drama-narration-one'),
      ...extras,
    },
    {
      title: `Enthusiastic Kid's Fiction`,
      src: path('kids-us-audiobook-fiction-enthusiastic-fun-quirky'),
      ...extras,
    },
  ],
}

childTeen.tracks = mapIndexIDs(childTeen.tracks)
childTeen.main = childTeen.tracks[0]

export default childTeen
