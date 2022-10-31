import React from 'react';

export default function Emoji({ animal }) {
  return (
    <>
      {animal === 'dog' && <span>🐕</span>}
      {animal === 'cat' && <span>🐈</span>}
      {animal === 'bird' && <span>🐦</span>}
      {animal === 'fish' && <span>🐟</span>}
    </>
  );
}
