import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="w-4/5 max-w-5xl mx-auto px-8 py-4 max-sm:w-[calc(100%-2rem)] max-sm:mx-4 max-sm:px-4">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:items-start">
          <Link
            href="/"
            className={`text-xl font-bold ${styles.navLinkName}`}
          >
            Evan Livelo
          </Link>

          <div className="flex gap-6">
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/projects" className={styles.navLink}>Projects</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}