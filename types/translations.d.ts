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
    projects: string;
    contact: string;
  }
  contact: Contact;
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

type Contact = {
  title: string;
  description: string;
  email: string;
  linkedin: string;
  lookingForward: string;
  form: ContactForm;
}

type ContactForm = {
  email: string;
  message: string;
  sending: string;
  submit: string;
  success: string;
  error: string;
}

export type Translations = {
  common: CommonTranslations;
}