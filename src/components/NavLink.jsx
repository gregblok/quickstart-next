import Link from 'next/link'
import { storyblokEditable } from '@storyblok/react/rsc'

export default function NavLink({ blok }) {
  if (blok.link.linktype === 'story') {
    let href = blok.link.cached_url
    if (!href.startsWith('/')) {
      href = '/' + href
    }

    return (
      <Link {...storyblokEditable(blok)} href={href}>
        {blok.label}
      </Link>
    )
  }

  const url = blok.link.url
  const externalUrl = url.startsWith('http') ? url : `https://${url}`

  return (
    <a {...storyblokEditable(blok)} href={externalUrl}>
      {blok.label}
    </a>
  )
}
