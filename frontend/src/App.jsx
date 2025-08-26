import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import ProjectDetail from "./routes/ProjectDetail";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 dark:text-neutral-100 transition-colors">
        {/* Navbar */}
        <nav className="border-b border-neutral-200 dark:border-neutral-700">
          <div className="container-app flex justify-between items-center py-4">
            <Link to="/" className="font-bold text-brand dark:text-accent">
              Rakeen Alam
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/about" className="hover:text-accent">About</Link>
              <Link to="/projects" className="hover:text-accent">Projects</Link>
              <Link to="/contact" className="hover:text-accent">Contact</Link>
              <DarkModeToggle />
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="flex-1 container-app py-12 space-y-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-neutral-200 dark:border-neutral-700 py-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Rakeen Alam
        </footer>
      </div>
    </BrowserRouter>
  );
}
