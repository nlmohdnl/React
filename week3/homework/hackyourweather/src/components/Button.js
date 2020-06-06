import React from 'react';

function Button({ onSubmit }) {
  return (
    <button  onClick={onSubmit} type="submit">
      Search!
    </button>
  );
}

export default Button 