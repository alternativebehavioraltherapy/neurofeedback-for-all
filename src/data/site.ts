export const site = {
  name: "Neurofeedback For All",
  brand: "Neuro Balance NW",
  tagline: "Accessible neurofeedback rentals for everyone",
  description:
    "Home neurofeedback system rentals from Neuro Balance NW in Vancouver, WA. Unlimited sessions, flexible monthly plans, and low-income rates available.",
  phone: "(360) 553-1350",
  phoneHref: "tel:+13605531350",
  email: "office@altbehtherapy.com",
  emailHref:
    "mailto:office@altbehtherapy.com?subject=NeurOptimal%20inquiry",
  /** Shared office inbox — mention NeurOptimal so the message is routed */
  formEmail: "office@altbehtherapy.com",
  inquireAbout: "NeurOptimal",
  address: {
    line1: "3000 SE 164th Ave, Suite 108",
    city: "Vancouver, WA 98683",
    full: "3000 SE 164th Ave, Suite 108, Vancouver, WA 98683",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=3000+SE+164th+Ave+Suite+108+Vancouver+WA+98683",
  },
  social: {
    facebook: "https://www.facebook.com/brainbalancenw",
    linkedin: "https://www.linkedin.com/company/brain-balance-northwest-llc",
    twitter: "https://x.com/brain_northwest",
    email:
      "mailto:office@altbehtherapy.com?subject=NeurOptimal%20inquiry",
  },
  owner: {
    name: "Joshua Moore",
    title: "Program Director / Developer",
    photo: "/joshua-moore.jpg",
  },
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/information", label: "Information" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const videos = [
  {
    id: "sYs2tpF5Kko",
    title: "An illustrated introduction to NeurOptimal",
    description: "A short video explaining our approach.",
  },
  {
    id: "m9V5dDz8LBY",
    title: "Thoughts from NeurOptimal clients",
    description: "Hear what clients say about their experience.",
  },
  {
    id: "fcftUUE2aMM",
    title: "This is your brain on NeurOptimal",
    description: "A closer look at how the training works.",
  },
  {
    id: "XwfdacPu3F4",
    title: "Interviewing NeurOptimal trainers",
    description: "Experiences from people who practice NeurOptimal.",
  },
  {
    id: "UGx_2OZUKOc",
    title: "Testimony from a mom",
    description: "Real client experiences with behavior and wellness.",
  },
  {
    id: "vBA4N5MLk2k",
    title: "Testimony on anxiety",
    description: "A personal story of experiencing NeurOptimal.",
  },
] as const;
