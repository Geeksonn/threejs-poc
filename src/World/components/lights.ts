import { DirectionalLight, HemisphereLight } from 'three';

const createLights = () => {
    const mainLight = new DirectionalLight('white', 4);
    mainLight.position.set(10, 10, 10);

    const ambientLight = new HemisphereLight('white', 'darkslategrey', 5);

    return { mainLight, ambientLight };
};

export default createLights;
