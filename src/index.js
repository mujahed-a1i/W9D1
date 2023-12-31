//entry
import MovingObject from './moving-object.js';

window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', () => {
  const canvasEle = document.getElementById('game-canvas');
  canvasEle.width = 500;
  canvasEle.height = 500;

  const canvasCtx = canvasEle.getContext('2d');

  const mo = new MovingObject({
    pos: [250, 250],
    vel: [100, 100],
    radius: 100,
    color: '#FE8390',
  });

  // window.mo = mo;
  mo.draw(canvasCtx);
  mo.move(canvasCtx);
});
