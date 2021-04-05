import api from '../../../api';
import { USER_URI } from '../constants';

export function getUsers() {
  return api.get(USER_URI);
}
