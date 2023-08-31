import World from "./World/World";


async function main() {
    // Get a reference to the container element
    const container = (document.querySelector('#scene-container') as HTMLElement);

    // create a new world
    const world = new World(container);
    await world.init();

    // start the animation loop
    //world.start();

    world.start();

    const button = document.getElementById('toggle_veranda');
    if (button) button.addEventListener('click', () => world.toggleElement('veranda'));
}

main().catch((err) => console.error(err));
