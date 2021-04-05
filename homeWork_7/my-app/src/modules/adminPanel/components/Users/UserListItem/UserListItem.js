import React, { useState } from 'react';
import './UserListItem.scss';

export default function UserListItem({ list, index }) {
  const [visibleUser, setVisible] = useState(false);
  function toggleList() {
    setVisible(!visibleUser);
  }
  return (
    <>
      <li className="user-list" onClick={toggleList}>
        <div className="user-list__wrapp">
          <div className="user-list__number">{index}</div>
          <div className="user-list__img"></div>
          <div className="user-list__username">{list.username}</div>
        </div>
        {!!visibleUser ? (
          <ul className="user-list__current-info">
            <li>
              <span className="user-list__label">Name:</span> {list.name}
            </li>
            <li>
              <span className="user-list__label">Email:</span> {list.email}
            </li>
            <li>
              <span className="user-list__label">Phone:</span>
              {list.phone}
            </li>
            <li>
              <span className="user-list__label">Website:</span> {list.website}
            </li>
            <ul>
              <span className="user-list__current-label">Adress:</span>
              <li>
                <span className="user-list__label">Street:</span> {list.address.street}
              </li>
              <li>
                <span className="user-list__label">Suite:</span> {list.address.suite}
              </li>
              <li>
                <span className="user-list__label">City:</span> {list.address.city}
              </li>
              <li>
                <span className="user-list__label">Zipcode:</span> {list.address.zipcode}
              </li>
            </ul>
            <ul>
              <span className="user-list__current-label"> Company:</span>

              <li>
                <span className="user-list__label">Name Company:</span> {list.company.name}
              </li>
              <li>
                <span className="user-list__label">CatchPhrase:</span> {list.company.catchPhrase}
              </li>
              <li>
                <span className="user-list__label">BS:</span> {list.company.bs}
              </li>
            </ul>
          </ul>
        ) : null}
      </li>
    </>
  );
}
