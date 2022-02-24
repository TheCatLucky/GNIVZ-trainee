import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.scss';

const Header: React.FC = () => (
  <header className={classes.component}>
    <nav className={classes.navigation}>
      <NavLink to="/post/list" className={classes.link}>
        Списки
      </NavLink>
      <NavLink to="/post/cards" className={classes.link}>
        Карточки
      </NavLink>
      <NavLink to="/graphic" className={classes.link}>
        Графическое отображениее
      </NavLink>
    </nav>
  </header>
);

export default Header;
