import React, { useEffect, useRef } from 'react';

const Animate = () => {
    const myBlock = useRef(null);
    useEffect(() => {
        const canvas = myBlock.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext("2d");
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

            var Circle = new circle(x, y, dx, dy, radius);

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
        width: "100%",
        height: "100%"
    }}></canvas>;
};

export default Animate;