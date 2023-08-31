import { MeshStandardMaterial, BoxGeometry, TextureLoader, Mesh } from "three"

const createWall = () => {
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load('/assets/brick-wall.png');

    const material = new MeshStandardMaterial({ map: texture });
    const geometry = new BoxGeometry(0.2, 3, 5);
    const wall = new Mesh(geometry, material);
    wall.rotateY(Math.PI / 2);
    wall.position.setZ(-0.08)

    return wall;
}

export default createWall;