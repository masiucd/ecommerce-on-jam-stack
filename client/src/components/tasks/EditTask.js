import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateTask } from '../../actions/taskActions';
import UserSelect from '../layout/UserSelect';

const EditTask = ({ updateTask, tasks: { current } }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setUser(current.user);
    }
  }, [current]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form
      id="edit-task-modal"
      className="modal"
      style={modalStyle}
      onSubmit={handleSubmit}
    >
      <div className="modal-content">
        <h4>Edit Task</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              onChange={e => setMessage(e.target.value)}
              value={message}
            />
            <label htmlFor="message" className="active">
              task message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="user"
              value={user}
              className="browser-default"
              onChange={e => setUser(e.target.value)}
            >
              <option value="" disabled>
                Select User
              </option>
              <UserSelect />
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="input-field">
          <p style={{ marginLeft: '25px' }}>
            <label htmlFor="attention">
              <input
                type="checkbox"
                name="attention"
                className="filled-in"
                checked={attention}
                value={attention}
                onChange={e => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
          </p>
        </div>
      </div>

      <div className="modal-footer">
        <button
          type="submit"
          className="modal-close waves-effect green waves-light btn"
        >
          Enter
        </button>
      </div>
    </form>
  );
};

EditTask.propTypes = {
  EditTask: PropTypes.func.isRequired,
  tasks: PropTypes.object.isRequired,
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

const mapStateToProps = state => ({ tasks: state.taskState });

export default connect(
  mapStateToProps,
  { EditTask }
)(EditTask);
