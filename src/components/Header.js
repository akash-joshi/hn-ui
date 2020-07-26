import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  display: grid;
  grid-template-columns: 80px 45px 55px 1fr;
  color: black;
  background: ${props => props.hnOrange};
  padding: 0.5em;
  font-size: 0.9em;
  @media (max-width: 700px) {
    grid-template-columns: 75px 55px 1fr;
  }
`;

export default function Header({ hnOrange }) {
  return (
    <HeaderStyles hnOrange={hnOrange}>
      <span>Comments</span>
      <span className="hide-on-mobile">Vote Count</span>
      <span>Upvote</span>
      <span>News Details</span>
    </HeaderStyles>
  );
}
