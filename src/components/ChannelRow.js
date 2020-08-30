import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar"; //or import { Avatar } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  channel,
  channelImage,
  subs,
  noOfVideos,
  verified,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo"
        src={channelImage} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>
        <p>
          {subs} subscribers {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
