import StoryblokProvider from '@/components/StoryblokProvider'
import '@/app/globals.css'
import StoryblokChecker from '@/components/StoryblokChecker'

// StoryblokProvider component will make features like fetching, component registration
// and bridge available across your project.

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang='en'>
        <body>
          {children}
          {/* <StoryblokChecker /> */}
        </body>
      </html>
    </StoryblokProvider>
  )
}
