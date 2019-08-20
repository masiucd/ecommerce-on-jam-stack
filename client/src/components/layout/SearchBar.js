import React from 'react';
import search from '../../images/dark_search.svg';
import './Search.css';

const SearchBar = () => {
  let a;
  return (
    <nav style={{ marginBottom: '30px' }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search Logs.." />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">
                {' '}
                <img
                  src={search}
                  width="40"
                  id="search-icon"
                  alt="search"
                />{' '}
              </i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
