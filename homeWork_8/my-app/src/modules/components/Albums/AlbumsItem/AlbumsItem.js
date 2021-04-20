import React from 'react';
import './AlbumsItem.scss';
import AlbumImage from '../../../../img/album-img/Record-Album-02.jpg';

export default function AlbumsItem({ item, index }) {
  return (
    <>
      <div className="albums">
        <span className="albums__index">{index}</span>
        <span className="albums__title">{item.title}</span>
        <img src={AlbumImage} alt="Album" className="albums__img" />
      </div>
    </>
  );
}
