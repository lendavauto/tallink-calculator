import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
import { IoCalculatorOutline } from 'react-icons/io5';

const InputsWrapper = styled.div`
  height: 100%;
  width: 100%;
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
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
    .calc-btn-icon {
      font-size: 20px;
      margin-left: 5px;
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
      color: #222;
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
      margin: 0 5px;
    }
  }
`;

const Inputs = () => {
  const [{}, dispatch] = useStateValue();
  const [operation, setOperation] = useState('+');
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  const operationAction = 'OPERATION_' + operation.toUpperCase();

  const operationDispatch = (e) => {
    e.preventDefault();
    dispatch({
      type: operationAction,
      payload: [value1, value2],
    });
  };
  const selectOperation = (e) => {
    const operationSelectedByUser = e.target.value;
    setOperation(operationSelectedByUser);
  };

  return (
    <InputsWrapper>
      <div className='inputs'>
        <div className='inputs-flex'>
          <input type='text' onChange={(e) => setValue1(e.target.value)} />
          <select name='operations' id='operations' onChange={selectOperation}>
            <option value='+'>+</option>
            <option value='/'>/</option>
            <option value='%'>%</option>
            <option value='prime'>prime</option>
          </select>
          <input type='text' onChange={(e) => setValue2(e.target.value)} />
        </div>
        <button onClick={operationDispatch} disabled={!value1 || !value2}>
          calculate
          <IoCalculatorOutline className='calc-btn-icon' />
        </button>
      </div>
    </InputsWrapper>
  );
};

export default Inputs;
