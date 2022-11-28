import React from "react";

export default function App() {
  return (
    <><div>
      <iframe
        src="https://www.youtube.com/watch?v=IdA9000t808"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video" />{" "}
    </div><br /><div>
        <video src="https://www.youtube.com/watch?v=IdA9000t808" width={400} height={400} autoPlay></video>
      </div></>
  );
}