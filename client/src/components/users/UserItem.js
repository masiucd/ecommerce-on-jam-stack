import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DeleteUser } from '../../actions/userActions';
import trash from '../../images/trash.svg';
import './user.css';

const UserItem = ({ user, DeleteUser }) => {
  const handleDelete = () => {
    DeleteUser(user._id);
  };
  return (
    <>
      <li className="collection-item user">
        Name: {user.name} <br />
        Email: {user.email} <br />
        Skills:{' '}
        {user.skills.map(skill => (
          <span>{skill}</span>
        ))}
        <a href="#!" className="secondary-content" onClick={handleDelete}>
          <i className="material-icons grey-text">
            {' '}
            <img
              src={trash}
              width="37"
              className="trash-icon"
              alt="trash icon"
            />{' '}
          </i>
        </a>
      </li>
    </>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  DeleteUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  { DeleteUser }
)(UserItem);
