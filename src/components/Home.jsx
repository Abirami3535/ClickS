import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="./images/photo1.jpg"
              height="550px"
              width="550px"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
            <h5>Find your inspiration!!!</h5>
            Join the ClickS community, home to tens of thousands of photos.
            Photographers record events and tells stories using images. 
            They take pictures of people, places, events, and objects.
            I want you to <b>look around your environment</b>. Whether this is at your house,
             office, or walking down the street you will come in contact with something 
             called photography. Pictures are seen on your desk, the internet, 
             billboards, and your favorite cereal box. Almost everywhere you go you 
             have been impacted by a photograph &#128151;
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;