import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 130px;
  width: 100%;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 14px;
  color: #004c93;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Tallink React test assignment by: Andreas Aus</p>
    </FooterWrapper>
  );
};

export default Footer;
