import { PerspectiveCamera } from 'three';

const createCamera = () => {
    const camera = new PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(-2.5, 1.5, 6.5);
    

    return camera;
};

export default createCamera;
