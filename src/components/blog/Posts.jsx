import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="./images/photo6.png"
                height="400px"
                width="400px"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Discover <b>ClickS's</b> Products &#9757;</h1>
              <p>
              With <b>ClickS</b> you can document each stage in your life journey and 
              the life journey of those important to you. Not only is ClickS a 
              way to document events in your life, but also document the events of 
              the world that turn into history. These photographs are important so we 
              don’t forget what took place and for the future generation to have proof.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;