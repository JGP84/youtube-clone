import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import "./VideoCard.css";
import { useStateValue } from "../datalayer/StateProvider";
import useApi from "../useApi.js";

function RecommendedVideos() {
  const term = "javascript";

  // Live API Call
  const query = "search";
  const part = "id,snippet";
  const type = "video";
  const parameter = "q";

  const { data } = useApi(term, query, part, type, parameter);

  console.log("useapi",useApi(term, query, part, type, parameter))

  console.log("data", data);

  //// 2 call api, get channelImage avatar

  /* const channelId = data && data.items[0].snippet.channelId;

  const query2 = "channels";
  const part2 = "brandingSettings";
  const type2 = "channel";
  const parameter2 = "id";
  const term2 = channelId;
  console.log("term2", term2);

  const { data2 } = useApi(term2, query2, part2, type2, parameter2);
  
  console.log(
    "useApi 2 call:",
    useApi(term2, query2, part2, type2, parameter2)
  );

  console.log("data2", data2);

  const channelImage =
    data2 && data2.items[0].brandingSettings.image.bannerImageUrl;

  console.log("channelImage:", channelImage); */
  //data.items[0].brandingSettings.image.bannerImageUrl;

  const insertVideoCard = (item) => {
    return (
      <VideoCard
        key={item.id.videoId}
        title={item.snippet.title}
        image={item.snippet.thumbnails.medium.url}
        channel={item.snippet.channelTitle}
        //channelImage={channelImage}
        timestamp
        views
      />
    );
  };

  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {data && data.items.map(insertVideoCard)}
      </div>
    </div>
  );
}

export default RecommendedVideos;
