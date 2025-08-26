import { useParams, Link } from "react-router-dom";

const PROJECTS = {
  "donezo": {
    title: "Donezo – Full-Stack Todo App",
    description: (
      <>
        <p>
          Monolithic full-stack todo application split into a React SPA frontend and an Express/Prisma backend on
          Supabase. Authentication is handled on the frontend via Supabase Auth; the backend focuses on authorization
          and data access.
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Backend connects to Supabase using Prisma (officially supported integration).</li>
          <li>No authentication on the backend; Authorization enforced server-side over protected routes.</li>
          <li>Frontend initializes a Supabase client and manages user sessions.</li>
          <li><span className="font-medium">Env requirements (backend):</span> SUPABASE Database URL, Direct URL, Password, JWT Secret.</li>
        </ul>
      </>
    ),
    tech: ["React", "Vite", "Tailwind", "Express", "Prisma", "Supabase", "JWT"],
    repoUrl: "https://github.com/alxm101/Rakeen_A_Donezo",
  },

  "car-gallery": {
    title: "Car Gallery (Automotive Jokes & Facts)",
    description: (
      <>
        <p>
          A lightweight, Vite-based web app that lets users pick an automotive brand and view a random car-themed
          joke or trivia fact in a modal. Uses live APIs and includes a resilient fallback list if a request fails.
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>APIs: JokeAPI (safe-mode) and NHTSA Vehicle API for car makes.</li>
          <li>Features: brand dropdown, modal presentation, vote buttons, responsive layout, custom palette.</li>
          <li>Tech: Vite, JavaScript, HTML, CSS.</li>
        </ul>
      </>
    ),
    tech: ["Vite", "JavaScript", "HTML", "CSS", "JokeAPI", "NHTSA API"],
    repoUrl: "https://github.com/alxm101/RakeenAlam_TKHIF_PH1_FINAL_PROJECT",
  },

  "video-game-backlogger": {
    title: "Video Game Backlogger (Group Project)",
    description: (
      <>
        <p>
          A React + Tailwind frontend that talks to an Express backend and Supabase database to help players track
          their game backlog by title, platform, genre, estimated completion time, and status
          (<em>Not Started</em>, <em>In Progress</em>, <em>Completed</em>). Supports ratings and personal notes.
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Frontend: React (Vite) + Tailwind CSS.</li>
          <li>Backend: Node.js (Express); Database: Supabase (Postgres).</li>
          <li>Auth: Supabase auth (signup/login/logout).</li>
          <li>Team: Deshawn Curtis, Hussein Abdulahi, Rakeen Alam.</li>
        </ul>
      </>
    ),
    tech: ["React", "Vite", "Tailwind", "Express", "Supabase"],
    repoUrl: "https://github.com/DefinitiveTechX23/VideoGame_Backlogger",
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  if (!project) {
    return (
      <div className="space-y-4">
        <p>Project not found.</p>
        <Link to="/projects" className="text-accent hover:underline">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <article className="space-y-5">
      <Link to="/projects" className="text-accent hover:underline text-sm">← Back to Projects</Link>
      <h1 className="text-2xl md:text-3xl font-semibold">{project.title}</h1>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs bg-neutral-100 px-2 py-1 rounded">{t}</span>
        ))}
      </div>

      <div className="prose max-w-none text-neutral-800">
        {project.description}
      </div>

      <div className="flex gap-4">
        <a
          href={project.repoUrl}
          target="_blank" rel="noreferrer"
          className="text-sm text-accent hover:underline"
        >
          Repository
        </a>
      </div>
    </article>
  );
}
