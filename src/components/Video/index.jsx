import React from 'react';

export const Video = ({
  src,
  type = 'video/mp4',
  className = 'aspect-video w-full rounded-xl object-cover pointer-events-none',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'none',
  ...props
}) => {
  return (
    <video
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      {...props}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;