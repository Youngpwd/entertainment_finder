import React, { useState, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SimpleBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#30638E",
        zIndex: 100,
        borderTop: "5px solid #EDAE49",
        boxShadow: "10px 0px 5px black",
        margin: "auto",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: "#30638E",
          display: "flex",
          justifyContent: "space-evenly",
          "& .Mui-selected": {
            color: "#EDAE49 !important",
          },
        }}
      >
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Trending"
          icon={<WhatshotRoundedIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Movies"
          icon={<MovieRoundedIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Series"
          icon={<TvRoundedIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Search"
          icon={<SearchRoundedIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default SimpleBottomNavigation;
