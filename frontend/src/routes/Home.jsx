import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Who Am I */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="border-2 border-dashed border-neutral-300 rounded-xl p-2">
          <img
            src="/images/headshot.jpg"
            alt="Rakeen Alam"
            loading="lazy"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-brand">Who Am I?</h1>
          <p className="text-neutral-800">
            Hey there! My name is Rakeen Alam and I'm an aspiring backend developer. I have a passion for many things,
            including computers, cars, and video games. I'm currently a student at Macaulay Honors College, where I'm
            pursuing a Bachelor's degree in Computer Science. I live in New York, specifically in the Bronx, born and
            raised. I enjoy taking pictures of cars, and I also love to study them!
          </p>
          <p className="text-neutral-800">
            A quote I always live by is:{" "}
            <em>
              "As long as you are upon the truth, then be firm, for truth is never budged (by falsehood). Thereafter,
              defend (the truth) if you are in a weak position. There is nothing lesser than defending (the truth)."
            </em>{" "}
            - Shaykh Ibn Uthaymin
          </p>
        </div>
      </div>

      {/* Interests and Hobbies */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="border-2 border-dashed border-neutral-300 rounded-xl p-2 order-2 md:order-1">
          <div className="border-2 border-dashed border-neutral-300 rounded-xl p-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand mb-3">Interests and Hobbies</h2>
            <p className="text-neutral-800">
              I've always been into cars since I was a young age. They look so cool, and I also enjoy taking pictures of
              them, or playing video games about cars. Whether it was on Roblox, or on a racing simulator, I always enjoyed
              them. The picture above is a lineup of Cadillac Escalades and other GM (Chevrolet and GMC) SUVs, all of which
              are a part of a private limousine fleet. I was fascinated with computers when I realized that I could make my
              own games, and I've always wanted to learn how to code. I'm more fascinated with the back-end side of coding,
              but I want to expand my knowledge on the front-end side as well.
            </p>
          </div>
        </div>

        <div className="border-2 border-dashed border-neutral-300 rounded-xl p-2 order-1 md:order-2">
          <img
            src="/images/fleet.jpg"
            alt="Cadillac Escalades limousine fleet"
            loading="lazy"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Services + CTAs */}
      <div className="space-y-6">
        <header className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold">What I Can Help You Build</h2>
          <p className="text-neutral-700">
            Backend-leaning full-stack work: stable APIs, clean React UIs, and integrations that don’t break.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "MVP Build",
              desc:
                "Ship a functional MVP quickly with auth, CRUD, and a clean dashboard using React + Express.",
              icon: "🚀",
            },
            {
              title: "API Integrations",
              desc:
                "Stripe, Supabase, OAuth and third-party APIs wired cleanly with error handling and docs.",
              icon: "🔌",
            },
            {
              title: "Dashboards & Admin",
              desc:
                "Fast, accessible data UIs with search, filters, and responsive layouts using Tailwind.",
              icon: "📊",
            },
            {
              title: "Auth & Data Modeling",
              desc:
                "Supabase Auth + Prisma models, protected routes, and role-based authorization patterns.",
              icon: "🔐",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-xl border p-5 bg-white/60">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="text-sm text-neutral-700 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center bg-brand text-white px-5 py-2 rounded hover:opacity-90"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-brand text-brand px-5 py-2 rounded hover:bg-brand/5"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
