/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef, useState } from "react";
import { formatDuration } from "../../utils/formatDuration";
// import { formatTimeAgo } from "../../utils/formatTimeAgo";

type VideoGridItemsProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: JSX.Element;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
  isArticle?: boolean;
};
// const VIEW_FORMATTER = Intl.NumberFormat(undefined, { notation: "compact" });
const VideoGridItems = ({
  id,
  title,
  channel,
  // views,
  videoUrl,
  // postedAt,
  duration,
  thumbnailUrl,
  isArticle,
}: VideoGridItemsProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current === null) return;
    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);
  return (
    <div
      className="flex flex-col gap-2 my-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${
            isVideoPlaying ? "rounded-none" : "rounded-xl"
          }`}
        />
        {!isArticle ? (
          <>
            <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-5 rounded">
              {formatDuration(duration)}
            </div>
            <video
              className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 delay-200 ${
                isVideoPlaying ? "opacity-100" : "opacity-0"
              }`}
              ref={videoRef}
              muted
              playsInline
              src={videoUrl}
            />
          </>
        ) : null}
      </a>
      <div className="flex gap-2 items-center">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          {/* @ts-ignore */}
          {/* <ProfileUrl className="w-12 h-12 rounded-full" /> */}
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          {/* <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
            {channel.name}
          </a> */}
          {/* <div className="text-secondary text-sm">
            {VIEW_FORMATTER.format(views)} Views . {formatTimeAgo(postedAt)}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoGridItems;
