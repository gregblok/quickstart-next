import { StoryblokStory } from '@storyblok/react/rsc'
import { getStoryblokApi } from '@/lib/storyblok'

export default async function Page({ params }) {
  const { slug } = await params

  console.log(slug)

  // array with all language codes configured in the space is defined:
  const availableLanguages = ['es']

  // if the first array element of the slug (e.g. "es/articles/example-article") is included in the languages array,
  // it is set as the language parameter for the API request:
  const language = availableLanguages.includes(slug?.[0])
    ? slug?.[0]
    : undefined

  // if language slug exists, first array element is subsequently removed so that the full slug used for the API request
  // and does not contain any language-specific information:
  if (language) {
    slug.shift()
  }

  // If slug is missing or empty after removing language, use 'home'
  const fullSlug = !slug || slug.length === 0 ? 'home' : slug.join('/')

  const storyblokApi = getStoryblokApi()
  const res = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
    version: 'draft',
    resolve_relations: 'featured-articles.articles',
    //  use the resolve_relations parameter to receive the complete story object for referenced stories.
    language,
  })

  // console.log('Page API Hit:', pageData)
  console.log(fullSlug, res.headers)

  let { data: navData } = await storyblokApi.get('cdn/stories/navigation', {
    version: 'draft',
    language,
  })

  console.log('Nav API Hit:', navData)

  const isNavigationPage = fullSlug === 'navigation'

  return (
    <div className='page'>
      {!isNavigationPage && <StoryblokStory story={navData.story} />}
      <StoryblokStory
        story={res.data.story}
        bridgeOptions={{
          resolveRelations: 'featured-articles.articles',
          preventClicks: true,
          // Also add it as the bridgeOptions argument to StoryblokStory.
        }}
      />
    </div>
  )
}
