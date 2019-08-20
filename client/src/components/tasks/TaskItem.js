import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteTask, setCurrent } from '../../actions/taskActions';
import deleteIcon from '../../images/del2.svg';

const TaskItem = ({ task, deleteTask, setCurrent }) => {
  const handleDelete = () => {
    deleteTask(task._id);
    M.toast({ html: 'Task Deleted' });
  };

  return (
    <li>
      <div className="taskItem">
        <a
          href="#edit-task-modal"
          className={`modal-trigger ${task.vip ? 'red-text' : 'blue-text'} `}
          onClick={() => setCurrent(task)}
        >
          {task.message}
        </a>
        <br />
        <span className="white-text">
          <span className="teal lighten-4">
            ID-number #{Math.floor(Math.random() * 100)}{' '}
          </span>
          Last updated By <span className="blue-text">User name goes here</span>{' '}
          On
          <span format="MMMM Do YYYY, h:mm:ss a">
            {' '}
            {task.date.split('').slice(0, 10)}{' '}
          </span>
          <br />
          <span>Completed:</span>
          <span className={task.completed ? 'green-text' : 'red-text'}>
            {task.completed ? 'Completed' : 'Not completed'}
          </span>
        </span>
        <a href="#!" className="secondary-content" onClick={handleDelete}>
          <i className="material-icons grey-text">
            {' '}
            <img
              className="delete-icon"
              src={deleteIcon}
              alt="delete icon"
              width="34"
            />{' '}
          </i>
        </a>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteTask, setCurrent }
)(TaskItem);
