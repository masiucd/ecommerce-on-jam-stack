import React, { useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addUser } from '../../actions/userActions';
import useForm from '../../hooks/useForm';

function AddUser({ addUser }) {
  const [name, handleName, resetName] = useForm('');
  const [email, handleEmail, resetEmail] = useForm('');
  const [skills, handleSkills, resetSkills] = useForm('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '' && email === '') {
      M.toast({ html: 'please enter the fields' });
    } else {
      const newUser = {
        name,
        email,
        skills,
      };
      addUser(newUser);

      M.toast({ html: 'New user got added' });
      resetName();
      resetEmail();
      resetSkills();
    }
  };
  return (
    <form id="add-user" className="modal" onSubmit={handleSubmit}>
      <div className="modal-content">
        <h4>New User</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="text"
              placeholder="name"
              value={name}
              onChange={handleName}
              // onChange={e => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="skills"
              placeholder="skills"
              value={skills}
              onChange={handleSkills}
            />
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
      </div>
    </form>
  );
}

export default connect(
  null,
  { addUser }
)(AddUser);
