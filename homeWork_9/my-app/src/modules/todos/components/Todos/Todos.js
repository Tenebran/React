import React from 'react';
import Form from './Form/Form';
import { connect } from 'react-redux';
import { deleteTodo, createItem, completedTodo } from '../../../../store/actions/actions';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minWidth: 320,
  },
  buttonCompletet: {
    backgroundColor: 'rgb(4, 230, 4)',
  },
  buttonNotCompletet: {
    backgroundColor: 'rgb(240, 43, 43)',
  },
  buttonDelete: {
    backgroundColor: 'red',
  },
}));

function Todos({ todos, dispatch }) {
  const classes = useStyles();

  function handeldeleteTodo(id, e) {
    e.stopPropagation();
    dispatch(deleteTodo(id));
  }
  function createNewItemTodo(newItem) {
    dispatch(createItem(newItem));
  }
  function todoCompleted(id) {
    dispatch(completedTodo(id));
  }
  return (
    <>
      <List component="nav" className={classes.root} aria-label="contacts">
        {todos.map(todo => (
          <ListItem
            onClick={() => todoCompleted(todo.id)}
            button
            key={todo.id}
            className={todo.completed ? classes.buttonCompletet : classes.buttonNotCompletet}
          >
            <ListItemText inset primary={todo.title} />
            <Button
              variant="contained"
              color="secondary"
              className={classes.buttonDelete}
              onClick={e => handeldeleteTodo(todo.id, e)}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>

      <Form onSave={createNewItemTodo} />
    </>
  );
}

function mapsStateToProps(state) {
  return { todos: state.list };
}

export default connect(mapsStateToProps)(Todos);
