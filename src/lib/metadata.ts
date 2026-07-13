import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}
