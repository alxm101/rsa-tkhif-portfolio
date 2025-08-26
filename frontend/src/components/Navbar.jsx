import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-brand text-white z-50">
      <div className="container-app h-14 flex items-center justify-between">
        <div className="font-semibold">Rakeen’s Portfolio</div>
        <div className="flex gap-4 text-sm">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `hover:text-accent ${isActive ? "underline" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
