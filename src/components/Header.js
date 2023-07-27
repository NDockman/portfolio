import { useState, useEffect } from "react";


function Header() {



  return (
    <div class="intro">
      <h1>Noah Dockman</h1>
      <nav>
        <ul>
          {/* <li>
            <a href="#bio">About</a>
          </li> */}
          {/* <li>
            <a href="#project">Projects</a>
          </li> */}
          <li>
            <a href="#outro">
              <button id="button">Contact Me!</button>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Header;