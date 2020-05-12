import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-4 has-text-centered is-hidden-tablet">
          <Link class="title is-4" to={"/"}>
            <img src="images/logo-transparent.png" alt="SEER" width="100" />
          </Link>
        </div>
        <div class="column is-4">
          <div class="level">
            <a class="level-item" href="/">
              Wiki
            </a>
          </div>
        </div>
        <div class="column is-4 has-text-centered is-hidden-mobile">
          <Link class="title is-4" to={"/"}>
            <img src="images/logo-transparent.png" alt="SEER" width="100" />
          </Link>
        </div>
        <div class="column is-4 has-text-right">
          <div class="level">
            <a
              class="level-item"
              href="https://www.github.com/olafwrieden/SEER"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <p class="subtitle has-text-centered is-6">
        &copy; 2020 SEER. All right reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
