import React from "react";
import "./Sidebar.css";
import SidebarRow from "../components/SidebarRow.js";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotSharpIcon from "@material-ui/icons/WhatshotSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotSharpIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
