import React from 'react';
import styled from 'styled-components';
import Inputs from '../components/Inputs';
import ResultsHistory from '../components/ResultsHistory';

const MainSectionWrapper = styled.section`
  height: calc(100% - 260px);
  width: 100%;

`;

const MainSection = () => {
  return (
    <MainSectionWrapper>
      <Inputs />
      <ResultsHistory />
    </MainSectionWrapper>
  );
};

export default MainSection;
