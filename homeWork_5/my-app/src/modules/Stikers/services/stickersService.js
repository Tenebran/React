import { STIKERS_URL } from '../constants';
const EMPTY_STICKER = {
  description: '',
};

export function getStikers() {
  return fetch(STIKERS_URL).then(res => res.json());
}

export function updateStiker(newItem) {
  return fetch(STIKERS_URL + newItem.id, {
    method: 'PUT',
    body: JSON.stringify(newItem),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
}

export function deleteStiker(id) {
  return fetch(STIKERS_URL + id, {
    method: 'DELETE',
  }).then(res => res.json());
}

export function createStiker(newItem) {
  return fetch(STIKERS_URL, {
    method: 'POST',
    body: JSON.stringify(newItem),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
}
