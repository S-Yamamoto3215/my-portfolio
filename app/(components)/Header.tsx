import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  </header>
);

export default Header;
