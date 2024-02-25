import React, { useEffect, useRef } from 'react';

const Line = () => {
    const myBlock = useRef(null);
    useEffect(() => {
        const canvas = myBlock.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext("2d");
        // Line
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "rgb(239, 136, 184)";
        context.moveTo(50, 300);
        context.lineTo(300, 70);
        context.lineTo(350, 200);
        context.lineTo(400, 70);
        context.lineTo(655, 300);
        context.stroke();

    },[])
    return <canvas ref={myBlock} style={{
        width: "100%",
        height: "100%"
    }}></canvas>;
};

export default Line;