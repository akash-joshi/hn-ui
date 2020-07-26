import React from "react";
import styled from "styled-components";
import loadable from '@loadable/component'

import "./App.css";
import Data from "./data";

const LineChart = loadable(() => import("./LineChart"));
const hnOrange = `rgb(255, 102, 0)`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 80px 45px 55px 1fr;
  color: black;
  background: ${hnOrange};
  padding: 0.5em;
  font-size: 0.9em;
`;

const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 80px 45px 55px 1fr;
  padding: 0.5em;
  background: ${(props) =>
    props.odd ? `rgb(244,244,238)` : `rgb(229,229,222)`};
`;

const GridSpan = styled.span`
  text-align: center;
`;

const UnstyledButton = styled.button`
  background: transparent;
  border: 0px;
`;

function App() {
  const isBrowser = typeof window !== `undefined`;

  const page = isBrowser ? parseInt(location.href.split("page=")[1]) || 1 : 1;

  const { stories, hideStory, upvoteStory } = Data(page);

  return (
    <div
      style={{
        background: "rgb(244,244,238)",
        minHeight: "100vh",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Header>
        <span>Comments</span>
        <span>Vote Count</span>
        <span>Upvote</span>
        <span>News Details</span>
      </Header>
      <main>
        {stories.map((story, index) => (
          <MainGrid key={index} odd={index % 2 === 0}>
            <GridSpan>{story.num_comments}</GridSpan>
            <GridSpan>{story.points}</GridSpan>
            <GridSpan>
              <UnstyledButton onClick={() => upvoteStory(story.objectID)}>
                <img alt="upvote" src="grayarrow.gif" />
              </UnstyledButton>
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
      <footer
        style={{
          borderTop: `4px solid ${hnOrange}`,
          borderBottom: `4px solid ${hnOrange}`,
          padding: "1em",
        }}
      >
        <details>
          <summary>Display Graph</summary>
          <section
            style={{
              height: 300,
              position: "relative",
            }}
          >
            <b style={{ position: "absolute", bottom: "1em", left: "52%" }}>
              ID
            </b>
            <b
              style={{
                position: "absolute",
                top: "50%",
                transform: "rotate(270deg)",
              }}
            >
              Points
            </b>
            <LineChart
              data={[
                { id: 0 },
                ...stories.map((el) => ({
                  points: el.points,
                  id: el.objectID,
                })),
              ]}
            />
          </section>
        </details>
      </footer>
    </div>
  );
}

export default App;
