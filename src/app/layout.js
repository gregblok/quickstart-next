import StoryblokProvider from "@/components/StoryblokProvider";

// StoryblokProvider component will make features like fetching, component registration
// and bridge available across your project.

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}