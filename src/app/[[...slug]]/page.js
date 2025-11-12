import { StoryblokStory } from '@storyblok/react/rsc'
import { getStoryblokApi } from '@/lib/storyblok'

export default async function Page({ params }) {
  const { slug } = await params

  // array with all language codes configured in the space is defined:
  const availableLanguages = ['es']

  // if the first array element of the slug (e.g. "es/articles/example-article") is included in the languages array,
  // it is set as the language parameter for the API request:
  const language = availableLanguages.includes(slug?.[0])
    ? slug?.[0]
    : undefined

  // if language slug exists, first array element is subsequently removed so that the full slug used for the API request
  // does not contain any language-specific information:
  if (language) {
    slug.shift()
  }

  const fullSlug = slug ? slug.join('/') : 'home'

  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
    version: 'draft',
    resolve_relations: 'featured-articles.articles',
    //  use the resolve_relations parameter to receive the complete story object for referenced stories.
    language,
  })

  return (
    <StoryblokStory
      story={data.story}
      bridgeOptions={{
        resolveRelations: 'featured-articles.articles',
        // Also add it as the bridgeOptions argument to StoryblokStory.
      }}
    />
  )
}
