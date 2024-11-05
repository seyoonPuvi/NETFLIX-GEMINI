import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gptMovieInfo = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gptMovieInfo;
  if (!movieNames) return;
  return (
    <div className="flex justify-center">
      <div className="text-white bg-black bg-opacity-85 w-[90%] mt-3 py-6 ">
        {movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
