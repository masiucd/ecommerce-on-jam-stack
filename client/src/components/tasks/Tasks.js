/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks } from '../../actions/taskActions';
import TaskItem from './TaskItem';

const Tasks = ({ taskState: { tasks, loading }, getTasks }) => {
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && tasks !== null ? (
          tasks.map(task => <TaskItem key={task._id} task={task} />)
        ) : (
          <p className="center">No logs to show...</p>
        )}
      </ul>
    </>
  );
};

Tasks.propTypes = {
  getTasks: PropTypes.func.isRequired,
  taskState: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ taskState: state.taskState });

export default connect(
  mapStateToProps,
  { getTasks }
)(Tasks);
