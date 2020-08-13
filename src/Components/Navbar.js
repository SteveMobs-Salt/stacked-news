import React from 'react';
import SearchBar from './SearchBar';

function Navbar({setSearch}) {
  return (
    <nav
      className="navbar has-background-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand" >
        <a className="navbar-item has-text-white has-text-weight-bold" href="https://bulma.io">
          STACKED NEWS
        </a>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item has-text-white">Home</a>

          <a className="navbar-item has-text-white">About</a>

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div> */}
          {/* </div> */}
        </div>
      <SearchBar setSearch={setSearch}/>
      </div>
    </nav>
  );
}

export default Navbar;
