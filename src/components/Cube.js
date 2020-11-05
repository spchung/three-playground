import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader
} from '../../node_modules/three/build/three.module.js';

const rotationRadian = MathUtils.degToRad(30);

function createTexture(){
  // instantiate loader 
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(
    '../../assets/harshbricks-normal.png'
  );
  
  const material = new MeshStandardMaterial({
    map: texture,
  });
  
  return material 
}

function createCube(){
    const geometry = new BoxBufferGeometry(2,2,2);
    
    // const material = new MeshBasicMaterial();
    const material = createTexture();

    const cube = new Mesh(geometry, material);
    cube.position.set(0,0,-10)
    //add tick method for updating in between frames 
    cube.tick = (delta) => {
      cube.rotation.x += rotationRadian*delta;
      cube.rotation.y += rotationRadian*delta;
      cube.rotation.z += rotationRadian*delta;
    }
  
    return cube
}

export { createCube };