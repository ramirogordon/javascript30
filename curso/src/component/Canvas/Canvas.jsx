import React, { useEffect } from 'react';
import './Canvas.scss';

const Canvas = () => {
    useEffect(() => {
        const canvas = document.querySelector('#draw');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#bada55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth= 50;

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        const draw = (e) => {
            if(!isDrawing) return;
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            [lastX, lastY] = [e.offsetX, e.offsetY]
        }

        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mousedown', (e) => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        });
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);
    })

    return (
        <div className="canvas">
            <canvas id="draw"></canvas>
        </div>
    )
}

export default Canvas
