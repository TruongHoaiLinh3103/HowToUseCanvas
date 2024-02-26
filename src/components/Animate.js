import React, { useEffect, useRef} from 'react';

const Animate = () => {
    const myBlock = useRef(null);
    useEffect(() => {

        var move = {
            x: undefined,
            y: undefined
        }

        var maxRadius = 40
        var minRadius = 6

        var colorArray = [
            "red",
            "blue",
            "black",
            "yellow",
            "violet"
        ]

        window.addEventListener("mousemove", function myFunction(event) {
            move.x = event.x;
            move.y = event.y;
        });

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
            this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
            this.draw = () => {
                context.beginPath();
                context.lineWidth = 2;
                // context.strokeStyle = "rgb(175, 136, 239)";
                context.arc(this.x, this.y, this.radius, 2 * Math.PI, 0, true);
                // context.stroke();
                context.fillStyle = this.color
                context.fill()
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

                if(move.x - this.x < 50  && move.x - this.x > -50 && move.y - this.y < 50 && move.y - this.y > -50){
                    if(this.radius < maxRadius){
                        this.radius += 1
                    }
                }else if(this.radius > minRadius){
                    this.radius -= 1
                }
            }
        }

        var circleArray = [];

        for(var i = 0; i < 500; i++){
            let dx = (Math.random() - 0.5) * 2;
            let dy = (Math.random() - 0.5) * 2;
            let radius = 50;
            let x = Math.random() * (window.innerWidth - radius * 2) + radius;
            let y = Math.random() * (window.innerHeight - radius * 2) + radius;

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