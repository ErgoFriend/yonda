import Link from "next/link";
import sass from "styled-jsx/css";

const linkStyle = sass`
margin-right 1rem
`;

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <style jsx>{linkStyle}</style>
  </div>
);

export default Header;
