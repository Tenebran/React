import { ACTION_DELETE_TODO, CREATE_NEW_ITEM, ITEM_COMPLETED } from '../actions/actions';

const INITIAL_STATE = {
  list: [
    {
      id: '14',
      title: 'Costa Rican Colon North Carolina parsing',
      completed: true,
    },
    {
      id: '16',
      title: 'Industrial indexing context-sensitive',
      completed: false,
    },
    {
      id: '18',
      title: 'North Korean Won',
      completed: false,
    },
    {
      id: '19',
      title: 'Wooden Indiana',
      completed: true,
    },
    {
      id: '20',
      title: 'Assistant actuating implement',
      completed: false,
    },
  ],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_DELETE_TODO:
      return { ...state, list: state.list.filter(item => item.id !== payload) };
    case CREATE_NEW_ITEM:
      return { ...state, list: [...state.list, payload] };
    case ITEM_COMPLETED:
      const item = state.list.find(l => l.id === payload);
      const newItem = {
        ...item,
        completed: item.completed === false ? (item.completed = true) : (item.completed = false),
      };
      return { ...state, list: state.list.filter(item => (item.id !== payload ? item : newItem)) };
    default:
      return state;
  }
}
