import "./globals.css";

export const metadata = {
  title: "Aqua_Bits - Fully Responsive Layout",
  description: "Next.js conversion of ReelUp Layout Matrix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load FontAwesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}