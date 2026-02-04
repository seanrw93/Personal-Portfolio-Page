import type { Metadata } from "next";

export const metadata: Metadata = {
  verification: {
    google: "DaKsCzPVKKWbJ8svTpyqJruKDoE1tPqNXXm4Sc35XpQ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
