import React from 'react';
import './Stikers.scss';
import StikerItem from './StikerItem/StikerItem';

// import './Sticker.scss';

export default function Stiker({ sticker, onDelete, onChange, onSave }) {
  return (
    <>
      {sticker.map(item => (
        <StikerItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onChange={onChange}
          onSave={onSave}
        />
      ))}
    </>
  );
}
