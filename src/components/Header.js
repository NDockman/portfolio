import { useState, useEffect } from "react";


function Header() {



  return (
    <div>
      <h1>Noah Dockman</h1>
      <nav>
        <ul>
          <li>
            <a href="#bio">About Me</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Info</a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Header;