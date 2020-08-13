import React from "react";
import styled from "styled-components";
import loadable from "@loadable/component";

import "./App.css";

const Header = loadable(() => import("./components/Header"));
const Main = loadable(() => import("./components/Main"));
const Footer = loadable(() => import("./components/Footer"));

const hnOrange = `rgb(255, 102, 0)`;

const Body = styled.div`
  background: rgb(244, 244, 238);
  min-height: 100vh;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  const isBrowser = typeof window !== `undefined`;

  const page = isBrowser ? parseInt(location.href.split("/page/")[1]) || 1 : 1;

  return (
    <Body>
      <Header hnOrange={hnOrange} />
      <Main page={page} hnOrange={hnOrange} />
      <Footer page={page} hnOrange={hnOrange} />
    </Body>
  );
}

export default App;
