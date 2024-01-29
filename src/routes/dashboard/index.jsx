import React from "react";

function Dashboard() {
  return (
    <section>
      {" "}
      {
        // indicates very long content
        Array.from({ length: 100 }, (_, index) => (
          <React.Fragment key={index}>
            {index % 20 === 0 && index ? "more" : "..."}
            <br />
          </React.Fragment>
        ))
      }
    </section>
  );
}

export default React.memo(Dashboard);
