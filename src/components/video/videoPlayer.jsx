import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize,
  SkipBack,
  SkipForward,
  Settings,
  Loader2
} from 'lucide-react';

const VideoPlayer = ({ src, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);
  
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const progressBarRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!isScrubbing) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(video.currentTime);
      }
      setIsLoading(false);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [isScrubbing]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoClick = (e) => {
    // Prevent play/pause when clicking on controls
    if (e.target === videoRef.current) {
      handlePlayPause();
    }
  };

  const calculateProgress = (e) => {
    if (!progressBarRef.current) return 0;
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    
    // Support both mouse and touch events
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const pos = (clientX - rect.left) / rect.width;
    return Math.min(Math.max(pos, 0), 1);
  };

  const handleProgressStart = (e) => {
    // Prevent default to stop scrolling/selection
    e.preventDefault();
    
    const newProgress = calculateProgress(e);
    const newTime = newProgress * duration;
    
    // Immediately update video time
    videoRef.current.currentTime = newTime;
    
    setProgress(newProgress * 100);
    setCurrentTime(newTime);
    setIsScrubbing(true);

    // Define move and end handlers that work for both mouse and touch
    const handleProgressMove = (moveEvent) => {
      moveEvent.preventDefault();
      const moveProgress = calculateProgress(moveEvent);
      const moveTime = moveProgress * duration;
      
      // Continuously update video time during scrubbing
      videoRef.current.currentTime = moveTime;
      
      setProgress(moveProgress * 100);
      setCurrentTime(moveTime);
    };

    const handleProgressEnd = () => {
      setIsScrubbing(false);
      
      // Remove both mouse and touch event listeners
      document.removeEventListener('mousemove', handleProgressMove);
      document.removeEventListener('mouseup', handleProgressEnd);
      document.removeEventListener('touchmove', handleProgressMove);
      document.removeEventListener('touchend', handleProgressEnd);
      document.removeEventListener('touchcancel', handleProgressEnd);
    };

    // Add listeners for both mouse and touch events
    document.addEventListener('mousemove', handleProgressMove);
    document.addEventListener('mouseup', handleProgressEnd);
    document.addEventListener('touchmove', handleProgressMove, { passive: false });
    document.addEventListener('touchend', handleProgressEnd);
    document.addEventListener('touchcancel', handleProgressEnd);
  };

  const handleVolume = (e) => {
    const value = e.target.value;
    setVolume(value);
    videoRef.current.volume = value;
    setIsMuted(value === 0);
  };

  const handleMute = () => {
    if (isMuted) {
      videoRef.current.volume = volume;
      setIsMuted(false);
    } else {
      videoRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (playerRef.current.requestFullscreen) {
        playerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleSkip = (seconds) => {
    videoRef.current.currentTime += seconds;
    setIsLoading(true);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  return (
    <div 
      ref={playerRef}
      className="relative w-full aspect-video bg-black rounded-lg overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Loader2 className="animate-spin text-white" size={48} />
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full h-full cursor-pointer"
        src={src}
        poster={poster}
        onClick={handleVideoClick}
      />
      
      {/* Controls overlay */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {/* Progress bar */}
        <div 
          ref={progressBarRef}
          className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer group/bar"
          onMouseDown={handleProgressStart}
          onTouchStart={handleProgressStart}
        >
          <div 
            className="h-full bg-blue-500 rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full 
              transform scale-0 group-hover/bar:scale-100 transition-transform" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePlayPause}
              className="text-white hover:text-blue-500 transition-colors"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <button
              onClick={() => handleSkip(-10)}
              className="text-white hover:text-blue-500 transition-colors"
            >
              <SkipBack size={24} />
            </button>

            <button
              onClick={() => handleSkip(10)}
              className="text-white hover:text-blue-500 transition-colors"
            >
              <SkipForward size={24} />
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleMute}
                className="text-white hover:text-blue-500 transition-colors"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolume}
                className="w-20"
              />
            </div>

            <span className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center space-x-4">

            <button
              onClick={handleFullscreen}
              className="text-white hover:text-blue-500 transition-colors"
            >
              {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;