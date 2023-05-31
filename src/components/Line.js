import React, { useState } from "react";

const Line = ({ emoji }) => {
  const [hoverLine, setHoverLine] = useState(false);

  return (
    <div
      // voir la doc sur les "mouse events"
      // https://fr.reactjs.org/docs/events.html#mouse-events
      onMouseEnter={() => setHoverLine(true)}
      onMouseLeave={() => setHoverLine(false)}
      onClick={() => {
        navigator.clipboard.writeText(emoji.symbol);
        // lien vers la solution
        // Google : react copy to clipboard
        // https://stackoverflow.com/a/52033479
      }}
      className="line"
    >
      <span>
        {emoji.symbol} {emoji.title}
      </span>
      {hoverLine && <span className="copy-span">Click to copy !</span>}
    </div>
  );
};

export default Line;
