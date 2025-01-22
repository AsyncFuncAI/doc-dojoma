export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  author: string;
  baseUrl: string;
  links: {
    github: {
      username: string;
      url: string;
    };
    github_org: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Dojoma",
  shortName: "Docs",
  description:
    "This site serves as a centralized resource for users to explore technical guides, setup instructions, usage examples, and contributions to my open-source projects.",
  author: "Team Dojoma",
  baseUrl: "https://docs.dojoma.com",
  links: {
    github: {
      username: "dojoma",
      url: "https://github.com/dojoma",
    },
    github_org: "https://github.com/dojoma",
  },
};
