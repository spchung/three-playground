import { Scene, Color } from '../../node_modules/three/build/three.module.js';

function createScene(color){
   const scene = new Scene();
   scene.background = new Color(color);

   return scene
}

export { createScene };