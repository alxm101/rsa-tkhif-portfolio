import { Link } from "react-router-dom";

const projects = [
  {
    slug: "donezo",
    title: "Donezo – Full-Stack Todo App",
    tagline: "Express + Prisma + Supabase Auth + React",
    tech: ["React", "Vite", "Tailwind", "Express", "Prisma", "Supabase"],
  },
  {
    slug: "car-gallery",
    title: "Car Gallery (Automotive Jokes & Facts)",
    tagline: "API-driven jokes/facts with modal UX and brand dropdown",
    tech: ["Vite", "JavaScript", "HTML", "CSS"],
  },
  {
    slug: "video-game-backlogger",
    title: "Video Game Backlogger (Group Project)",
    tagline: "Track games, status, ratings, and notes; React + Tailwind frontend",
    tech: ["React", "Vite", "Tailwind", "Express", "Supabase"],
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold">Projects</h1>
        <p className="text-neutral-700">
          Selected work. Click any project for a short write-up and repository link.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.slug} className="rounded-xl border p-4 flex flex-col">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-neutral-700 mt-1">{p.tagline}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tech.map((t) => (
                <span key={t} className="text-xs bg-neutral-100 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <Link
                to={`/projects/${p.slug}`}
                className="text-accent hover:underline text-sm"
              >
                View details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
