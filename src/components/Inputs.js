import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';

const InputsWrapper = styled.div`
  height: 100%;
  width: 100%;
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
    button {
      height: 30px;
      width: 130px;
      margin-bottom: 5px;
      text-transform: capitalize;
      outline: none;
      color: #004c93;
      cursor: pointer;
      transition: ease-in-out 0.3s;
      border: 1px solid lightgray;
      border-radius: 5px;
      :hover {
        border: 1px solid gray;
        background-color: #fff;
      }
    }
  }
  .inputs-flex {
    display: flex;
    margin: 5px 0;
    input {
      height: 60px;
      width: 120px;
      border-radius: 5px;
      border: 1px solid gray;
      outline: none;
      font-size: 28px;
      text-transform: capitalize;
      text-align: center;
    }
    select {
      width: 80px;
      color: #004c93;
      cursor: pointer;
      text-transform: capitalize;
      text-align: center;
    }
  }
`;

const Inputs = () => {
  const [{ resultsHistory }, dispatch] = useStateValue();

  const testDispatch = (e) => {
    e.preventDefault();
    dispatch({
      action: 'TESTING',
      payload: null,
    });
    console.log(resultsHistory);
  };
  return (
    <InputsWrapper>
      <div className='inputs'>
        <div className='inputs-flex'>
          <input type='text' />
          <select name='operations' id='operations'>
            <option value='+'>+</option>
            <option value='/'>/</option>
            <option value='%'>%</option>
            <option value='prime'>prime</option>
          </select>
          <input type='text' />
        </div>
        <button onClick={testDispatch}>calculate</button>
      </div>
    </InputsWrapper>
  );
};

export default Inputs;
