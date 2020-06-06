import React from 'react';

function Input({ input, setInput }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  return (
    <input 
      type="search"
      placeholder="Enter City..."
      onChange={handleChange}
      value={input}
    />
  );
}

export default Input 