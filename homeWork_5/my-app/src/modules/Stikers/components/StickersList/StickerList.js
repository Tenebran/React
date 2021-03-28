import React, { useState, useEffect } from 'react';
import './StickerList.scss';
import Stikers from '../Stikers/Stikers';

export default function StickerList({ sticker, onDelete, onChange, onSave }) {
  return (
    <div className="sticker__wrapper">
      <Stikers sticker={sticker} onDelete={onDelete} onChange={onChange} onSave={onSave} />
    </div>
  );
}
