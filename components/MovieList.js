// components/MovieList.js
import React from 'react';

const MovieList = ({ data }) => {
  return (
    <div>
      <h2>Movies and TV Shows</h2>
      <ul className="">
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.media_type}</p>
            <p>{item.release_date || item.first_air_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
