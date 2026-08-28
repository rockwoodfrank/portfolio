import React, { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';

/*
    
*/
export default function TestCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        // Draw a rectangle
        ctx.fillStyle = "red";
        ctx.fillRect(50, 50, 100, 100);

        // Draw a line
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(300, 200);
        ctx.stroke();

        // Draw a circle
        ctx.beginPath();
        ctx.arc(200, 100, 30, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={800}
            height={600}
        />
    );
}