import React, { useState } from 'react';
import LayoutsPage from '../layouts';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input); // Use eval carefully
      setResult(evalResult);
    } catch {
      setResult('Error');
    }
  };

  return (
   <LayoutsPage>
         <div className='bg-default h-screen'>
            <div className='flex justify-center items-center h-full '>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md mx-auto text-black">
            <div className="mb-4">
                <input
                type="text"
                value={input}
                className="w-full p-3 text-lg bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                readOnly
                />
                <div className="text-right text-2xl font-semibold mt-2">{result}</div>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((btn) => (
                <button
                    key={btn}
                    onClick={() => (btn === 'C' ? clearInput() : btn === '=' ? calculateResult() : handleInput(btn))}
                    className={`p-4 text-lg font-semibold rounded-lg ${
                    btn === '='
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : btn === 'C'
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    {btn}
                </button>
                ))}
            </div>
            </div>
            </div>
         </div>
   </LayoutsPage>
  );
};

export default Calculator;
