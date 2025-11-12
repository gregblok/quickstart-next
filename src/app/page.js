import { getStoryblokApi } from '@/lib/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'

// StoryblokStory dynamically renders content type and nestable blocks.
// In this case, it looks for the content type block of the home story.

export default async function Home() {
  const { data } = await fetchData()

  return (
    <div className='page'>
      <StoryblokStory story={data.story} />
    </div>
  )
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi()
  return await storyblokApi.get(`cdn/stories/home`, { version: 'draft' })
}
