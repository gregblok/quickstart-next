import { StoryblokStory } from '@storyblok/react/rsc'
import { getStoryblokApi } from '@/lib/storyblok'

export default async function Page({ params }) {
  const { slug } = await params

  const fullSlug = slug ? slug.join('/') : 'home'

  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
    version: 'draft',
    resolve_relations: 'featured-articles.articles',
    //  use the resolve_relations parameter to receive the complete story object for referenced stories.
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
