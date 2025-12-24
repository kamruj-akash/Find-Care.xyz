import "@/app/globals.css";
import Provider from "@/lib/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Care.XYZ",
  description: "Your health companion app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col">
          <Provider>
            <div className="flex-1">{children}</div>
          </Provider>
        </main>
      </body>
    </html>
  );
}
