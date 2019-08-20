/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/userActions';

const UserSelect = ({ userState: { users, loading }, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {!loading &&
        users !== null &&
        users.map(user => (
          <option value={`${user.name}`} key={user._id}>
            {user.name}
          </option>
        ))}
    </>
  );
};
const mapStateToProps = state => ({
  userState: state.userState,
});

UserSelect.propTypes = {
  userState: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  { getUsers }
)(UserSelect);
