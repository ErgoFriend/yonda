import Header from "../components/Header";

import sass from "styled-jsx/css";

const layoutStyle = sass`
margin 3rem
`;

const Layout = (props: any) => (
  <div>
    <Header />
    {props.children}
    <style jsx>{layoutStyle}</style>
  </div>
);

export default Layout;
