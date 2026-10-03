import "./globals.css";

export const metadata = {
  title: "COMMAND-X",
  description: "Immersive Multi-Domain Decision-Making Trainer"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
