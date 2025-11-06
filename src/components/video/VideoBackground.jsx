import React from "react";
import "../../sass/components/_VideoBackground.scss";
import blackhole from '../../assets/blackhole.mp4';
import lightVideo from '../../assets/light-bg.mp4';
import { useTheme } from "../../utils/hooks/index";

const VideoBackground = () => {
  const { darkMode } = useTheme();

  return (
    <div className="video-wrapper">
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
        key={darkMode ? "dark" : "light"}
      >
        <source src={darkMode ? blackhole : lightVideo} type="video/mp4" />
      </video>

      {/* le voile par-dessus */}
      <div className={`video-overlay ${darkMode ? "dark" : "light"}`}></div>
    </div>
  );
};

export default VideoBackground;
