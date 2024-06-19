// TextInput.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setText } from './components/actions';

function TextInput() {
  const text = useSelector((state) => state.text.text);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setText(input));
    setInput('');
  };

  return (
    <div>
      <p>Text: {text}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Set Text</button>
      </form>
    </div>
  );
}

export default TextInput;
