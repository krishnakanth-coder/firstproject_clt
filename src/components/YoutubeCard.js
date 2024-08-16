import React from 'react';

const YoutubeCard = () => {
  return (
    <div className="mt-3 w-full lg:w-1/2 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Live on</h2>
      </div>
    </div>
  );
};

export default YoutubeCard;
