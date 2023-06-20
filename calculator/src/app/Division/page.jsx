'use client'
import '../globals.css'
import { React, useState } from 'react';
export default function Divide() {
  const [var1, setVar1] = useState(0);
  const [var2, setVar2] = useState(0);
  const [result, setResult] = useState(0);

  const handleVar1Change = (event) => {
    setVar1(Number(event.target.value));
  };

  const handleVar2Change = (event) => {
    setVar2(Number(event.target.value));
  };

  const divide = () => {
    setResult(var1 / var2);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-black to-white">
      <div className="mr-4 flex flex-col items-center">
        <button className="command_button" onClick={divide}>Divide!</button>
        <div>
          <input className="input" onChange={handleVar1Change} />
          <input className="input" onChange={handleVar2Change} />
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white mt-12">Result:</h2>
        <h3 className="text-4xl font-bold tracking-tight text-white">{result}</h3>
      </div>
    </div>
  );
}
