import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = ({ content }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout =
      content < 1
        ? setTimeout(() => {
            navigate("/");
            window.alert("No Match :(");
          }, 5000)
        : null;
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
