import api from '../../../api';
import { ALBUMS_URI } from '../constants';

export function getAlbums() {
  return api.get(ALBUMS_URI);
}
