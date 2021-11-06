import './calculator.css';
import { useState, useEffect } from 'react';
import Screen from './Screen';
import Buttons from './Buttons';

const operators = ['+', '-', 'x', '÷'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const Calculator = () => {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
  }, [])

  const handleClick = (value) => {
    let last_char = formula.slice(formula.length - 1);
    if (value === '=') {
      try {
        let calculate = formula.slice(0);
        calculate = calculate.replace('÷', '/');
        calculate = calculate.replace('x', '*');
        calculate = calculate.replace('^', '**');
        eval(calculate);
        if (calculate.includes('/0')){
          setResult('Error');
        }
        else {
          setResult(eval(calculate));
        }

      } catch (e) {
        setResult('error');
      }
    }
    else if (value === 'C') {
      setFormula('');
      setResult('');
    }
    else if (operators.includes(last_char) && operators.includes(value)) {
      if (last_char !== value) setFormula(formula.slice(0, formula.length - 1) + value);
    }
    else {
      setFormula(formula + value);
    }
  }

  return (
    <div className="calculator">
      <Screen formula={formula} result={result}/>
      <Buttons handleClick={handleClick}/>
    </div>
  )
};

export default Calculator;