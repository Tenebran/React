import React from 'react';
import useAlbums from '../../hooks/useAlbums';
import AlbumsList from './AlbumsList/AlbumsList';

export default function Albums() {
  const { albumsList } = useAlbums();

  return (
    <div className="pannel__content">
      <AlbumsList albumsList={albumsList} />
    </div>
  );
}
