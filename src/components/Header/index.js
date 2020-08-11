import React from "react";
import styled from "styled-components";

const HeaderGrid = styled.div`
  display: grid;
  font-size: 0.9em;
  grid-template-columns: 80px 45px 55px 1fr;
  padding: 0.5em;
  @media (max-width: 700px) {
    grid-template-columns: 75px 55px 1fr;
  }
`;

const HeaderStyles = styled.header`
  background: ${(props) => props.hnOrange};
  color: black;
`;

export default function Header({ hnOrange }) {
  return (
    <HeaderStyles hnOrange={hnOrange}>
      <div style={{ paddingLeft: "0.5em", paddingTop: "0.5em" }}>
        HackerNews
      </div>
      <HeaderGrid>
        <span>Comments</span>
        <span className="hide-on-mobile">Vote Count</span>
        <span>Upvote</span>
        <span>News Details</span>
      </HeaderGrid>
    </HeaderStyles>
  );
}
