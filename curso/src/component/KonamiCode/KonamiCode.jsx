import React from 'react';
import './KonamiCode.scss';

const KonamiCode = () => {
    const pressed = [];
    const secretCode = 'gordon';
    // console.log(secretCode.length);
    window.addEventListener('keyup', (e) => {
        pressed.push(e.key);
        pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
        console.log(pressed);
        if(pressed.join('').includes(secretCode)) {
            console.log('master pies');
        }
    });
    return (
        <div>
            <h1>Welcome to Konami Code</h1>
        </div>
    )
}

export default KonamiCode;
