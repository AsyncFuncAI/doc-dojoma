import { source } from "@/lib/source";
import { siteConfig } from "@/site.config";
import { LogoDojoma } from "@/components/assets/LogoDojoma";
import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { HomeLayoutProps } from "fumadocs-ui/layouts/home";

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: <LogoDojoma />,
    transparentMode: "top",
  },
  githubUrl: siteConfig.links.github_org,
  links: [
    {
      text: "Home",
      url: "/",
      active: "nested-url",
    },
    {
      text: "Docs",
      url: "/docs",
      active: "nested-url",
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  sidebar: {
    defaultOpenLevel: 0,
  },
  tree: source.pageTree,
};
