import React from 'react';
import AlbumsItem from '../AlbumsItem/AlbumsItem';
import './AlbumsList.scss';

export default function AlbumsList({ albumsList }) {
  return (
    <div>
      <h3 className="users">Albums:</h3>
      <div className="albums__wrapper">
        {albumsList.map((list, index) => (
          <AlbumsItem key={list.id} list={list} index={++index} />
        ))}
      </div>
    </div>
  );
}
