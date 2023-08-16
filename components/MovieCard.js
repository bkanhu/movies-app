import Image from 'next/image';

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        width={200}
        height={350}
      />
      <h2>{movie.title}</h2>
    </div>
  );
}
