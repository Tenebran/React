import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './UserForm.scss';
import useUsers from '../../hooks/useUsers';
import { useHistory } from 'react-router-dom';

export default function Form() {
  const history = useHistory();
  const { newUser } = useUsers();
  const [userForm, setUserForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  function onFormSubmit(e) {
    e.preventDefault();

    newUser(userForm);
  }

  function onInputChange(e) {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }

  function onBackBtnClick() {
    setTimeout(() => {
      history.goBack();
    }, 200);
  }

  return (
    <div className="pannel__content">
      <form noValidate autoComplete="off" className="user-form" onSubmit={onFormSubmit}>
        <h3 className="users">USER FORM:</h3>

        <TextField
          id="standard-secondary"
          label="Name"
          variant="filled"
          name="name"
          className="form-input"
          value={userForm.name}
          onChange={onInputChange}
        />

        <TextField
          id="standard-secondary"
          label="Phone"
          variant="filled"
          className="form-input"
          name="phone"
          value={userForm.phone}
          onChange={onInputChange}
        />

        <TextField
          id="standard-secondary"
          label="Email"
          variant="filled"
          className="form-input"
          name="email"
          value={userForm.email}
          onChange={onInputChange}
        />

        <div className="button-wrapper">
          <Button
            variant="contained"
            className="button button__form_left"
            type="submit"
            onClick={onBackBtnClick}
          >
            Send
          </Button>

          <Button variant="contained" className="button" onClick={onBackBtnClick}>
            Clouse
          </Button>
        </div>
      </form>
    </div>
  );
}
