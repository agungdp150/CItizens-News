import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/scss/HeadCategory.scss";

class HeadCategory extends Component {
  render() {
    return (
      <div>
        <nav class="flex justify-between px-8 py-4 items-center nav-style w-full">
          <div>
            <Link to="#" class="p-2">
              Tech
            </Link>
            <Link to="#" class="p-2">
              Fashion
            </Link>
            <Link to="#" class="p-2">
              Creative
            </Link>
            <Link to="#" class="p-2">
              People
            </Link>
            <Link to="#" class="p-2">
              Animal
            </Link>
            <Link to="#" class="p-2">
              Others
            </Link>
          </div>
          <div>
            <form className="search-style">
              <label> <i class="fas fa-search"/> 
              <input
                type="search"
                placeholder="Search here..."
              />
              </label>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeadCategory;
