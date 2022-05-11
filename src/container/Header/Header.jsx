import React from 'react';
import './Header.css';
import { images } from '../../constants'
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Sit Tellus Lobortis sed Senectus Vivamus Molestie. Condimentum Volutput Morbi Facilisis Quam Scelerisque Sapien Et. Prenatibus Aliquam Amet Tellus</p>
      <button type="button" className="custom__buttom">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="img" />
    </div>
  </div>
);

export default Header;
