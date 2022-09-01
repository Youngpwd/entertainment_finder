import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../Modal/ContentModal";

const SingleContent = ({
  poster,
  title,
  date,
  media_type,
  vote_average,
  id,
}) => {
  const roundScore = Math.round(vote_average * 10) / 10;

  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average ? roundScore : "tbd"}
        color={
          roundScore >= 8.5
            ? "primary" // 8.5+
            : roundScore >= 7
            ? "success" // 7 - 8.4
            : roundScore >= 5
            ? "warning" // 5 - 6.9
            : roundScore >= 1
            ? "error" // 1 - 4.9
            : "secondary" //tbd
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle medium">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
