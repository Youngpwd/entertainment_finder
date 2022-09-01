import { Button, Tab, Tabs, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const [click, setClick] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    if (searchText) {
      fetchSearch();
    }
    // eslint-disable-next-line
  }, [page, type]);

  const handleClick = () => {
    if (searchText) {
      setClick(true);
      setPage(1);
      setContent([]);
      fetchSearch();
    }
    if (!searchText) {
      setClick(false);
      setContent([]);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (searchText) {
        setClick(true);
        setPage(1);
        setContent([]);
        fetchSearch();
      }
      if (!searchText) {
        setClick(false);
        setContent([]);
      }
    }
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ display: "flex", margin: "15px 0" }}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={({ target }) => setSearchText(target.value)}
            onKeyDown={handleEnter}
          />
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={handleClick}
            required
          >
            <SearchIcon />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          style={{ paddingBottom: 5 }}
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
            setContent([]);
          }}
        >
          <Tab label="Search Movies" style={{ width: "50%", margin: "auto" }} />
          <Tab label="Search Series" style={{ width: "50%", margin: "auto" }} />
        </Tabs>
      </ThemeProvider>
      <div className="search">
        {content &&
          content.map((item) => (
            <SingleContent
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={item.vote_average}
            />
          ))}
        {searchText &&
          content.length === 0 &&
          click === true &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && searchText.length > 0 && content.length > 0 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
