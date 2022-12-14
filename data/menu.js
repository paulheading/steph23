const href = ''

const createLink = (title) => ({ title, href })

let menu = [
  createLink('Home'),
  {
    title: 'Demos',
    href,
    items: [
      createLink('All Genres'),
      createLink('E-Learning'),
      createLink('Advertising'),
      createLink('Gaming'),
      createLink('Animation'),
      createLink('Corporate Narration'),
      createLink('TV/Film Documentary'),
      createLink('Radio Drama'),
      createLink('Child/Teen'),
      createLink('UK/International Accents'),
      createLink('Audio Description'),
      createLink('Singing'),
    ],
  },
  {
    title: 'Audiobooks',
    href,
    items: [createLink('Introduction'), createLink('#Samples'), createLink('#Purchase'), createLink('#Accents')],
  },
  {
    title: 'Acting',
    href,
    items: [createLink('Introduction'), createLink('#Motion Capture')],
  },
  createLink('About'),
  createLink('Contact'),
]

function mapHrefs(menu) {
  return menu.map((item) => {
    const isHome = item.title === 'Home'
    const hasItems = item.items

    function createHref(title) {
      const result = title.toLowerCase().replace(' ', '-').replace('/', '-')
      return title.charAt(0) === '#' ? result : '/' + result
    }

    if (!isHome || !hasItems) item.href = createHref(item.title)

    if (isHome) item.href = '/'

    if (hasItems) {
      item.href = createHref(item.title)
      item.items.map((anchor, index) => {
        if (index === 0) anchor.href = item.href
        else anchor.href = item.href + createHref(anchor.title)

        if (anchor.title.charAt(0) === '#') anchor.title = anchor.title.substring(1)

        return anchor
      })
    }

    return item
  })
}

menu = mapHrefs(menu)

export default menu
