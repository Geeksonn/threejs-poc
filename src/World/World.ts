import { Object3D, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import createCamera from './components/camera';
import createScene from './components/scene';
import createRenderer from './system/renderer';
import createLights from './components/lights';
import createControls from './system/controls';
import Resizer from './system/Resizer';
import loadVeranda from './components/elements/veranda';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Loop from './system/Loop';
import createWall from './components/elements/wall';

let camera: PerspectiveCamera, renderer: WebGLRenderer, scene: Scene, controls: OrbitControls, loop: Loop;

type ToggableElement = {
    name: string;
    element: Object3D;
    state: 'visible' | 'hidden';
};

class World {
    private meshesTogglable: ToggableElement[];

    constructor(container: HTMLElement) {
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        controls = createControls(camera, renderer.domElement);
        loop = new Loop(camera, scene, renderer, controls);
        this.meshesTogglable = [];

        container.append(renderer.domElement);

        const { mainLight, ambientLight } = createLights();
        const wall = createWall();

        //loop.updatables.push(controls);
        scene.add(mainLight, ambientLight, wall);

        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize = () => this.render();
    }

    async init() {
        const veranda = await loadVeranda();
        controls.target.copy(veranda.position);
        this.meshesTogglable.push({ name: 'veranda', element: veranda, state: 'hidden' });

        //scene.add(veranda);
    }

    _isTogglableElement(name: string): number {
        const found = this.meshesTogglable.findIndex((elt) => elt.name === name);

        return found;
    }

    toggleElement(name: string) {
        const index = this._isTogglableElement(name);
        if (index < 0) {
            console.error('The element ' + name + ' is not a toggable element !');
            return;
        }

        const elt = this.meshesTogglable[index];
        
        if (elt.state === 'hidden') {
            scene.add(elt.element);
            this.meshesTogglable[index].state = 'visible';
        } else {
            scene.remove(elt.element);
            this.meshesTogglable[index].state = 'hidden';
        }
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }

    render() {
        renderer.render(scene, camera);
    }
}

export default World;
