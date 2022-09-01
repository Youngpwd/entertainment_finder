import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Loading from "../../components/Loading/Loading";

const Trending = () => {
  const [content, setContent] = useState([]); //expect array of movie/series objects
  const [page, setPage] = useState(1); // expect number
  // const [totalPages, setTotalPages] = useState(0); // expect number

  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      setContent(data.results);
      // setTotalPages(data.total_pages);
    };
    fetchTrending();
    return () => {
      setContent([]);
    };
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content.length > 0 ? (
          content.map((item) => (
            <SingleContent
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type={item.media_type}
              vote_average={item.vote_average}
            />
          ))
        ) : (
          <Loading content={content} />
        )}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
