import React, { Component } from 'react';
import BookListItem from '../BookListItem/BookListItem';

export default function BookList({ bookList, onDelete }) {
  return (
    <ul>
      {bookList.map(item => (
        <BookListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}
