import React from 'react';

const buttonStyle = {
  margin: '10px 0',
  backgroundColor: '#0033aa',
  maxWidth: '155px',
  color: 'white',
  borderRadius: '10px',
  maxHeight: '100px',
  fontSize: '15px',
};

const Button = ({ label, handleClick }) => (
  <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
  >
  {label}
  </button>
);

export default Button;