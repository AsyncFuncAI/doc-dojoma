import { createMetadataImage } from "fumadocs-core/server";
import { source } from "@/lib/source";
import { Metadata } from "next";

const baseUrl = "https://doc.dojoma.ai";

export const metadataImage = createMetadataImage({
  imageRoute: "/docs-og",
  source,
});

export const sharedMetadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: `/favicon.png`,
    shortcut: `/favicon.png`,
    apple: `/apple-touch-icon.png`,
  },
  keywords: [
    "artificial intelligence",
    "blockchain technology",
    "digital transformation",
    "AI solutions",
    "blockchain solutions",
    "web3 development",
    "asyncfunc",
    "asyncfunc ai",
    "educational technology",
    "fintech solutions",
    "digital connectivity",
    "AI integration",
    "blockchain innovation",
    "smart contracts",
    "decentralized applications",
    "AI education",
    "financial access",
    "digital inclusion",
    "tech innovation",
    "AI development",
    "blockchain development",
    "future technology",
    "digital literacy",
    "technological advancement",
    "AI infrastructure",
    "blockchain infrastructure",
    "tech solutions",
    "digital solutions",
    "innovation platform",
    "emerging technology",
    "technology access",
    "digital transformation",
    "tech education",
    "AI research",
    "blockchain research",
    "technology integration",
    "digital ecosystem",
    "tech development",
    "future-ready solutions",
    "technological innovation",
    "digital advancement",
  ].join(", "),
};

export const getMetadata = (
  title?: string,
  description: string = "Building Better Futures, Function by Function.",
): Metadata => {
  const displayTitle = title
    ? `${title} | Dojoma Documenation`
    : "Dojoma Documenation";

  return {
    ...sharedMetadata,
    title: {
      default: "Dojoma Documenation",
      template: "%s | Dojoma Documenation",
    },
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      siteName: "Dojoma",
      title: displayTitle,
      description,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Dojoma",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      site: "@dojoma_ai",
      creator: "@dojoma_ai",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Dojoma",
        },
      ],
    },
  };
};
