import React, {useState} from 'react'
import H1 from './Styled/H1';
import WrapperShadowMouse from './Styled/WrapperShadowMouse';

const ShadowMouse = () => {
    const walk = 100;
    let main, h1;
    const shadow = (e) => {
        const self = e.target
        if(self.localName === 'main'){
            main = self;
            h1 = self.firstChild;
        } else {
            main = self.parentElement;
            h1 = self;
        }
        const {offsetWidth: width, offsetHeight: height } = main;
        let {screenX: x, screenY: y} = e;

        if(this !== main) {
            x = x + main.offsetLeft;
            y = y + main.offsetTop;
        }
        
        const xWalk = (x / width * walk) - (walk / 2);
        const yWalk = (y / height * walk) - (walk / 2);
        
        h1.style.textShadow = `
            ${xWalk}px ${yWalk}px 0 red,
            ${yWalk}px ${xWalk}px 0 blue
        `;
    }
    return (
        <WrapperShadowMouse onMouseMove={shadow}>
            <H1 onMouseMove={shadow}>🔥 Gordon</H1>
        </WrapperShadowMouse>
    )
}

export default ShadowMouse
