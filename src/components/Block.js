import React, { useEffect, useRef } from 'react';

const Block = () => {
    const myBlock = useRef(null);
    useEffect(() => {
        const canvas = myBlock.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext("2d");
        //Block
        context.fillStyle = "rgb(136, 217, 239)";
        context.fillRect(100, 100, 100, 100);
        context.fillStyle = "rgb(239, 187, 136)";
        context.fillRect(500, 100, 100, 100);
        context.fillStyle = "rgb(136, 136, 239)";
        context.fillRect(300, 200, 100, 100);

    },[])
    return <canvas ref={myBlock} style={{
        width: "100%",
        height: "100%"
    }}></canvas>;
};

export default Block;