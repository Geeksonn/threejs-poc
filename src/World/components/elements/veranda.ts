import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import setupModel from './setupModel';

const loadVeranda = async () => {
    const loader = new GLTFLoader();

    const verandaData = await loader.loadAsync('/assets/veranda.glb');
    const veranda = setupModel(verandaData);

    return veranda;
};

export default loadVeranda;
