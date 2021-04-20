import api from '../../api_user';
import { USER_URI } from '../components/AdminPanel/constants';

export function getUsers() {
  return api.get(USER_URI);
}

export function create(data) {
  return api.post(USER_URI);
}

export function update(data) {
  return api.put(`${USER_URI}/${data.id}`, data);
}

export function remove(id) {
  return api.delete(`${USER_URI}/${id}`);
}
