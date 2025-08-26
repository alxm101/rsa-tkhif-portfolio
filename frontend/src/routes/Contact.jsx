export default function Contact() {
  const handleEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Inquiry – Rakeen Alam");
    const body = encodeURIComponent(
      `Hi Rakeen,

I saw your portfolio and would love to connect about ...`
    );
    window.location.href = `mailto:alamrakeen@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold">Contact</h1>
        <p className="text-neutral-700">
          Reach out via email or connect on LinkedIn/GitHub. The form below builds a pre-filled email so you can send quickly.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Direct links */}
        <div className="rounded-xl border p-5 space-y-3">
          <h2 className="font-semibold">Direct</h2>
          <ul className="text-sm text-neutral-800 space-y-2">
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
            <li>WhatsApp / SMS: (212) 470-8877</li>
          </ul>
        </div>

        {/* Right: Simple email builder -> mailto */}
        <div className="rounded-xl border p-5">
          <h2 className="font-semibold mb-3">Send a quick message</h2>
          <form className="space-y-3" onSubmit={handleEmail}>
            <div>
              <label className="block text-sm mb-1">Your Name</label>
              <input className="w-full border rounded px-3 py-2" type="text" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm mb-1">Your Email</label>
              <input className="w-full border rounded px-3 py-2" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                className="w-full border rounded px-3 py-2"
                rows="4"
                placeholder="Tell me a bit about your project…"
              />
            </div>
            <button type="submit" className="bg-accent text-white px-4 py-2 rounded">
              Open Email Client
            </button>
          </form>
          <p className="text-xs text-neutral-500 mt-2">
            Clicking “Open Email Client” creates a pre-filled email to <span className="font-medium">alamrakeen@gmail.com</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
