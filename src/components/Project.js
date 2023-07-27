import { useState, useEffect } from "react";
import gradeimg from "../images/gradebook-screenshot.png";
import fishimg from "../images/mfc-screenshot.png";
import shoppimg from "../images/shopping-demo-screenshot.png";


const Project = () => {

  const bigProject = false;


  return (
    <section>
      <h2 class="sub-header">Projects</h2>
      <div class="project-container">
        <div class="big-project">
          {/* <h1>Gradebook</h1> */}
          <a href="https://umb-gradebook.herokuapp.com/" target="_blank">
            <img class="big-project-sc"src={gradeimg} alt="Screenshot for gradebook website"/>
          </a>
        </div>
        <div class="project-container-two">
          <div class="reg-project">
            {/* <h2>Minnesota Fresh Catch</h2> */}
            <a href="https://minnesota-fresh-catch.herokuapp.com/" target="_blank">
              <img class="project-sc" src={fishimg} alt="Screenshot for Minnesota Fresh Catch website"/>
            </a>
          </div>
          <div class="reg-project">
            {/* <h2>Shoppi</h2> */}
            <a href="https://moe1401.github.io/shopping-demo/" target="_blank">
              <img class="project-sc" src={shoppimg} alt="Screenshot for Shopping Demo website"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;