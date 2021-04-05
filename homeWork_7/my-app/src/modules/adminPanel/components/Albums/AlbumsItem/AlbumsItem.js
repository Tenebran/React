import React from 'react';
import './AlbumsItem.scss';
import AlbumImage from '../../../../../img/album-img/Record-Album-02.jpg';

export default function AlbumsItem({ list, index }) {
  return (
    <>
      <div className="albums">
        <span className="albums__index">{index}</span>
        <span className="albums__title">{list.title}</span>
        <img src={AlbumImage} alt="Album" className="albums__img" />
      </div>
    </>
  );
}
