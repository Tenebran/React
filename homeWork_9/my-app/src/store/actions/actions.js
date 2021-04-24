export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';
export const CREATE_NEW_ITEM = 'CREATE_NEW_ITEM';
export const ITEM_COMPLETED = 'ITEM_COMPLETED';

export function deleteTodo(id) {
  return { type: ACTION_DELETE_TODO, payload: id };
}

export function createItem(newItem) {
  return { type: CREATE_NEW_ITEM, payload: newItem };
}

export function completedTodo(id) {
  return { type: ITEM_COMPLETED, payload: id };
}
