This is a local deployment following the Next.js Quickstart guide of Storyblok.<br/>
See: https://www.storyblok.com/docs/guides/nextjs

## Getting Started

In Storyblok:

- Create a Storyblok demo space
- Create the blocks in Storyblok as described in the guide
- Go to Settings > Internationalization > Languages and add es (Spanish).

In your local deployment:

- Create a .env file with the API key of your space: <br/>
  `NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN=YOUR-ACCESS-TOKEN`
- Run the local server with the --experimental-https flag enabled: <br/>
  `npx next dev --experimental-https`
