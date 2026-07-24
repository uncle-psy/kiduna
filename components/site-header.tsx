import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  showEarlyAccess?: boolean;
};

export default function SiteHeader({ showEarlyAccess = true }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Kiduna home">
        <Image src="/kiduna-logo.svg" alt="Kiduna" width={168} height={56} priority />
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="nav-link" href="/nightpaper">The Nightpaper</Link>
        {showEarlyAccess && (
          <Link className="header-link" href="/#early-access">
            Request early access <span aria-hidden="true">↘</span>
          </Link>
        )}
      </nav>
    </header>
  );
}
