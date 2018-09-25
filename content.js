chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      let WebTag = new p5(tag);
      sendResponse({message: "web tag activated"});
  });

let weight = 13;
let rgbValues = [0, 0, 0];
let fired = false;

document.onkeydown = (event) => {
  if (!fired) {
    switch (event.code) {
      case 'BracketRight':
        weight += 2;
        break;
      case 'BracketLeft':
        weight -= 2;
        break;
      case 'Digit1':
        rgbValues = [244, 67, 54];
        break;
      case 'Digit2':
        rgbValues = [255, 152, 0];
        break;
      case 'Digit3':
        rgbValues = [255, 235, 59];
        break;
      case 'Digit4':
        rgbValues = [76, 175, 80];
        break;
      case 'Digit5':
        rgbValues = [0, 188, 212];
        break;
      case 'Digit6':
        rgbValues = [33, 150, 243];
        break;
      case 'Digit7':
        rgbValues = [63, 81, 181];
        break;
      case 'Digit8':
        rgbValues = [156, 39, 176];
        break;
      case 'Digit9':
        rgbValues = [0, 0, 0];
        break;
      case 'Digit0':
        rgbValues = [255, 255, 255];
        break;
    }
    fired = true;
  }
}

document.onkeyup = (event) => {
  fired = false;
};


let tag = function(tag) {
  tag.setup = function() {
    document.body.style.userSelect = 'none';
    document.body.ondragstart = function() { return false; };
    const canvasHeight = document.body.clientHeight;
    const canvasWidth = document.body.clientWidth;
    const canvas = tag.createCanvas(canvasWidth, canvasHeight);
    canvas.style('pointer-events', 'none');
    canvas.position(0, 0);
    tag.clear();
  }

  tag.draw = () => {
    tag.stroke(rgbValues[0], rgbValues[1], rgbValues[2]);
    tag.strokeWeight(weight);
    if(tag.mouseIsPressed){
      tag.line(tag.mouseX, tag.mouseY, tag.pmouseX, tag.pmouseY)
    }
  }
}
