import Page from '@/components/Page'
import Feature from '@/components/Feature'
import Grid from '@/components/Grid'
import Teaser from '@/components/Teaser'
import ArticleOverview from '@/components/ArticleOverview'
import FeaturedArticles from '@/components/FeaturedArticles'
import Article from '@/components/Article'

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    'article-overview': ArticleOverview,
    'featured-articles': FeaturedArticles,
    article: Article,
  },
  apiOptions: {
    region: 'eu',
  },
})
