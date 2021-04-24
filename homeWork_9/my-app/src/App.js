import './App.css';
import Todos from './modules/todos/components/Todos/Todos';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}
