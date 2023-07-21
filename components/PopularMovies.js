import axios from 'axios';

const PopularMovies = ({ data }) => {
  console.log(data);
  if (!data || !data.length) {
    return <div>Loading...</div>; // Add a loading state while the data is being fetched
  }

  return (
    <>
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default PopularMovies;

export async function getServerSideProps() {
  try {
    // Fetch popular movies
    const response = await axios.get(
      'https://api.themoviedb.org/3/person/popular',
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API,
        },
      }
    );
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        data: [],
      },
    };
  }
}
