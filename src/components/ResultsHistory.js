import React from 'react';
import styled from 'styled-components';

const ResultsHistoryWrapper = styled.div`
  height: 400px; // needs fixing not responsive
  width: 60%;
  min-width: 324px;
  border: 1px solid #004c93;
  border-radius: 5px;
  margin: 0 auto;
  h1 {
    margin-top: 5px;
    text-align: center;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 14px;
  }
`;

const ResultsHistory = () => {
  return (
    <ResultsHistoryWrapper>
      <h1>results history</h1>
    </ResultsHistoryWrapper>
  );
};

export default ResultsHistory;
