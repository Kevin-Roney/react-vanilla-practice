import React from 'react';
import data from '../data/data';

export default function Joke() {
  return (
    <div className='joke-container'>
      {data.map((joke, i) => (
        <div className='joke' key={i}>
          <h2>{joke.setup}</h2>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </div>
  );
}
