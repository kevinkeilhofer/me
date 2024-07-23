import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Kevin Jonathan Keilhofer",
  EMAIL: "kevin.keilhofer@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Kevin Jonathan Keilhofer's portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where Kevin Jonathan Keilhofer worked and what he did.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of Kevin Jonathan Keilhofer's projects.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/kevin-jonathan-keilhofer"
  },
  { 
    NAME: "dribbble",
    HREF: "https://dribbble.com/kevinkeilhofer"
  },
  { 
    NAME: "github",
    HREF: "https://github.com/kevinkeilhofer"
  }
];
