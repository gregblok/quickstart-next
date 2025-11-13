This is a local deployment following the Next.js Quickstart guide of Storyblok.<br/>
See: https://www.storyblok.com/docs/guides/nextjs

## Getting Started

In Storyblok:

- Create a Storyblok demo space
- Create the blocks Article, Article Overview, and Featured Articles, as described here:</br>
  https://www.storyblok.com/docs/guides/nextjs/content-modeling
- Go to Settings > Internationalization > Languages and add es (Spanish).

In your local deployment:

- Create a .env file with the API key of your space: <br/>
  `NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN=YOUR-ACCESS-TOKEN`
- Run the server with the --experimental-https flag enabled: <br/>
  `npx next dev --experimental-https`
