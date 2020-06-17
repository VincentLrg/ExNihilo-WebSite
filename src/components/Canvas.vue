<template>
    <div class="canvas" id="p5Canvas"></div>
</template>

<script>
import P5 from 'p5'

export default {
    name: "Canvas",
    mounted () {
        const p5js = p5 => {
            const nlines = 50;
            const res = 80; // number of segments for each line
            const factor = 0.008; // noise factor
            const speed = 0.005;
            let points = [];

            let W = p5.windowWidth, H = p5.windowHeight
            const xstep = W / nlines * 2;
            const ystep = H / res * 3

            p5.setup = () => {
                const canvas = p5.createCanvas(W, H);
                canvas.parent('p5Canvas')
                p5.strokeWeight(5);
                p5.smooth(8);
                p5.stroke(255);

                for (let x = 0; x < nlines; x++) {
                    for (let y = 0; y < res; y++) {
                        points.push([])
                    }
                }
            }
            p5.draw = () => {
                p5.background("#000");
  
                let i = 0;
                
                for (let x = 0; x < nlines; x++) {
                    for (let y = 0; y < res; y++) {
                        var n = p5.noise(x * factor + p5.frameCount * speed, (x+y) * factor + p5.frameCount * speed);
                        points[i] = p5.createVector(x * xstep * n, y * ystep);
                        i += 1;
                    }
                }

                for (let id = 0; id < points.length - 1; id++) {
                    if (id%res != (res-1)) { 
                        if (id%res > 0 && id%res < res) { // upper and lower edges
                            if (id/res > 1 && id/res < nlines) { // left and right edges 
                        
                                p5.line(points[id-1].y, points[id-1].x, points[id].y, points[id].x);
                            }
                        }
                    }
                }
            }
            p5.mouseWheel = (evt) => {
                this.$emit('wheel', evt)
            }
            p5.windowResized = () => {
                W = p5.windowWidth, H = p5.windowHeight
                p5.resizeCanvas(W, H);
            }
        }
        new P5(p5js)
    }
}
</script>


<style lang="scss">
    @import '~@/assets/scss/canvas'
</style>