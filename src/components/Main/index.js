import React from "react";
import styled from "styled-components";

import Data from "../data";

const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 80px 45px 55px 1fr;
  padding: 0.5em;
  background: ${(props) =>
    props.odd ? `rgb(244,244,238)` : `rgb(229,229,222)`};
  @media (max-width: 700px) {
    grid-template-columns: 75px 55px 1fr;
  }
`;

const GridSpan = styled.span`
  text-align: center;
`;

const UnstyledButton = styled.button`
  background: transparent;
  border: 0px;
`;

export default function Main({ page, hnOrange }) {
  const { stories, hideStory, upvoteStory } = Data(page);

  return (
    <main>
      {stories.map((story, index) => (
        <MainGrid key={index} odd={index % 2 === 0}>
          <GridSpan>{story.num_comments}</GridSpan>
          <GridSpan className="hide-on-mobile">{story.points}</GridSpan>
          <GridSpan>
            <UnstyledButton onClick={() => upvoteStory(story.objectID)}>
              <img alt="upvote" src="grayarrow.gif" />
            </UnstyledButton>
            <div className="show-on-mobile">
                {story.points}
            </div>
          </GridSpan>
          <span>
            <a style={{ color: "black" }} href={story.url}>
              {story.title}
            </a>{" "}
            <span style={{ color: "#828282", fontSize: "0.9em" }}>
              {story.url && (
                <a
                  style={{ color: "#828282" }}
                  href={`http://${story.url.split("/")[2].split("www.")[0] ||
                    story.url.split("/")[2].split("www.")[1]}`}
                  target="_blank"
                >
                  (
                  {story.url.split("/")[2].split("www.")[0] ||
                    story.url.split("/")[2].split("www.")[1]}
                  )
                </a>
              )}{" "}
              by <b style={{ color: "black" }}>{story.author}</b>{" "}
              {new Date(story.created_at).toLocaleString("en-US", {
                timeZone: "Asia/Kolkata",
              })}{" "}
              [
              <UnstyledButton
                onClick={() => hideStory(story.objectID)}
                style={{ color: "black" }}
              >
                hide
              </UnstyledButton>
              ]
            </span>
          </span>
        </MainGrid>
      ))}

      <div
        style={{
          textAlign: "right",
          padding: "1em",
          color: hnOrange,
        }}
      >
        <a
          style={{
            marginRight: "0.5em",
            color: page !== 1 ? hnOrange : "rgb(122, 121, 121)",
          }}
          href={page !== 1 ? `/?page=${page - 1}` : "#"}
        >
          Previous
        </a>
        <span style={{ marginRight: "0.5em" }}>|</span>
        <a style={{ color: hnOrange }} href={`/?page=${page + 1}`}>
          Next
        </a>
      </div>
    </main>
  );
}
