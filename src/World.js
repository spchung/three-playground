import { createCamera } from './components/Camera.js';
import { createScene } from './components/Scene.js';
import { createCube } from './components/Cube.js';
import { createLights } from './components/DirectionalLight.js';
import { createRenderer } from './system/Renderer.js';
import { Resizer } from './system/Resizer.js';
import { Loop } from './system/Loop.js';
import { createControls } from './system/Controls.js';

// rotations  
import { Euler, Quaternion ,MathUtils } from '../node_modules/three/build/three.module.js';

let camera;
let scene;
let renderer;
let loop;

class World{
    constructor(container){
        var aspect = container.clientWidth / container.clientHeight;

        camera = createCamera(aspect);
        scene = createScene('skyblue');
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        const controls = createControls(camera, renderer.domElement);

        const cube = createCube();
        loop.updateables.push(cube);
        
        //set controls target on cube 
        controls.target.copy(cube.position);
        // disable camera panning 
        controls.enablePan = false;
        // damping to enable slower rotation movement 
        controls.enableDamping = true;
        // push controls into updatables to call controls.update()
        controls.tick = () => controls.update();
        loop.updateables.push(controls)

        const light = createLights();

        scene.add(cube);
        scene.add(light);

        var resizer = new Resizer(container, camera, renderer)
        
        // // why this not work 
        // resizer.onResize = function(){
        //     const b = 'bbb'
        //     const a = () => {
        //         return this.b
        //     }
        //     this.render();
        // } 
        // error: this.render is not a function 
        // possible -> `this` scope is not passed into function 

        // resizer.onResize = this.render2
        
    }
    // render2(){
    //         this.render();
    // }

    render(){
        // console.log("rendering");
        renderer.render(scene, camera);
    }

    start(){
        loop.start();
    }

    stop(){
        loop.stop();
    }
}
export { World };