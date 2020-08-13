import React from 'react';
import SearchBar from './SearchBar';

function Navbar({ setSearch }) {
  return (
    <nav
      className="navbar has-background-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand ml-5 pl-5">
        <a
          className="navbar-item has-text-white has-text-weight-bold title is-2 is-family-monospace"
          href="#"
        >
          STACKED NEWS
        </a>
        {/* <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        {/* <div className="navbar-start">
          <a className="navbar-item has-text-white">Home</a>

          <a className="navbar-item has-text-white">About</a>
        </div> */}
        <SearchBar setSearch={setSearch} />
      </div>
    </nav>
  );
}

export default Navbar;
