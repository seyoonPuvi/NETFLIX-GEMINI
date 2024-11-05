import React from "react";
import useTrailerVideoPlaying from "../hooks/useTrailerVideoPlaying";
import { useDispatch, useSelector } from "react-redux";
import { setShowBrowsePage } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailer_KEY = useSelector(
    (store) => store.movies?.trailerVideoPlaying?.key
  );

  useTrailerVideoPlaying(movieId);
  const videoSrc = `https://www.youtube.com/embed/${trailer_KEY}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${trailer_KEY}`;

  const handleOnLoadVideo = () => {
    dispatch(setShowBrowsePage(true));
  };

  return (
    <>
      {trailer_KEY && (
        <div className="w-screen relative -top-20 bottom-0 left-0 right-0 -z-50">
          <iframe
            className="w-screen aspect-video"
            src={videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            onLoad={handleOnLoadVideo}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default VideoBackground;
