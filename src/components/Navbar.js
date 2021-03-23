import React from "react";
import {
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar-side">
        <div class="list-group list-group-flush">
          <Link to='/' style={{ textDecoration: 'none' }}>
              <li class="list-group-item list-group-item-action text-white">home</li>
            </Link>
            <Link to='/portfolio' style={{ textDecoration: 'none' }}>
              <li class="list-group-item list-group-item-action text-white" aria-current="true">portfolio</li>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <li class="list-group-item list-group-item-action text-white">contact</li>
            </Link>
        </div>
      </nav>
      <nav class="navbar-top">
        <div class="list-group list-group-flush list-group-horizontal">
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li class="list-group-item list-group-item-action text-white">home</li>
          </Link>
          <Link to='/portfolio' style={{ textDecoration: 'none' }}>
            <li class="list-group-item list-group-item-action text-white" aria-current="true">portfolio</li>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <li class="list-group-item list-group-item-action text-white">contact</li>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;