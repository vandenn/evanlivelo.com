import Link from "next/link";
import styles from "./Footer.module.css";
import SocialIconButton from "./SocialIconButton";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-4/5 max-w-5xl mx-auto px-8 py-6 max-sm:w-[calc(100%-2rem)] max-sm:mx-4 max-sm:px-4 border-t border-black/10">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:items-center max-sm:text-center">
          <div>
            <Link
              href="/"
              className={styles.footerName}
            >
              Evan Livelo
            </Link>
            <a
              href="mailto:evan.livelo@gmail.com"
              className={styles.footerEmail}
            >
              evan.livelo@gmail.com
            </a>
          </div>

          <div className="flex gap-4 items-center">
            <SocialIconButton
              href="https://github.com/vandenn"
              ariaLabel="GitHub"
              icon={<GitHubIcon />}
              className={styles.footerIcon}
            />
            <SocialIconButton
              href="https://linkedin.com/in/evanlivelo"
              ariaLabel="LinkedIn"
              icon={<LinkedInIcon />}
              className={styles.footerIcon}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}