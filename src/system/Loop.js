import { Clock } from '../../node_modules/three/build/three.module.js';

const clock = new Clock();

class Loop{
    constructor(camera, scene, renderer){
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updateables = [];
    }

    start(){
        this.renderer.setAnimationLoop(()=>{
            this.tick()

            this.renderer.render(this.scene, this.camera);
        });
    }

    stop(){
        this.renderer.setAnimationLoop(null);
    }

    // updateables stores list of objects to be updated frame by frame
    tick(){
        const delta = clock.getDelta();
        for( const obj of this.updateables ){
            obj.tick(delta);
        }
    }
}

export { Loop };