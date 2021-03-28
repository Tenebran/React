import React, { useState } from 'react';

export default function StikerItem({ item, onDelete, onChange }) {
  const [sticker, setSticker] = useState({ ...item });

  function onDeleteBtnClick(e) {
    e.stopPropagation();

    onDelete(item.id);
  }

  function onInputChange(e) {
    setSticker({ ...sticker, description: e.target.value });
  }

  function onBlur(e) {
    onChange(sticker);
  }

  return (
    <div className="sticker__item">
      <button className="sticker__delet" onClick={onDeleteBtnClick}>
        x
      </button>
      <textarea
        className="sticker__area"
        name="description"
        value={sticker.description}
        onChange={onInputChange}
        onBlur={onBlur}
      ></textarea>
    </div>
  );
}
