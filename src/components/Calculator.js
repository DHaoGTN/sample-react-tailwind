import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(result + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearResult = () => {
    setResult('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-900">
      <div className="bg-blue-800 p-8 rounded-lg shadow-lg">
        <input
          type="text"
          className="bg-blue-900 text-white text-right w-full p-4 mb-4 rounded-lg focus:outline-none"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl py-4 rounded-lg focus:outline-none"
            onClick={() => handleClick('7')}
          >
            7
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl py-4 rounded-lg focus:outline-none"
            onClick={() => handleClick('8')}
          >
            8
          </button>
          {/* Rest of the number buttons */}
          {/* ... */}
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl py-4 rounded-lg focus:outline-none"
            onClick={clearResult}
          >
            C
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl py-4 rounded-lg focus:outline-none"
            onClick={() => handleClick('+')}
          >
            +
          </button>
          {/* Rest of the operator buttons */}
          {/* ... */}
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl py-4 rounded-lg focus:outline-none"
            onClick={calculateResult}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
