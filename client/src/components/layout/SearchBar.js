import React, { useEffect, useRef } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import search from '../../images/dark_search.svg';
import { searchTasks, clearSearch } from '../../actions/taskActions';

const SearchBar = ({ searchTasks, clearSearch, filtered }) => {
  const text = useRef('');
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const handleChange = e => {
    if (text.current.value !== '') {
      searchTasks(text.current.value);
    } else {
      clearSearch();
    }
  };

  return (
    <nav style={{ marginBottom: '30px' }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Tasks.."
              ref={text}
              onChange={handleChange}
            />
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

SearchBar.propTypes = {
  filtered: PropTypes.object.isRequired,
  searchTasks: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ filtered: state.taskState.filtered });

export default connect(
  mapStateToProps,
  { searchTasks, clearSearch }
)(SearchBar);
