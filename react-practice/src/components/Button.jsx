import React from 'react';
import Emoji from './Emoji';

export default function Button({ text }) {
  return (
    <div>
      <button class='button'>
        {' '}
        <Emoji animal={text} /> {text}
      </button>
    </div>
  );
}
