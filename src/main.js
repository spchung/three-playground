import { createCamera } from './components/Camera.js';
import { createScene } from './components/Scene.js';
import { createRenderer } from './system/Renderer.js';
import { Resizer } from './system/Resizer.js';
import { World } from './World.js';



function main() { 
  const container = document.querySelector('#canvas-holder');

  // console.log(container)
  const world = new World(container);

  world.start();
}

main();