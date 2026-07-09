const config = {
  title: "Manik Tyagi | Full-Stack Developer & AI/ML Engineer",
  description: {
    long: "Explore the portfolio of Manik Tyagi — a Full-stack developer with expertise in MERN and AI/ML systems, building scalable web applications integrated with machine learning and LLMs.",
    short:
      "Portfolio of Manik Tyagi — Full-stack developer and AI/ML engineer.",
  },
  keywords: [
    "Manik Tyagi",
    "portfolio",
    "full-stack developer",
    "AI/ML engineer",
    "MERN",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  author: "Manik Tyagi",
  email: "manik.tyagi@adypu.edu.in",
  site: "https://github.com/maniktyagi04",

  // for github stars button
  githubUsername: "maniktyagi04",
  githubRepo: "3d-portfolio-next-main",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/NikTy_07",
    linkedin: "https://www.linkedin.com/in/maniktyagi-dev/",
    instagram: "https://www.linkedin.com/in/maniktyagi-dev/",
    facebook: "https://www.linkedin.com/in/maniktyagi-dev/",
    github: "https://github.com/maniktyagi04",
  },
};
export { config };

