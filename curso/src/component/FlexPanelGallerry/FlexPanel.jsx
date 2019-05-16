import React, {useEffect} from 'react';
import './FlexPanel.scss';

const FlexPanel = () => {
    useEffect(() => {
        const panels = document.querySelectorAll('.panel');
        panels.forEach((panel) => {
            panel.addEventListener('click', () => {
                panel.classList.toggle('open');
            })
        });
        panels.forEach((panel) => {
            panel.addEventListener('transitionend', () => {
                panel.classList.toggle('open-active');
            })
        });
    })

    return (
        <div className="panels">
            <div className="panel panel1">
                <p>Hey</p>
                <p>Let's</p>
                <p>Dance</p>
            </div>
            <div className="panel panel2">
                <p>Give</p>
                <p>Take</p>
                <p>Receive</p>
            </div>
            <div className="panel panel3">
                <p>Experience</p>
                <p>It</p>
                <p>Today</p>
            </div>
            <div className="panel panel4">
                <p>Give</p>
                <p>All</p>
                <p>You can</p>
            </div>
            <div className="panel panel5">
                <p>Life</p>
                <p>In</p>
                <p>Motion</p>
            </div>
        </div>
    )
}

export default FlexPanel
