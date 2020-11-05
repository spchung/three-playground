import { PerspectiveCamera } from '../../node_modules/three/build/three.module.js';

function createCamera(aspectRatio, fov=35, near=0.1, far=100){
    const camera = new PerspectiveCamera(
        fov, 
        aspectRatio ,
        near, 
        far   
    )
    camera.position.set(0,0,10)

    return camera;
}

export { createCamera };