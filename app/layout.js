export const metadata = {
  title: "JkBose Board Result",
  description: "Official Jkbose  Website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>
        {children}
      </body>
    </html>
  );
}
