// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (number) => {
    if (display === '0' || shouldResetDisplay) {
      setDisplay(number);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator) => {
    setShouldResetDisplay(true);
    setEquation(display + ' ' + operator + ' ');
  };

  const handleEqual = () => {
    const fullEquation = equation + display;
    try {
      const result = new Function('return ' + fullEquation)();
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
    setShouldResetDisplay(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setShouldResetDisplay(false);
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <div className="previous-operand">{equation}</div>
          <div className="current-operand">{display}</div>
        </div>
        
        <div className="keypad">
          <button className="span-two clear" onClick={handleClear}>Clear</button>
          <button className="operator" onClick={() => handleOperator('/')}>&divide;</button>
          <button className="operator" onClick={() => handleOperator('*')}>&times;</button>
          
          <button onClick={() => handleNumber('7')}>7</button>
          <button onClick={() => handleNumber('8')}>8</button>
          <button onClick={() => handleNumber('9')}>9</button>
          <button className="operator" onClick={() => handleOperator('-')}>-</button>
          
          <button onClick={() => handleNumber('4')}>4</button>
          <button onClick={() => handleNumber('5')}>5</button>
          <button onClick={() => handleNumber('6')}>6</button>
          <button className="operator" onClick={() => handleOperator('+')}>+</button>
          
          <button onClick={() => handleNumber('1')}>1</button>
          <button onClick={() => handleNumber('2')}>2</button>
          <button onClick={() => handleNumber('3')}>3</button>
          <button className="equals" onClick={handleEqual}>=</button>
          
          <button className="span-two" onClick={() => handleNumber('0')}>0</button>
          <button onClick={() => handleNumber('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;