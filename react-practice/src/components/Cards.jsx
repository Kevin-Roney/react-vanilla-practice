import React from 'react';
import { useEffect, useState } from 'react';

export default function Cards() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const cards = await fetch(
      'https://random-data-api.com/api/users/random_user?size=10'
    );

    const results = await cards.json();

    console.log(results);

    setData(results);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => fetchData()}>Random</button>
      {data.map((card, i) => (
        <div class='flip-card'>
          <div class='flip-card-inner'>
            <div class='flip-card-front'>
              <img className='avatar' src={card.avatar} alt='Avatar' />
              <h1>
                {card.first_name} {card.last_name}
              </h1>
            </div>
            <div class='flip-card-back'>
              <h1>More Information</h1>
              <p>{card.username}</p>
              <p>{card.email}</p>
              <p>{card.gender}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
