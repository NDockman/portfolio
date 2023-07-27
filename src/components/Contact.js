
import gmailimg from "../images/gmail-logo.png";
import githubimg from "../images/github-logo2.png";
import linkedinimg from "../images/linkedin-logo.png";

function Contact() {



  return (
    <div id="outro">
      
      <ul class="logo-container">
        <li>
          <a href="mailto:xnsd2015@gmail.com">
            <img class="logo"src={gmailimg} alt="Gmail logo"/>
          </a>
        </li>
        <li>
          <a href="http://github.com/NDockman" target="_blank">
            <img class="logo"src={githubimg} alt="Github logo"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/noah-dockman-61a635277/" target="_blank">
            <img class="logo"src={linkedinimg} alt="LinkedIn logo"/>
          </a>
        </li>
      </ul>

      {/* <ul class="contact-container">
        <li>
          <a href="mailto:xnsd2015@gmail.com">xnsd2015@gmail.com</a>
        </li>
        <li>
          <a href="http://github.com/NDockman" target="_blank">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/noah-dockman-61a635277/" target="_blank">LinkedIn</a>
        </li>
      </ul> */}

    </div>
  );
}

export default Contact;