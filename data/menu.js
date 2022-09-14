const href = ''

const createLink = (title) => ({ title, href })

let menu = [
  createLink('Home'),
  {
    title: 'Demos',
    href,
    items: [
      createLink('View all'),
      createLink('E-Learning'),
      createLink('Advertising'),
      createLink('Gaming'),
      createLink('Animation'),
      createLink('Corporate Narration'),
      createLink('TV/Film Documentary'),
      createLink('Radio Drama'),
      createLink('Audiobooks'),
      createLink('Child/Teen'),
      createLink('UK/International Accents'),
      createLink('ADR'),
      createLink('Singing'),
    ],
  },
  {
    title: 'Audiobooks',
    href,
    items: [createLink('View all'), createLink('#Samples'), createLink('#Portfolio'), createLink('#Accents')],
  },
  createLink('Acting'),
  createLink('About'),
  createLink('Contact'),
]

function mapHrefs(menu) {
  return menu.map((item) => {
    const isHome = item.title === 'Home'
    const hasItems = item.items
    const createHref = (title) => `/${title.toLowerCase().replace(' ', '-').replace('/', '-')}`

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
