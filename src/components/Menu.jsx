import {
  StoryblokServerComponent,
  storyblokEditable,
} from '@storyblok/react/rsc'

export default function Menu({ blok }) {
  return (
    <nav {...storyblokEditable(blok)}>
      <ul className='menu'>
        {blok.links?.map((nestedBlok) => (
          <li key={nestedBlok._uid}>
            <StoryblokServerComponent blok={nestedBlok} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
