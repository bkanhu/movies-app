import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '@/components/Modal';
const Popular = ({ data }) => {
  console.log(data);

  return (
    <>
      <h1 className="mb-4 text-xl font-medium">Popular Movies</h1>

      <div className="grid grid-cols-3 gap-y-8 gap-x-4">
        {data.map((movie) => (
          <Link
            href={`/movie/${movie.id}`}
            key={movie.id}
            className="relative block rounded hover:shadow-lg hover:border"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500/%2F${
                movie.backdrop_path || movie.poster_path
              }`}
              alt={movie.name || movie.title}
              height={250}
              width={350}
              className="rounded"
            />
            <div className="absolute bottom-0 z-10 w-full py-2 pl-2 text-white rounded bg-slate-900/30 ">
              <p>{movie.name || movie.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Popular;

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day',
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API,
        },
      }
    );
    const data = response.data.results || [];
    console.log('from-try:', data.length);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    console.log('from-catch:', data.length);
    return {
      props: {
        data: [],
      },
    };
  }
}
