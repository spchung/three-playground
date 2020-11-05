import { DirectionalLight } from '../../node_modules/three/build/three.module.js';

function createLights(){
    //color, intensity 
    const light = new DirectionalLight('white', 2)

    //position 
    light.position.set(10,5,20);

    return light;
}

export { createLights };