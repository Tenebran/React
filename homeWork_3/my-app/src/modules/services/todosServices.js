import { CONTACTS_URL } from '../contacts/constans';

export function getTodos() {
  return fetch(CONTACTS_URL).then(res => res.json());
}

export function newTodos(newTodo) {
  return fetch(CONTACTS_URL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
}

export function deleteContacts(id) {
  return fetch(CONTACTS_URL + id, {
    method: 'DELETE',
  }).then(res => res.json());
}
