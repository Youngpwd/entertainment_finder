import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genres/Genres";
import useGenre from "../../hooks/useGenre";
import Loading from "../../components/Loading/Loading";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0); // expect number
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const genresForUrl = useGenre(selectedGenres);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForUrl}`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    };
    fetchMovies();
    return () => {
      setContent([]);
    };
  }, [page, genresForUrl]);

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className="movies">
        {content.length > 0 ? (
          content.map((item) => (
            <SingleContent
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type="movie"
              vote_average={item.vote_average}
            />
          ))
        ) : (
          <Loading content={content} />
        )}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;

//&width_genres=${genreForUrl}  for later
