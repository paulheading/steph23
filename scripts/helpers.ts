import { RefObject } from 'react'

const htmlArray = (target: HTMLCollection) => Array.from(target as HTMLCollectionOf<HTMLElement>)

const getHeight = ({ current }: RefObject<HTMLUListElement> | RefObject<HTMLLIElement>) => (current !== null ? current.logoHeight : 0)

const setDisplay = ({ current }: RefObject<HTMLUListElement>, state: string) => (current !== null ? (current.style.display = state) : null)

interface error {
  type?: string
}

const printError = {
  name: ({ type }: error) => {
    switch (type) {
      case 'required':
        return 'Please fill in your name'
      default:
        return ''
    }
  },
  email: ({ type }: error) => {
    switch (type) {
      case 'pattern':
        return "This email address isn't valid"
      case 'required':
        return 'Please fill in your email address'
      default:
        return ''
    }
  },
}

const input = {
  labels: (name: string, type?: string) => (type ? { name, type, id: name } : { name, id: name }),
  name: {
    required: true,
  },
  email: {
    required: true,
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  },
}

const printClass = (value: string | undefined) => (value ? value : '')

function attachVariant(variant: string | undefined, styles: any) {
  switch (variant) {
    case 'red':
      return styles.red
    case 'yellow':
      return styles.yellow
    case 'cream':
      return styles.cream
    case 'sky':
      return styles.sky
    default:
      return styles.green
  }
}

function link(parent: string | undefined, children: string) {
  const path = '/' + children.toLowerCase().replace(' ', '-').replace('/', '-')
  if (parent) return '/' + parent + path
  switch (children) {
    case 'Home':
      return '/'
    default:
      return path
  }
}

export { printClass, input, printError, setDisplay, getHeight, htmlArray, attachVariant, link }
