import React from "react";
import "./SearchPage.css";
import ChannelRow from "../components/ChannelRow";
import VideoRow from "../components/VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import { useStateValue } from "../datalayer/StateProvider";
import useApi from "../useApi.js";

function SearchPage() {
  const [{ term }] = useStateValue();

  // Live API Call

  const query = "search";
  const part = "id,snippet";
  const type = "video";
  const parameter = "q";

  const { data } = useApi(term, query, part, type, parameter);
console.log("dataSearch:", data,"termSearch:",term)


  const insertVideoRow = (item) => {
    return (
      <VideoRow
        key={item.id.videoId}
        title={item.snippet.title}
        image={item.snippet.thumbnails.medium.url}
        channel={item.snippet.channelTitle}
        timestamp
        views
        description={item.snippet.description}
      />
    );
  };

  ///
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      {/*  <ChannelRow
        channelImage={channelImage}
        channel={channel}
        verified
        subs={subs}
        noOfVideos={noOfVideos}
        description={description}
      /> */}
      <hr />
      {data && data.items.map(insertVideoRow)}
    </div>
  );
}

export default SearchPage;
