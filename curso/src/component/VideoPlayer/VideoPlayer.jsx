import React, {useState, useEffect} from 'react';
import './VideoPlayer.scss';
import video from './CinematicSafeHaven.mp4';

const VideoPlayer = () => {
    const [htmlVideo, setHtmlVideo] = useState('');
    useEffect(() => {
        const videoquery = document.querySelector('video');
        console.dir(videoquery);
        setHtmlVideo(document.querySelector('video'));
    }, []);
    const handlePlay = (e) => {
        console.log(e.target);
        console.log(htmlVideo);
        if(video.paused) {
            htmlVideo.play();
        } else {
            htmlVideo.pause();
        }
    }

    const handleSkip = (e) => {
        console.log(e.target.value);
        console.log(htmlVideo);
    }

    return (
        <div className="video-player-screen">
            <div className="player">
                <video src={video}></video>
                <div className="player-controls">
                    <div className="progress">
                        <div className="progress-filled"></div>
                    </div>
                    <button className="player-button toggle" onClick={handlePlay} title="Toggle Play">Play</button>
                    <input type="range" name="volume" className="player-slider" min="0" max="1" step="0.05" defaultValue="1" />
                    <input type="range" name="playbackRate" className="player-slider" min="0.5" max="2" step="0.1" defaultValue="1" />
                    <button value="-10" className="player-button" onClick={handleSkip} >-10s</button>
                    <button value="25" className="player-button" onClick={handleSkip} >+25s</button>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;
