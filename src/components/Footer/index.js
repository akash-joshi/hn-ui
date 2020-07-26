import React from "react";
import loadable from "@loadable/component";

import Data from "../data";

const LineChart = loadable(() => import("./LineChart"));

export default function Footer({ hnOrange, page }) {
  const { stories } = Data(page);

  return (
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
              ...stories.map((el) => ({
                points: el.points,
                id: el.objectID,
              })),
            ]}
          />
        </section>
      </details>
    </footer>
  );
}
