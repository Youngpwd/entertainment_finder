import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import "./Genres.css";

const Genres = ({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setGenres(data.genres);
    };
    fetchGenres();
    return () => {
      setGenres([]);
    };
    // eslint-disable-next-line
  }, [type]);

  return (
    <div style={{ padding: "6px 0" }} className="genres">
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            label={genre.name}
            key={genre.id}
            id={genre.id}
            size="small"
            color="info"
            style={{ margin: 2, padding: 15 }}
            clickable
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            key={genre.id}
            id={genre.id}
            size="small"
            variant="outlined"
            style={{ margin: 2, color: "white", padding: 2 }}
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
