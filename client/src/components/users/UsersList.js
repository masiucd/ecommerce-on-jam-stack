/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/userActions';
import UserItem from './UserItem';

const UsersList = ({ getUsers, userState: { users, loading } }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="user-list" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            users !== null &&
            users.map(user => <UserItem key={user._id} user={user} />)}
        </ul>
      </div>
    </div>
  );
};

UsersList.propTypes = {
  userState: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ userState: state.userState });
export default connect(
  mapStateToProps,
  { getUsers }
)(UsersList);
