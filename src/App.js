import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import "./App.css";

const Header = styled.header`
  display: grid;
  grid-template-columns: 90px 90px 90px 1fr;
`;

const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 90px 90px 90px 1fr;
`;

function App({ initialStories }) {

  console.log(initialStories)

  const [stories, setStories] = useState(initialStories || []);
  const [page] = useState(1);

  useEffect(() => {
    axios
      .get(`https://hn.algolia.com/api/v1/search?tags=story&page=${page}`)
      .then((r) => setStories(r.data.hits));
  }, [page]);

  return (
    <div>
      <Header>
        <span>Comments</span>
        <span>Vote Count</span>
        <span>Upvote</span>
        <span>News Details</span>
      </Header>
      <main>
        {stories.map((story, index) => (
          <MainGrid key={index}>
            <span>{story.num_comments}</span>
            <span>{story.points}</span>
            <span>Doot</span>
            <span>{story.title}</span>
          </MainGrid>
        ))}
      </main>
    </div>
  );
}

export default App;
