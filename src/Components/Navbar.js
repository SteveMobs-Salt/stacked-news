import React from 'react';

function Navbar() {


  return (
    <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="imagess" />
        </a>
        <a href="http://" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="http://" className="navbar-item">
            Home
      </a>

          <a href="http://" className="navbar-item">
            Documentation
      </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="http://" className="navbar-link">
              More
        </a>

            <div className="navbar-dropdown">
              <a href="http://" className="navbar-item">
                About
          </a>
              <a href="http://" className="navbar-item">
                Jobs
          </a>
              <a href="http://" className="navbar-item">
                Contact
          </a>
              <hr className="navbar-divider" />
              <a href="http://" className="navbar-item">
                Report an issue
          </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="http://" className="button is-primary" >
                <strong>Sign up</strong>
              </a>
              <a href="http://" className="button is-light" >
                Log in
          </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;