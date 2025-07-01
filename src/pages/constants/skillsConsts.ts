
export interface SkillsConsts {
  frontend: specializationSkills[]
  backend: specializationSkills[]
}
export interface specializationSkills {
  title: string
  description: string
  experience: string
  projects: skillsProyects[]
  subSkills: string[]
  yearsOfExperience: number
}
export interface skillsProyects {
  title: string
  description: string
  link: string
  image: string
  skills: string[]
}
export const SKILLS_CONSTS: SkillsConsts = {
  frontend: [
    {
      title: "React",
      description: "I create products and experiences with React, a JavaScript library for building user interfaces.",
      experience: "Expert",
      projects: [
        {
          title: "Portfolio Website",
          description: "A personal portfolio website built with React.",
          link: "https://example.com/portfolio",
          image: "https://example.com/portfolio-image.png",
          skills: ["React", "CSS", "JavaScript"]
        }
      ],
      subSkills: ["Hooks", "Context API", "React Router", "Redux", "Next.js", "Tailwind CSS", "Zustand", "Storybook", "Micro Frontends"],
      yearsOfExperience: 3

    },
    {
      title: "Angular",
      description: "Angular is a platform for building mobile and desktop web applications.",
      experience: "Intermediate",
      projects: [
        {
          title: "Admin Dashboard",
          description: "An admin dashboard built with Angular.",
          link: "https://example.com/admin-dashboard",
          image: "https://example.com/admin-dashboard-image.png",
          skills: ["Angular", "TypeScript", "RxJS"]
        }
      ],
      subSkills: ["NgRx", "Angular Material", "Ionic", "Angular Universal"],
      yearsOfExperience: 2
    },
    {
      title: "Bun",
      description: "Bun is a modern JavaScript runtime like Node or Deno.",
      experience: "Beginner",
      projects: [
        {
          title: "Bun CLI Tool",
          description: "A command-line tool built with Bun.",
          link: "https://example.com/bun-cli-tool",
          image: "https://example.com/bun-cli-tool-image.png",
          skills: ["Bun", "JavaScript"]
        }
      ],
      subSkills: ["Bun Runtime", "Bun CLI"],
      yearsOfExperience: 1
    }
  ],
  backend: [
    {
      title: "NodeJS",
      description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      experience: "Expert",
      projects: [
        {
          title: "REST API",
          description: "A RESTful API built with Node.js and Express.",
          link: "https://example.com/rest-api",
          image: "https://example.com/rest-api-image.png",
          skills: ["Node.js", "Express", "MongoDB"]
        }
      ],
      subSkills: ["Express", "NestJS", "GraphQL", "TypeORM", "Prisma", "Socket.IO", "Redis", "RabbitMQ"],
      yearsOfExperience: 3
    },
    {
      title: "NestJS",
      description: "NestJS is a progressive Node.js framework for building efficient and scalable server-side applications.",
      experience: "Intermediate",
      projects: [
        {
          title: "GraphQL API",
          description: "A GraphQL API built with NestJS.",
          link: "https://example.com/graphql-api",
          image: "https://example.com/graphql-api-image.png",
          skills: ["NestJS", "GraphQL", "TypeScript"]
        }
      ],
      subSkills: ["Microservices", "CQRS", "Event Sourcing", "Testing"],
      yearsOfExperience: 2
    },
    {
      title: "Bun",
      description: "Bun is a modern JavaScript runtime like Node or Deno.",
      experience: "Beginner",
      projects: [
        {
          title: "Bun Server",
          description: "A simple HTTP server built with Bun.",
          link: "https://example.com/bun-server",
          image: "https://example.com/bun-server-image.png",
          skills: ["Bun", "JavaScript"]
        }
      ],
      subSkills: ["Bun Runtime", "Bun HTTP Server"],
      yearsOfExperience: 1
    }
  ]
}
