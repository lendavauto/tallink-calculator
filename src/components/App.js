import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';


const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <MainSection />
      <Footer />
    </AppWrapper>
  );
};

export default App;
