import { useState, useEffect } from "react";
import gmailimg from "../images/gmail-logo.png";
import githubimg from "../images/github-logo2.png";
import linkedinimg from "../images/linkedin-logo.png";

function Contact() {



  return (
    <div class="outro">
      
      <div>
        <ul class="contact-container">
          <li>
            <a href="mailto:xnsd2015@gmail.com">xnsd2015@gmail.com
              <img class="logo"src={gmailimg} alt="gmail logo"/>
            </a>
          </li>
          <li>
            <a href="http://github.com/NDockman" target="_blank">GitHub
              <img class="logo"src={githubimg} alt="github logo"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/noah-dockman-61a635277/">LinkedIn
              <img class="logo"src={linkedinimg} alt="linkedin logo"/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Contact;