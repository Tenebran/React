import { useState, useEffect } from 'react';
import { getAlbums } from '../services/albumsServices';

export default function useUsers() {
  const [albumsList, setAlbumsList] = useState([]);

  useEffect(() => {
    getAlbums().then(({ data }) => setAlbumsList(data));
  }, []);

  return {
    albumsList,
  };
}
