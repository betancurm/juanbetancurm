import type {Site, Page, Links, Socials} from "./types";



export const SITE: Site = {
  TITLE: "Juan Betancur",
  DESCRIPTION: "Bienvenido a mi Web Personal!",
  AUTHOR: "Juan Betancur",
}
// Work Page

export const WORK: Page = {
  TITLE: "Experiencia",
  DESCRIPTION: "Lugares donde he trabajado.",
}
// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Mis pensamientos y artículos datos interesantes.",
}

export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos recientes en los que he trabajado.",
}
//links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Experiencia", 
    HREF: "work", 
  },
  {
    TEXT: "Blog",
    HREF: "blog",
  },
  {
    TEXT: "Proyectos",
    HREF: "projects"
  }
]
// Socials

export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "juanb9410@gmail.com",
    HREF: "mailto:juanb9410@gmail.com",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "juanbetancurm",
    HREF: "https://www.linkedin.com/in/juan-betancurm/",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "juanbetancurm",
    HREF: "https://github.com/juan-betancurm",

  }
]