import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-brand dark:text-accent">404</h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-accent text-white px-4 py-2 rounded hover:opacity-90"
      >
        Go back home
      </Link>
    </div>
  );
}
