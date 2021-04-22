import React from 'react';
import CS from './Header.module.scss';

import Nav from '../Nav';

export default function Header() {
  return (
    <div className={CS.header}>
      <div className="container">
        <Nav />
      </div>
    </div>
  );
}
