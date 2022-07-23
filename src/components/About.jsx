import React from "react";

function About() {
  return ( 
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="./images/photo2.jpg"
              height="550px"
              width="550px"
              alt=""
            />
          </div>
          <div class="col-lg-5">
           
            <h1 class="font-weight-light">About</h1>
            <p>
            <b>ClickS </b>shows you the way to see life, to see the world, to eyewitness great events, to watch the 
            faces of the poor and the gestures of the proud, to see strange things- 
            machines, armies, multitudes, shadows in the jungle and on the moon, to see 
            man's work- his paintings, towers, and discoveries, to see things thousands 
            of miles away, things hidden behind walls and within rooms, things dangerous
            to come.. to see and be amazed &#128525;
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;