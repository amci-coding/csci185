const imgOn = "images/pic_bulbon.gif";
const imgOff = "images/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

function turnOnOff() {
    // console.log(elem.src, imgOn, elem.src === imgOn);
    // includes checks if the string is contained within another string:
    if (elem.src.includes(imgOn)) {
        elem.src = imgOff;
    } else {
        elem.src = imgOn;
    }
};
