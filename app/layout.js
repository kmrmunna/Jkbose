export const metadata = {
  title: "JKBOSE – Result Portal",
  description: "Jammu & Kashmir Board of School Education – Result Portal"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
          backgroundColor: "#f4f4f4",
          color: "#000"
        }}
      >
        {children}
      </body>
    </html>
  );
}
