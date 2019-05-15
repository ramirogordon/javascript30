import React, {useEffect} from 'react'
import '../Styles/ClockScreen.scss';

const ClockScreen = () => {
    
    useEffect(() => {
        const secondsHand = document.querySelector('.second-hand');
        const minsHand    = document.querySelector('.min-hand');
        const hoursHand   = document.querySelector('.hour-hand');
        const setDate = () => {
            const now     = new Date();

            const seconds = now.getSeconds();
            const min     = now.getMinutes();
            const hours   = now.getHours();

            const secondsDegrees = ((seconds / 60) * 360)+ 90;
            const minDegrees     = ((min / 60) * 360)+ 90;
            const hoursDegrees   = ((hours / 12) * 360)+ 90;

            secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
            minsHand.style.transform    = `rotate(${minDegrees}deg)`;
            hoursHand.style.transform   = `rotate(${hoursDegrees}deg)`;
        }
        setInterval(setDate, 1000);
    });

    return (
        <div className="clock-screen">
            <div className="clock">
                <div className="clock-face">
                    <div className="hand hour-hand"></div>
                    <div className="hand min-hand"></div>
                    <div className="hand second-hand"></div>
                </div>
            </div>
        </div>
    )
}



export default ClockScreen
