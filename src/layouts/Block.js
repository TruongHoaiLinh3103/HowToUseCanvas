import React, { useEffect, useRef } from 'react';

const Block = () => {
    const myBlock = useRef(null);
    useEffect(() => {
        const canvas = myBlock.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext("2d");

        //Block
        // context.fillStyle = "rgb(136, 217, 239)";
        // context.fillRect(100, 100, 100, 100);
        // context.fillStyle = "rgb(239, 187, 136)";
        // context.fillRect(500, 100, 100, 100);
        // context.fillStyle = "rgb(136, 136, 239)";
        // context.fillRect(300, 200, 100, 100);

        //Line
        // context.beginPath();
        // context.lineWidth = 1;
        // context.strokeStyle = "rgb(239, 136, 184)";
        // context.moveTo(50, 300);
        // context.lineTo(300, 70);
        // context.lineTo(350, 200);
        // context.lineTo(400, 70);
        // context.lineTo(655, 300);
        // context.stroke();

        //Arc/circle
        // for(var i = 0; i < 50; i++){
        //     var x = Math.random() * window.innerWidth;
        //     var y = Math.random() * window.innerHeight;
        //     context.beginPath();
        //     context.lineWidth = 1;
        //     context.strokeStyle = "rgb(175, 136, 239)";
        //     context.arc(x, y, 50, 2 * Math.PI, 0);
        //     context.stroke();
        // }

        //Animate
        function circle(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.draw = () => {
                context.beginPath();
                context.lineWidth = 2;
                context.strokeStyle = "rgb(175, 136, 239)";
                context.arc(this.x, this.y, this.radius, 2 * Math.PI, 0, true);
                context.stroke();
            }
            this.circleAnimate = () => {
                this.draw();
                if((this.x + radius) > window.innerWidth || (this.x - radius) < 0){
                    this.dx = -this.dx
                }
                if((this.y + this.radius > window.innerHeight) || (this.y - this.radius) < 0){
                    this.dy = -this.dy
                }
                this.x += this.dx;
                this.y += this.dy;
            }
        }

        var circleArray = [];

        for(var i = 0; i < 500; i++){
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let dx = (Math.random() - 0.5) * 8;
            let dy = (Math.random() - 0.5) * 8;
            let radius = 50;

            var Circle = new circle(700, 350, dx, dy, radius);

            circleArray.push(Circle)
        }

        const animate = () => {
            requestAnimationFrame(animate);
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for(var i = 0; i < circleArray.length; i++){
                circleArray[i].circleAnimate();
            }
        }

        animate();

    },[])
    return <canvas ref={myBlock} style={{
        width: "500px",
        height: "500px"
    }}></canvas>;
};

export default Block;