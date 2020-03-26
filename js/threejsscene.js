let renderer = null,
canvas = null,
scene = null,
camera = null,
cube = null,
sphere = null,
cone = null,
sphereGroup = null;

let duration = 5000; // ms
let currentTime = Date.now();

let grups = [];
let figures = ['cube', 'torus', 'cone', 'knot', 'octahedron', 'plane'];

const textureUrl = "../images/ash_uvgrid01.jpg";
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshPhongMaterial({ map: texture });


// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Add fugure to principal scene
function addScene(item) {
    console.log(item);
    scene.add(item)
}

function buildFigureGeometry(satelite) {
    let figure = figures[getRandomInt(0, figures.length)];
    if (figure === 'cube'){
        if (satelite){
            return  new THREE.CubeGeometry(0.5, 0.5, 0.5);
        }
        else {
            return  new THREE.CubeGeometry(2, 2, 2);
        }
    }
    else if (figure === 'torus'){
        if (satelite){
            return new THREE.TorusGeometry( 1, 0.1, 4, 100 );
        }
        else {
            return new THREE.TorusGeometry( 3, 0.8, 20, 100 );
        }
    }
    else if (figure === 'cone'){
        if (satelite){
            return new THREE.CylinderGeometry(0, .333, .444, 20, 5);
        }
        else {
            return new THREE.CylinderGeometry(4, 1.4, 1., 20, 5);
        }
    }
    else if(figure === 'knot'){
        if (satelite){
            return new THREE.TorusKnotBufferGeometry( 1, 0.1, 100, 16 );
        }else {
            return new THREE.TorusKnotBufferGeometry( 3, 0.9, 100, 16 );
        }
    }
    else if (figure === 'octahedron'){
        if (satelite){
            return new THREE.OctahedronBufferGeometry(2, 0);
        }else {
            return new THREE.OctahedronBufferGeometry(4, 0);
        }
    }
    else if (figure === 'plane'){
        if (satelite){
            return new THREE.PlaneBufferGeometry( 4, 4, 32 );
        }else {
            return new THREE.PlaneBufferGeometry( 8, 8, 32 );
        }
    }

}

//
function add() {

    if (grups.length === 0){
        // Create a group to hold all the objects
        let cubeGroup = new THREE.Object3D;

        // Create the cube geometry
        let geometry = buildFigureGeometry();

        // And put the geometry and material together into a mesh
        cube = new THREE.Mesh(geometry, material);

        // Tilt the mesh toward the viewer
        cube.rotation.x = Math.PI / 5;
        cube.rotation.y = Math.PI / 5;

        grups.push({
            figure:cube,
            group: cubeGroup,
            satelites:[]
        });

        // Add the cube mesh to our group
        cubeGroup.add( cube );

        cubeGroup.position.set(0, 0, 0);


        // Now add the group to our scene
        addScene( cubeGroup );

        // add mouse handling so we can rotate the scene
        addMouseHandler(canvas, cubeGroup);
    }else{

        let data = grups[(grups.length - 1)];

        // Create a group for the sphere
        sphereGroup = new THREE.Object3D;
        data.group.add(sphereGroup);

        // Move the sphere group up and back from the cube
        sphereGroup.position.set(getRandomArbitrary(-20, 20), getRandomArbitrary(-10, 10), -2);

        // Create the sphere geometry
        geometry = buildFigureGeometry();

        // And put the geometry and material together into a mesh
        sphere = new THREE.Mesh(geometry, material);

        // Add the sphere mesh to our group
            sphereGroup.add( sphere );

        grups.push({
            'group':sphereGroup,
            'figure':sphere,
            'satelites':[]
        });

    }

}

function satelite() {
    console.log('satelite');

    // Create the cone geometry
    geometry = buildFigureGeometry(true);

    // And put the geometry and material together into a mesh
    let satelite = new THREE.Mesh(geometry, material);
    let grup = grups[getRandomInt(0,grups.length)];

    // Move the cone up and out from the sphere
    satelite.position.set(getRandomArbitrary(-2, 2), getRandomArbitrary(-2, 2), getRandomArbitrary(-2, 2));

    let group = grup.group;
    grup.satelites.push(satelite);
    // Add the cone mesh to our group
    group.add( satelite );


}

function remove() {
    console.log('clear');
    $("#slider").slider({min: 0.1, max: 2, value: 1, step: 0.01, animate: false});
    scene.children.pop();
    grups = []

}

function animate() {
    if (grups.length === 0) { return }
    let now = Date.now();
    let deltat = now - currentTime;
    currentTime = now;
    let fract = deltat / duration;
    let angle = Math.PI * 2 * fract;

    grups.forEach((g) => {
        g.group.rotation.y -= angle / 2;
        g.figure.rotation.x += angle;
        g.figure.rotation.z += angle;
        g.satelites.forEach(s => {
            s.rotation.z += angle;
        });
    })
}

function run() {
    requestAnimationFrame(function() { run(); });

    // Render the scene
    renderer.render( scene, camera );
    animate();
}

function createScene(canvasDom) {
    canvas = canvasDom;
    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );

    // Set the viewport size
    renderer.setSize(canvas.width, canvas.height);

    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Set the background color
    scene.background = new THREE.Color( 0.2, 0.2, 0.2 );
    // scene.background = new THREE.Color( "rgb(100, 100, 100)" );

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    camera.position.z = 10;
    scene.add(camera);

    // Add a directional light to show off the objects
    let light = new THREE.DirectionalLight( 0xffffff, 1.0);
    // let light = new THREE.DirectionalLight( "rgb(255, 255, 100)", 1.5);

    // Position the light out from the scene, pointing at the origin
    light.position.set(-.5, .2, 1);
    light.target.position.set(0,-2,0);
    scene.add(light);

}


