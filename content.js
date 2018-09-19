chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      let WebTag = new p5(tag);
      sendResponse({message: "web tag activated"});
  });

let weight = 13;
let fired = false;

document.onkeydown = (event) => {
  if (event.code == 'BracketRight' && !fired) {
    weight += 2;
  } else if (event.code == 'BracketLeft') {
    weight -= 2;
  }
  fired = true;
};

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
    tag.stroke(255, 204, 0);
    tag.strokeWeight(weight);
    if(tag.mouseIsPressed){
      tag.line(tag.mouseX, tag.mouseY, tag.pmouseX, tag.pmouseY)
    }
  }
}
