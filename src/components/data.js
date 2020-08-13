import { useState, useEffect } from "react";
import axios from "axios";

export default function Data(page) {
  const fetchStories = (page, hiddenStories, upvotedStories) => {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search?page=${page}&query=react&hitsPerPage=15`
      )
      .then((r) => {
        setStories(
          r.data.hits
            .filter(
              (story) =>
                !hiddenStories.some(
                  (hiddenStory) => hiddenStory === story.objectID
                )
            )
            .map((story) => {
              return {
                ...story,
                points:
                  story.points +
                  (upvotedStories[story.objectID]
                    ? upvotedStories[story.objectID]
                    : 0),
              };
            })
        );
      });
  };

  const [stories, setStories] = useState([]);

  // Array so that we can use Array.some with Array.filter to hide elements
  const [hiddenStories, setHiddenStories] = useState([]);

  // Object so that we can use it as a hashmap for storing upvotes
  const [upvotedStories, setUpvotedStories] = useState({});

  const hideStory = (objectID) => {
    localStorage.setItem(
      "hidden",
      JSON.stringify([...hiddenStories, objectID])
    );
    setHiddenStories([...hiddenStories, objectID]);
    setStories(stories.filter((story) => story.objectID !== objectID));
  };

  const upvoteStory = (objectID) => {
    const nextUpvoteState = { ...upvotedStories };
    nextUpvoteState[objectID] = nextUpvoteState[objectID]
      ? nextUpvoteState[objectID] + 1
      : 1;
    localStorage.setItem("upvoted", JSON.stringify(nextUpvoteState));
    setUpvotedStories(nextUpvoteState);
    setStories((stories) =>
      stories.map((story) => ({
        ...story,
        points: story.points + (story.objectID === objectID ? 1 : 0),
      }))
    );
  };

  useEffect(() => {
    const hiddenStories = localStorage.getItem("hidden")
      ? JSON.parse(localStorage.getItem("hidden"))
      : [];

    setHiddenStories(hiddenStories);

    const upvotedStories = localStorage.getItem("upvoted")
      ? JSON.parse(localStorage.getItem("upvoted"))
      : {};

    setUpvotedStories(upvotedStories);

    fetchStories(page, hiddenStories, upvotedStories);
  }, [page]);

  return {
    stories,
    hideStory,
    upvoteStory,
  };
}
