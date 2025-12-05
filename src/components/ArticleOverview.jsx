import { getStoryblokApi } from '@/lib/storyblok'
import Link from 'next/link'

// The starts_with parameter is being used to fetch stories from the “Articles” folder.
// The content_type parameter restricts the results to stories of the content type article,
// ensuring that the article_overview is excluded.

// Because ArticleOverview doesn't receive a blok prop and is an async server component that just fetches and lists stories, there is nothing for storyblokEditable to annotate.
// storyblokEditable needs the blok object (the Storyblok block data) to output the editing attributes.
// Also, the overview has no editable fields itself — editing happens on the individual article stories — so adding storyblokEditable is unnecessary.

export default async function ArticleOverview() {
  const storyblokApi = getStoryblokApi()
  let articles = await storyblokApi.getAll('cdn/stories', {
    version: 'draft',
    starts_with: 'articles',
    content_type: 'article',
  })

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.uuid}>
            <Link
              className='text-blue-600 underline hover:text-blue-800'
              href={`/${article.full_slug}`}
            >
              {article.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
