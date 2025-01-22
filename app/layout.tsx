import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "fumadocs-twoslash/twoslash.css";
import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import { siteConfig } from "@/site.config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { sharedMetadata, getMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return getMetadata(
    `Documentation | ${siteConfig.name}`,
    siteConfig.description,
  );
}
const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href={sharedMetadata.icons.icon} />
        <link rel="shortcut icon" href={sharedMetadata.icons.shortcut} />
        <link rel="apple-touch-icon" href={sharedMetadata.icons.apple} />
        <meta name="keywords" content={sharedMetadata.keywords} />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
