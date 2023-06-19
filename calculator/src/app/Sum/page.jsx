'use client'
import { data } from 'autoprefixer';
import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import { Input } from '@nextui-org/react';
export default function Sum() {
  const [var1, setVar1] = useState(0);
  const [var2, setVar2] = useState(0);
  const [result, setResult] = useState(0);

  const handleVar1Change = (event) => {
    setVar1(Number(event.target.value));
  };

  const handleVar2Change = (event) => {
    setVar2(Number(event.target.value));
  };

  const sum = () => {
    setResult(var1 + var2);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5">
          <Input clearable bordered initialValue="0" onChange={handleVar1Change} />
        </div>
        <div className="col-6 mt-5">
          <Input clearable bordered initialValue="0" onChange={handleVar2Change} />
        </div>
        <button className="mb-5" onClick={sum}>Sum!</button>
        <h2>Result:</h2>
        <h3>{result}</h3>
      </div>
    </div>
  );
}