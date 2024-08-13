import { nanoid } from "nanoid";
export const skills = [
  {
    id: nanoid(),
    title: "HTML",
    icon: "/assets/icons/html-logo.svg",
  },
  {
    id: nanoid(),
    title: "CSS",
    icon: "/assets/icons/css-logo.svg",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: "/assets/icons/javascript.svg",
  },

  {
    id: nanoid(),
    title: "Bootstrap",
    icon: "/assets/icons/bootstrap-logo.svg",
  },
  {
    id: nanoid(),
    title: "Tailwind",
    icon: "/assets/icons/tailwindcss.svg",
  },
  {
    id: nanoid(),
    title: "SASS",
    icon: "https://miro.medium.com/v2/resize:fit:968/1*RqQ0KppwlirfKPdYf6r4zg.png",
  },
  
  {
    id: nanoid(),
    title: "React",
    icon: "/assets/icons/react-js.svg",
  },
  {
    id: nanoid(),
    title: "VueJS",
    icon: "https://tse1.mm.bing.net/th?id=OIP.Uz_N149RpqTzgKWXTCPSagHaHa&pid=Api&P=0&h=220",
  },
  {
    id: nanoid(),
    title: "ExpressJS",
    icon: "data:image/png;base64,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",
  },
  {
    id: nanoid(),
    title: "NodeJS",
    icon: "data:image/png;base64,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",
  },
  {
    id: nanoid(),
    title: "Laravel",
    icon: "https://tse3.mm.bing.net/th?id=OIP.Qo-Lj2ZoQpdhKitBFJshpwHaHn&pid=Api&P=0&h=220",
  },
  {
    id: nanoid(),
    title: "Firebase",
    icon: "https://tse2.mm.bing.net/th?id=OIP.xSHn5nIiJ2poYGZaRoE8xgHaKJ&pid=Api&P=0&h=220",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: "data:image/png;base64,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",
  },
  {
    id: nanoid(),
    title: "MYSQL",
    icon: "https://tse1.mm.bing.net/th?id=OIP.zciMTYy4oAMdBnHXf2OZ_wHaDF&pid=Api&P=0&h=220",
  },
  {
    id: nanoid(),
    title: "Redux",
    icon: "/assets/icons/redux.svg",
  },

  {
    id: nanoid(),
    title: "Pinia",
    icon: "https://tse1.mm.bing.net/th?id=OIP.vUsGI-Xdt2qRJKilyRD24AHaHa&pid=Api&P=0&h=220",
  },
  {
    id: nanoid(),
    title: "Git",
    icon: "/assets/icons/git-logo.svg",
  },
  {
    id: nanoid(),
    title: "GitHub",
    icon: "/assets/icons/github-logo-80.png",
  },
];
