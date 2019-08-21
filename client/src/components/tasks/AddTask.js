import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTask } from '../../actions/taskActions';
import UserSelect from '../layout/UserSelect';

const AddTask = ({ addTask }) => {
  const [message, setMessage] = useState('');
  const [completed, setCompleted] = useState(false);
  const [user, setUser] = useState('');

  // message,
  // completed,
  // completed,

  const handleSubmit = e => {
    e.preventDefault();
    if (message === '' || user === '') {
      M.toast({ html: 'please fill in the fields' });
    } else {
      const newTask = {
        message,
        completed,
        user,
        date: new Date(),
      };

      addTask({ message, completed, user });
      // addTask({ newTask });
      M.toast({ html: `Task added by` });

      setMessage('');
      setCompleted(false);
      setUser('');
    }
  };

  return (
    <form
      id="add-task-modal"
      className="modal"
      style={modalStyle}
      onSubmit={handleSubmit}
    >
      <div className="modal-content">
        <h4>Enter Task</h4>
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
            <label htmlFor="completed">
              <input
                type="checkbox"
                checked={completed}
                value={completed}
                onChange={() => setCompleted(!completed)}
                name="completed"
                id="completed"
              />
              <span>Needs completed</span>
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

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default connect(
  null,
  { addTask }
)(AddTask);
