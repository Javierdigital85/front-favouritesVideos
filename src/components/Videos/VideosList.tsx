import { useEffect, useState } from "react";
import { Video } from "./Video"; //importamos la interfaz
import * as videoService from "./VideoService";
import VideoItem from "./VideoItem";

const VideosList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideo = async () => {
    const res = await videoService.getVideos();

    const formatedVideos = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAtAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setVideos(formatedVideos);
  };

  useEffect(() => {
    loadVideo();
  }, []);

  return (
    <div className="row">
      {videos.map((video) => (
        <VideoItem key={video._id} video={video} loadVideos={loadVideo}/>
      ))}
    </div>
  );
};

export default VideosList;
