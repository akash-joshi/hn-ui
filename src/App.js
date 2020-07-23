import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import "./App.css";
import LineChart from "./LineChart";

const hnOrange = `rgb(255, 102, 0)`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 90px 50px 60px 1fr;
  color: black;
  background: ${hnOrange};
  padding: 0.5em 1em;
  font-size: 0.9em;
`;

const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 90px 50px 60px 1fr;
  padding: 0.5em 1em;
  background: ${(props) =>
    props.odd ? `rgb(244,244,238)` : `rgb(229,229,222)`};
`;

const GridSpan = styled.span`
  text-align: center;
`;

function App({ initialStories }) {
  console.log(initialStories);

  const isBrowser = typeof window !== `undefined`;

  const [stories, setStories] = useState(initialStories || []);
  const page = isBrowser ? parseInt(location.href.split("page=")[1]) || 1 : 1;

  useEffect(() => {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
      )
      .then((r) => setStories(r.data.hits));
  }, [page]);

  return (
    <div style={{ background: "rgb(244,244,238)", minHeight: "100vh" }}>
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
              <img alt="upvote" src="grayarrow.gif" />
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

                [<b style={{color:"black"}}>hide</b>]
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
          height: 300,
          position: "relative",
        }}
      >
        <b style={{ position: "absolute", bottom: "1em", left: "52%" }}>ID</b>
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
            ...stories.map((el) => ({ points: el.points, id: el.objectID })),
          ]}
        />
      </footer>
    </div>
  );
}

export default App;
