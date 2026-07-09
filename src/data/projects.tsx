import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";
const PLACEHOLDER_IMG = "/assets/logo-dark.svg";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, github }: { live?: string; github?: string }) => {
  const isLiveUnderProgress = live === "under-progress";
  const isGithubUnderProgress = github === "under-progress";

  if ((!live || live === "#") && (!github || github === "#")) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        isLiveUnderProgress ? (
          <Button variant={"outline"} size={"sm"} disabled className="italic cursor-not-allowed text-xs">
            Visit (Under Progress)
          </Button>
        ) : (
          live !== "#" && (
            <Link
              className="font-mono underline flex gap-2"
              rel="noopener"
              target="_new"
              href={live}
            >
              <Button variant={"default"} size={"sm"}>
                Visit Website
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          )
        )
      )}

      {github && (
        isGithubUnderProgress ? (
          <Button variant={"outline"} size={"sm"} disabled className="italic cursor-not-allowed text-xs">
            Source (Under Progress)
          </Button>
        ) : (
          github !== "#" && (
            <Link
              className="font-mono underline flex gap-2"
              rel="noopener"
              target="_new"
              href={github}
            >
              <Button variant={"outline"} size={"sm"}>
                Source Code
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          )
        )
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  aws: brand("AWS", "cloudflare-mono.svg"),
  express: brand("Express.js", "express-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "smart-interview-simulator",
    category: "Full-Stack AI",
    title: "Smart Interview Simulator (SIS)",
    src: "https://images.openai.com/static-rsc-4/cYYAkZSCOeP9Oo1pxqKt_zORKp2zEdls-VUyp8sVWrf4Y1b1KfReyNhsfCtvR4TFRAn16EMx9E5S1IageLvPfXFAdHdILHT8ll5Nd52SwLsKsf6EtpvGY4E8uFgwqVG9ZQTCOpoOiqIaNATLV4HKTR2Zc_90gpOwBER1Rg_0HEVUah-CBCkWUAz3mOwbURp6?purpose=fullsize",
    screenshots: [],
    live: "https://frontend-delta-plum-87.vercel.app/",
    github: "https://github.com/maniktyagi04/Smart_Interview_Simulator",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A full-stack interview simulation platform using React, Node.js, Express, and PostgreSQL. Features secure authentication with JWT, Google OAuth, and RBAC, alongside real-time communication using Socket.IO. Generates AI-powered feedback and analytics dashboards using Gemini AI and Recharts.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "property-price-prediction",
    category: "AI & ML",
    title: "Intelligent Property Price Prediction",
    src: "https://cdn.timify.com/compressed/uploads/v2blogarticles/A_How_AI_Is_Reshaping_Real_Estate_Markets_2x-20240903122125-937.png",
    screenshots: [],
    live: "https://frontend-eta-six-kjtjs91us4.vercel.app/",
    github: "https://github.com/maniktyagi04/Intelligent-Property-Price-Prediction",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Designed and trained machine learning models for property price prediction, optimizing feature selection and improving prediction accuracy. Built an end-to-end ML pipeline including data preprocessing, model training, evaluation, and real-time inference via FastAPI. Integrated Llama 3 via Groq using RAG to generate contextual real estate insights.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "livechat",
    category: "Messaging",
    title: "LiveChat",
    src: "https://images.openai.com/static-rsc-4/vYiDDDj5rRc7Jz9ezZBDKlCzWumuj5JxgPd82AuxmRq3Ezrfcnj2EdcveuQ_sKVAw4OGfzqcFnL067mLzgVJBh96VJJscqnJ3cgQd-rxUfBjNMKrSf1TgD59-2nD17m-fVJB1REYhRtl4AeKKUj5xLdUrOHHPc8S7hGJc2sn0qunobxMI-R-AreIUzZO7P_6?purpose=fullsize",
    screenshots: [],
    live: "https://live-chat-premium.vercel.app",
    github: "https://github.com/maniktyagi04/LiveChat",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.sockerio,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A modern real-time messaging application with room creation, active status indicators, custom user presences, and buttery UI styling. Fully optimized for high-throughput messaging.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "library-lite",
    category: "Web App",
    title: "Library Lite",
    src: "https://images.openai.com/static-rsc-4/-jpdMjzN8qZ_8jBhxkMiyebNZSEv2wIrFftA_qpfbYc5BUDr1ZC8m3wSWe6fWOLN_tLrsgEHFo7fZ_jCLYoTimBCfIMyxaNto-ci_-ffzCtlIWgwE6x8HnkMb_2xpG9PTNxkpLsAMyVu9G6R0GjvTKI6LC8uDmzqYj5O-khZFdDIRDllbDcBIXPPAdJfnMzo?purpose=fullsize",
    screenshots: [],
    live: "https://library-lite-1.onrender.com/",
    github: "https://github.com/lomesh2312/Library_Lite",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A MERN stack Library Management System. Designed MongoDB schemas ensuring data consistency, built secure REST APIs with role-based access controls (RBAC), and optimized searches using indexed fields and pagination.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "hr-analytics",
    category: "Data Science",
    title: "HR Analytics — Job Change Prediction",
    src: "https://images.openai.com/static-rsc-4/A6zzt1JCMCcbHSLpLmc20NxbJlru82e0eHnyp417mM57tkPCv-v1p0FItKIXCy50x82gZ7kV66XC9wSX5omQmVwJ_4_pX7KwItGtM4qGMhyG8rgDNYmrNdxqIveaH0p2sNA0qbOIuMmp7CCAX0acSgazR2FScGkdkwUD0F0suksXGTfVOFeuTf0Q8O32PiQL?purpose=fullsize",
    screenshots: [],
    live: "https://github.com/maniktyagi04/HR-Analytics-Project",
    github: "https://github.com/maniktyagi04/HR-Analytics-Project",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Developed machine learning algorithms to predict whether data scientists are looking for a job change. Handles data cleaning, preprocessing, exploratory data analysis, class imbalances, and model validations to optimize candidate matching.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
  {
    id: "jarvis",
    category: "AI Automation",
    title: "AI Automation Chatbot (JARVIS)",
    src: "https://images.openai.com/static-rsc-4/zBigAaRj7m9D2-uRI1QqZmAfEF6Ft7vW8GDntdFuGYZPOYK2dKDkA22EPX66HOlqQAK1ihkBlr3y8TvpDi2yLoGQ7ghOT4okbe7EEDxECjWfwe209czSKtdq4uBmWP3w4lbwMeEAFNKdftDwwThNU5WVWTqGotwp3B2PIjCqcJkdvJ3cskSZX-UK5gcnk0vO?purpose=fullsize",
    screenshots: [],
    live: "under-progress",
    github: "under-progress",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.aiSDK,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Developing an intelligent AI voice assistant and automation chatbot (JARVIS) with local execution capabilities, natural language processing, desktop automations, and LLM integrations.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
        </div>
      );
    },
  },
];

export default projects;

