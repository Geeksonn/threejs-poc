import { Camera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const createControls = (camera: Camera, canvas: HTMLElement) => {
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.minDistance = 1;
    controls.maxDistance = 15;

    //controls.tick = () => controls.update();

    return controls;
};

export default createControls;
