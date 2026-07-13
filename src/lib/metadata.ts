import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [{ url: "/logo.png", width: 2725, height: 973 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ["/logo.png"],
    },
  };
}
