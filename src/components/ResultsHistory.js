import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
import { AiOutlineHistory } from 'react-icons/ai';
import shortid from 'shortid';

const ResultsHistoryWrapper = styled.div`
  height: 400px; // needs fixing not responsive
  width: 60%;
  min-width: 324px;
  border: 1px solid #004c93;
  border-radius: 5px;
  margin: 0 auto;
  h1 {
    margin-top: 5px;
    text-transform: capitalize;
    color: #222;
    font-weight: 400;
    font-size: 14px;
  }
  .history-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #004c93;
    .history-icon {
      margin-right: 5px;
      font-size: 20px;
      color: #222;
    }
  }
  .history-result {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 15px;
    border-bottom: 1px solid lightgray;
    p {
      display: grid;
      place-items: center;
      font-size: 10px;
      margin-right: 15px;
      margin-top: 4px;
      color: #222;
    }
  }
  .overflow {
    height: calc(100% - 34px); // check css
    overflow-y: scroll;
  }
`;

const ResultsHistory = () => {
  const [{ resultsHistory }, dispatch] = useStateValue();

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(resultsHistory));
  }, [resultsHistory]);
  return (
    <ResultsHistoryWrapper>
      <div className='history-header'>
        <AiOutlineHistory className='history-icon' />
        <h1>results history</h1>
      </div>
      <div className='overflow'>
        {resultsHistory.map((item) => {
          console.log(item);
          return (
            <p key={shortid.generate()} className='history-result'>
              {item}
            </p>
          );
        })}
      </div>
    </ResultsHistoryWrapper>
  );
};

export default ResultsHistory;
