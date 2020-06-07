import React from 'react';

const YoutubeEmbed = ({ videoId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="750"
        title="Youtube"
        height="422"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
