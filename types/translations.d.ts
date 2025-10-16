type CommonTranslations = {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    welcome: string;
    intro: Intro;
    cta: string;
  },
  about: Intro;
  btn: {
    contactMe: string;
    downloadCv: string;
  },
  url: {
    linkedin: string;
    cv: string;
  },
  aria: {
    navigation: Navigation;
  }, 
  heading: {
    about: string;
  }
};

type Intro = {
  [key: string]: string | string[];
}

type Navigation = {
  primary: string;
  link: string;
  github: string;
  linkedin: string;
  scrollToTop: string;
}

export type Translations = {
  common: CommonTranslations;
}