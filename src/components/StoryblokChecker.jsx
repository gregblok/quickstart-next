'use client'

import { useSearchParams } from 'next/navigation'

export default function StoryblokChecker() {
  const searchParams = useSearchParams()
  const isInStoryblokPreview = searchParams.has('_storyblok')

  return (
    <>
      {isInStoryblokPreview ? (
        <div>Inside Visual Editor</div>
      ) : (
        <div>Not in Visual Editor</div>
      )}
    </>
  )
}
