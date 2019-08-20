import React from 'react';
import add from '../../images/add.svg';
import uno from '../../images/tech_uno.svg';
import dues from '../../images/tech_dues.svg';

const AddBtn = () => (
  <div className="fixed-action-btn">
    <a
      href="#add-task-modal"
      className="btn-floating btn-large blue darken-2 modal-trigger"
    >
      <i className="large material-icons">
        <img src={add} alt="add task icon" />
      </i>
    </a>
    <ul>
      <li>
        <a href="#user-list" className="btn-floating green modal-trigger">
          <i className="material-icons">
            {' '}
            <img src={uno} alt="tech icon" width="35" />{' '}
          </i>
        </a>
      </li>
      <li>
        <a href="#add-user" className="btn-floating red modal-trigger">
          <i className="material-icons">
            <img src={dues} alt="tech icon" width="35" />
          </i>
        </a>
      </li>
    </ul>
  </div>
);

export default AddBtn;
