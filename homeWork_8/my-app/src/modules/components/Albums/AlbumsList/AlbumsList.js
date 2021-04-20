import React from 'react';
import AlbumsItem from '../AlbumsItem/AlbumsItem';
import './AlbumsList.scss';

export default function AlbumsList({ albumsList }) {
  return (
    <div>
      <h3 className="albums-title">Albums:</h3>
      <div className="albums__wrapper">
        {albumsList.map((item, index) => (
          <AlbumsItem key={item.id} item={item} index={++index} />
        ))}
      </div>
    </div>
  );
}
