import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="navbar-container">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xl font-bold"
          >
            Evan Livelo
          </Link>

          <div className="flex gap-6">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}