import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './Task.css';

const TaskItem = ({ task }) => {
  let a;
  return (
    <li>
      <div className="taskItem">
        <a
          href="#edit-task"
          className={`modal-trigger ${task.vip ? 'red-text' : 'blue-text'} `}
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
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
