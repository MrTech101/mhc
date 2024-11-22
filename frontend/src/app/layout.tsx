import "./styles/globals.css"; // Corrected path to globals.css

export const metadata = {
  title: "Mahendra Healthcare",
  description: "Providing quality healthcare solutions at affordable prices.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
