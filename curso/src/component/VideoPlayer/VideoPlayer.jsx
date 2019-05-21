import React, {useState, useEffect} from 'react';
import './VideoPlayer.scss';
import video from './CinematicSafeHaven.mp4';

const VideoPlayer = () => {
    const [htmlVideo, setHtmlVideo]         = useState('');
    const [buttonPay, setButtonPay]         = useState('');
    const [progressField, setProgressField] = useState('');
    let flag = false;

    useEffect(() => {
        const videoquery      = document.querySelector('video');
        const playPauseButton = document.querySelector('.toggle');
        const progress        = document.querySelector('.progress');
        const progressFilled  = document.querySelector('.progress-filled');

        progress.addEventListener('click',        (e) => handleScrub(e));
        progress.addEventListener('mousemove',    (e) => flag && handleScrub(e));
        progress.addEventListener('mousedown',    ()  => {flag = true;});
        progress.addEventListener('mouseup',      ()  => {flag = false;});
        videoquery.addEventListener('timeupdate', () => handleProgress());

        const handleProgress = () => {
            const current = (videoquery.currentTime / videoquery.duration) * 100;
            progressFilled.style.flexBasis = `${current}%`
        }

        const handleScrub = (e) => {
            const porcent = (e.offsetX/progress.offsetWidth);
            const por = parseFloat(porcent*videoquery.duration);
            videoquery.currentTime = por;
        }

        setHtmlVideo(videoquery);
        setButtonPay(playPauseButton);
        setProgressField(progress);
    }, []);

    const handlePlay = () => {
        if(htmlVideo.paused) {
            // play video
            htmlVideo.play();
            buttonPay.textContent = '❚❚';
        } else {
            // pause video
            htmlVideo.pause();
            buttonPay.textContent = '►';
        }
    }

    const handleSkip = (e) => {
        htmlVideo.currentTime += parseFloat(e.target.value);
    }

    return (
        <div className="video-player-screen">
            <div className="player">
                <video src={video} onClick={handlePlay} ></video>
                <div className="player-controls">
                    <div className="progress">
                        <div className="progress-filled"></div>
                    </div>
                    <button className="player-button toggle" onClick={handlePlay} title="Toggle Play">►</button>
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
