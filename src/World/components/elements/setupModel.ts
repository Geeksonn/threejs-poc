import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

const setupModel = (data: GLTF) => {
    const model = data.scene.children[0];

    return model;
};

export default setupModel;
