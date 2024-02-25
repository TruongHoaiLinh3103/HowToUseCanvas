import React, { useEffect, useRef } from 'react';

const Circle = () => {
    const myBlock = useRef(null);
    useEffect(() => {
        const canvas = myBlock.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext("2d");
        // Arc/circle
        for(var i = 0; i < 50; i++){
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
            context.beginPath();
            context.lineWidth = 1;
            context.strokeStyle = "rgb(175, 136, 239)";
            context.arc(x, y, 50, 2 * Math.PI, 0);
            context.stroke();
        }
    },[])
    return <canvas ref={myBlock} style={{
        width: "100%",
        height: "100%"
    }}></canvas>;
};

export default Circle;