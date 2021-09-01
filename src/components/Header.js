import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

const HeaderWrapper = styled.header`
  height: 130px;
  display: grid;
  place-items: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt='Tallink logo' />
    </HeaderWrapper>
  );
};

export default Header;
