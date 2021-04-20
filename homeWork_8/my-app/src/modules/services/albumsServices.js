import api from '../../api';
import { ALBUMS_URI } from '../components/AdminPanel/constants';

export function getAlbums() {
  return api.get(ALBUMS_URI);
}
