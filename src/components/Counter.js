import React from 'react';

const Counter = ({ value, onChange, minValue = 1, counterStyle = {} }) => {
  const increment = () => onChange(value + 1);
  const decrement = () => {
    if (value > minValue) onChange(value - 1);
  };

  const {
    valueSize = '10px',
    buttonSize = '10px',
    buttonStyle = {}
  } = counterStyle;

  const boxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    borderRadius: '10px',
    background: '#fff',
    padding: '6px 12px',
    gap: '12px',
        borderRadius:'20px',

  };

  const btnStyle = {
    background: 'none',
    fontSize: buttonSize,
    height: '30px',
    width: '30px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    padding: '0',
    lineHeight: '1',
    ...buttonStyle
  };

  const valueStyle = {
    fontSize: valueSize,
    fontWeight: '400',
    color: '#333',
    minWidth: '20px',
    textAlign: 'center'
  };

  return (
    <div style={boxStyle}>
      <button type="button" style={btnStyle} onClick={decrement} disabled={value <= minValue}>−</button>
      <div style={valueStyle}>{value}</div>
      <button type="button" style={btnStyle} onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
