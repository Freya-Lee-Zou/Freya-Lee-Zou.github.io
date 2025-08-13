"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleAudioError = (e: Event) => {
    console.error('Audio error:', e);
    const target = e.target as HTMLAudioElement;
    if (target.error) {
      console.error('Audio error code:', target.error.code);
      console.error('Audio error message:', target.error.message);
    }
    setAudioError(`Failed to load audio: ${target.error?.message || 'Unknown error'}`);
  };

  const handleAudioLoad = () => {
    setAudioError(null);
    setAudioLoaded(true);
    console.log('Audio loaded successfully');
  };

  const handleAudioCanPlay = () => {
    console.log('Audio can start playing');
  };

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          // Check if audio is loaded
          if (audioRef.current.readyState < 2) {
            console.log('Audio not ready, waiting...');
            setAudioError('Loading audio...');
            return;
          }
          
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            await playPromise;
            setIsPlaying(true);
            setAudioError(null);
          }
        }
      } catch (error) {
        console.error('Error playing audio:', error);
        setAudioError(`Playback failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-zinc-800/50 dark:border-zinc-800/50 light:border-zinc-300/50">
        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          loop
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={handleAudioError}
          onLoadedMetadata={handleAudioLoad}
          onCanPlay={handleAudioCanPlay}
        >
          {/* Primary audio source */}
          <source src="/music/first-man.mp3" type="audio/mpeg" />
          {/* Fallback sources for better compatibility */}
          <source src="/music/first-man.ogg" type="audio/ogg" />
          <source src="/music/first-man.wav" type="audio/wav" />
          {/* Fallback message */}
          <p>Your browser does not support the audio element.</p>
        </audio>

        {/* Music Controls */}
        <div className="flex items-center space-x-3">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 hover:from-blue-500 hover:via-cyan-600 hover:to-teal-500 text-white shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 mx-auto" />
            ) : (
              <Play className="w-5 h-5 mx-auto ml-0.5" />
            )}
          </button>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-800 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-2 bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-300 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, rgb(59 130 246) 0%, rgb(59 130 246) ${volume * 100}%, rgb(63 63 70) ${volume * 100}%, rgb(63 63 70) 100%)`
              }}
            />
          </div>
        </div>

        {/* Music Info */}
        <div className="mt-3 text-center">
          <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-medium">
            Background Music
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-500">
            {audioError ? 'Error' : isPlaying ? 'Now Playing' : audioLoaded ? 'Ready to Play' : 'Loading...'}
          </p>
          {audioError && (
            <p className="text-xs text-red-400 mt-1 break-words max-w-[120px]">{audioError}</p>
          )}
          {!audioLoaded && !audioError && (
            <p className="text-xs text-blue-400 mt-1">Loading audio...</p>
          )}
          {/* Helpful info for users */}
          <p className="text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-500 mt-1">
            File: 8.8MB MP3
          </p>
          {audioError && (
            <p className="text-xs text-yellow-400 mt-1 max-w-[120px]">
              Try refreshing the page or check your internet connection
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: rgb(59 130 246);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: rgb(59 130 246);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
