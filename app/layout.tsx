import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop Starter",
  description: "AI University — The Workshop, Production Edition starter repo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
