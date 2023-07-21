import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
const Movie = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  // convert to year
  const dateString = `${data.release_date}`;
  const date = new Date(dateString);
  const year = String(date.getFullYear()).slice(0);
  return (
    <>
      <div className="w-full h-auto ">
        <div className="relative flex flex-row justify-between w-auto ">
          <div className="relative left-0 py-32 pl-2">
            <h1 className="my-8 text-6xl font-medium text-gray-900 ">
              {data.original_title}
            </h1>
            <div className="flex items-center my-3 text-gray-800">
              <p>{year}</p> <span className="mx-2">|</span>
              <p>
                {data.genres.map((genre) => (
                  <span key={genre.id} className="mx-1">
                    {genre.name},
                  </span>
                ))}
              </p>
            </div>
            <p className="my-3 text-gray-800 ">
              Avaliable In:
              {data.spoken_languages.map((language) => (
                <span key={language.id} className="mx-1">
                  {language.name},
                </span>
              ))}
            </p>
          </div>
          <Image
            src={`https://image.tmdb.org/t/p/w500/%2F${
              data.poster_path || data.backdrop_path
            }`}
            alt={data.name || data.title}
            height={250}
            width={350}
            className=""
          />
        </div>
      </div>
      <div>
        <h2 className="mt-8 text-3xl font-medium text-gray-800">Overview</h2>
        <p className="w-full my-4 ">{data.overview}</p>
      </div>
    </>
  );
};

export default Movie;

export async function getServerSideProps({ params }) {
  try {
    const { id } = params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API,
        },
      }
    );
    const data = response.data || [];
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
}
