export default function About() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-semibold">About</h1>
        <p className="text-neutral-700">
          I’m a backend-leaning full-stack developer focused on React, Express, and data modeling with Prisma and Postgres.
          I ship clean UIs and stable APIs, with a growing toolbox around authentication, integrations, and developer-friendly docs.
        </p>
      </header>

      {/* Contact */}
      <div className="rounded-xl border p-4">
        <h2 className="font-semibold">Contact</h2>
        <ul className="mt-2 text-sm text-neutral-700 space-y-1">
          <li>
            Email:{" "}
            <a className="text-accent hover:underline" href="mailto:alamrakeen@gmail.com">
              alamrakeen@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              className="text-accent hover:underline"
              href="https://www.linkedin.com/in/rakeen-alam/"
              target="_blank" rel="noreferrer"
            >
              /in/rakeen-alam/
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              className="text-accent hover:underline"
              href="https://github.com/alxm101"
              target="_blank" rel="noreferrer"
            >
              @alxm101
            </a>
          </li>
        </ul>
      </div>

      {/* Education */}
      <div className="rounded-xl border p-4">
        <h2 className="font-semibold">Education</h2>
        <ul className="mt-2 text-sm text-neutral-700 space-y-2">
          <li>
            <div className="font-medium">Macaulay Honors @ Lehman College — B.S. in Computer Science</div>
            <div className="text-neutral-600">Bronx, NY — Aug 2024 – Present</div>
          </li>
          <li>
            <div className="font-medium">Riverdale Kingsbridge Academy — Salutatorian</div>
            <div className="text-neutral-600">Bronx, NY — Sep 2020 – Jun 2024</div>
          </li>
        </ul>
      </div>

      {/* Experience */}
      <div className="rounded-xl border p-4">
        <h2 className="font-semibold">Experience</h2>
        <ul className="mt-2 text-sm text-neutral-700 space-y-3">
          <li>
            <div className="font-medium">Software Engineering Intern — Pulp Internet Corporation</div>
            <div className="text-neutral-600">NYC Ladders for Leaders (DYCD), Bronx, NY — Jul 2024 – Aug 2024</div>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Built responsive web UIs with React/Next.js; debugged issues to improve UX and performance.</li>
              <li>Designed landing pages/components in Figma and collaborated with dev/design peers.</li>
              <li>Wrote maintainable, well-documented code with cross-device compatibility in mind.</li>
            </ul>
          </li>
          <li>
            <div className="font-medium">Software Engineering Intern — NYC DOE Pathfinders CS4ALL</div>
            <div className="text-neutral-600">Bronx, NY — Feb 2024 – Jun 2024</div>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Learned Graphbook (Cerbrec) & ML to create data-analysis templates and visual tools.</li>
              <li>Used Python/TensorFlow to prototype predictive models and improve UX.</li>
              <li>Authored/Reviewed templates for training LLM modules using PyTorch.</li>
            </ul>
          </li>
          <li>
            <div className="font-medium">Karim Kharbouch Coding Fellow — The Knowledge House</div>
            <div className="text-neutral-600">Bronx, NY — Jul 2023 – Jun 2024</div>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Completed intensive training in web tech, branding, sales fundamentals, and UI basics.</li>
              <li>16 hrs/week summer program; monthly career workshops and coaching.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Leadership */}
      <div className="rounded-xl border p-4">
        <h2 className="font-semibold">Leadership & Community</h2>
        <ul className="mt-2 text-sm text-neutral-700 space-y-2">
          <li>
            <div className="font-medium">Youth Volunteer — theAbrar Community Center</div>
            <div className="text-neutral-600">Mar 2018 – Present</div>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Helped raise $75k+ in donations; led weekly youth circle (25–50 participants).</li>
            </ul>
          </li>
          <li>
            <div className="font-medium">RKA Key Club</div>
            <div className="text-neutral-600">Sep 2022 – Jun 2024</div>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Organized public fridge & canned-food drives; contributed to local service events.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Skills */}
      <div className="rounded-xl border p-4">
        <h2 className="font-semibold">Technical Skills</h2>
        <ul className="mt-2 text-sm text-neutral-700 space-y-1">
          <li><span className="font-medium">Languages:</span> JavaScript, HTML/CSS, Python</li>
          <li><span className="font-medium">Libraries/Frameworks:</span> React, Tailwind</li>
          <li><span className="font-medium">Tools:</span> Figma, VS Code, PyCharm, Google Suite, Microsoft Office</li>
        </ul>
      </div>

      {/* Resume Button */}
      <div>
        <a
          className="inline-block bg-accent text-white px-4 py-2 rounded"
          href="https://drive.google.com/file/d/1oweztMBoEAlKETMhXyh6UnVNHFiJb31b/view"
          target="_blank" rel="noreferrer"
        >
          View Resume (PDF)
        </a>
      </div>
    </section>
  );
}
