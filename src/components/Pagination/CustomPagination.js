import { Pagination } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = ({ target }) => {
    setPage(target.textContent);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "10%",
      }}
    >
      <ThemeProvider theme={darkTheme}>
      <Pagination
        onChange={handlePageChange}
        count={numOfPages > 500 ? 500 : numOfPages}
        color="secondary"
        hideNextButton
        hidePrevButton
        sx={{backgroundColor: "#224764", borderRadius: 8}}
      />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
