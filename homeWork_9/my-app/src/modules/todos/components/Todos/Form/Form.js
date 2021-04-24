import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20%',
    },
  },
  buttonSend: {
    backgroundColor: 'red',
    width: '150px',
    marginTop: '20px',
  },
}));

function randomId(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

export default function Form({ onSave }) {
  const classes = useStyles();
  const [list, setList] = useState({
    title: '',
    id: 98,
    completed: false,
  });

  function onFormSubmit(e) {
    e.preventDefault();
    onSave(list);
    setList({ id: randomId(99, 999), title: '', completed: false });
  }

  function onInputChange(e) {
    setList({ ...list, [e.target.name]: e.target.value });
  }
  return (
    <form className={classes.root} onSubmit={onFormSubmit} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Your Note"
        type="text"
        name="title"
        value={list.title}
        onChange={onInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.buttonSend}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
    </form>
  );
}
