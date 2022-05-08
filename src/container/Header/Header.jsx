import React from 'react';
import './Header.css';
import { images } from '../../constants'
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
    </div>
    <div className="app__wrapper_img"></div>
  </div>
);

export default Header;
