import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">ClickS</h1>
        <h6 className="mb-5">PHOTOGRAPHY</h6>
        <p>
        No matter where you go photography plays into your life somehow. We don’t 
        realize how big of an impact photography truly has on us until we see the 
        details of our life hidden in a photograph. When you flip through your photo 
        album and start looking for those details you suddenly realize you are truly 
        blessed.<b>ClickS</b> helps to keeps a moment frozen in time so we have it forever.
        </p>
        <p>
        Our product picks are editor-tested, expert-approved.
        </p>
        <p>
        Find Services stock images in HD and millions of other royalty-free stock 
        photos, illustrations and vectors in the Shutterstock collection. Thousands 
        of new, high-quality pictures added every day.
        </p>
      </div>
    </div>
  );
}

export default Post;