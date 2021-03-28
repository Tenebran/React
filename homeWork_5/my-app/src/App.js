import StickersList from './modules/Stikers/components/StickersList/StickerList';
import React, { useState, useEffect } from 'react';
import {
  getStikers,
  createStiker,
  deleteStiker,
  updateStiker,
} from './modules/Stikers/services/stickersService';

import './App.scss';
import Header from './modules/Stikers/components/Header/Header';

function App() {
  const [sticker, setSticker] = useState([]);

  useEffect(() => {
    getStikers().then(sticker => setSticker(sticker));
  }, []);

  function addNewSticker(newItem) {
    createStiker(newItem).then(data => {
      setSticker(() => {
        return [...sticker, data];
      });
    });
  }
  function changeSticker(stick) {
    const item = sticker.find(l => l.id === stick.id);
    const newItem = { ...item, description: stick.description };

    updateStiker(newItem).then(() => {
      setSticker(sticker.map(item => (item.id !== stick.id ? item : newItem)));
    });
  }

  function deleteStick(id) {
    deleteStiker(id);

    setSticker(sticker.filter(item => item.id !== id));
  }

  function saveSticker(id) {}

  return (
    <>
      <Header onSave={addNewSticker} />
      <StickersList
        sticker={sticker}
        onDelete={deleteStick}
        onChange={changeSticker}
        onSave={saveSticker}
      />
    </>
  );
}

export default App;
