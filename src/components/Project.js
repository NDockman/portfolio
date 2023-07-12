import { useState, useEffect } from "react";


function Project() {

  const bigProject = false;


  return (
    <div>
      <div class="big-project">
        <h1>Gradebook</h1>
        <a href="https://umb-gradebook.herokuapp.com/">
          <img src="../images/gradebook-homepage-screenshot2023-06-10.png" alt="Screenshot for gradebook website"></img>
        </a>
      </div>
      <div class="reg-project">
        <h2>Minnesota Fresh Catch</h2>
        <a href="https://minnesota-fresh-catch.herokuapp.com/">
          <img src="../../images/mfc-profile.png" alt="Screenshot for Minnesota Fresh Catch website"></img>
        </a>
      </div>
      <div class="reg-project">
        <h2>Shoppi</h2>
        <a href="https://moe1401.github.io/shopping-demo/">
          <img src="../images/shopping-demo-screenshot.png" alt="Screenshot for Shopping Demo website"></img>
        </a>
      </div>

    </div>
  );
}

export default Project;