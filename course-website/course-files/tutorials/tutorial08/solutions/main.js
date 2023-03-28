function setup() {
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function drawShape() {
    const color = document.querySelector('#color').value;
    let size = document.querySelector('#size').value;
    size = Number(size);
    const shape = document.querySelector('#shape').value;
    fill(color);
    if (shape === 'circle') {
        circle(mouseX, mouseY, size);
    } else if (shape === 'square') {
        rectMode(CENTER)
        square(mouseX, mouseY, size);
    } else {
        // https://p5js.org/reference/#/p5/triangle
        triangle(
            mouseX, mouseY - size/2, 
            mouseX - size/1.8, mouseY + size/1.8, 
            mouseX + size/1.8, mouseY + size/1.8
        )
    }
}

function mouseDragged(){
    drawShape()
}

function mouseClicked(){
    drawShape()
}