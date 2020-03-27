let renderer = null,
canvas = null,
scene = null,
camera = null,
sun = null;

let star;

let duration = 5000; // ms
let currentTime = Date.now();

let grups = [];


const textureUrl = "../images/ash_uvgrid01.jpg";
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshPhongMaterial({ map: texture });

// Add fugure to principal scene
function addScene(item) {
    console.log(item);
    scene.add(item)
}


function animate() {
    if (grups.length === 0) { return }
    let now = Date.now();
    let deltat = now - currentTime;
    currentTime = now;
    let fract = deltat / duration;
    let angle = Math.PI * 2 * fract;

    grups.forEach((g, index) => {
        g.group.rotation.y -= angle / 2;
        g.figure.rotation.x += angle;
        g.figure.rotation.z += angle;

        switch(index){
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            default:
                break;
        }


        g.satelites.forEach((s) => {
            // console.log(index); 
            if (index === 0){               // Sol
                s.rotation.x += angle;
            }else if(index === 6){          // Saturno
                s.rotation.x += angle;
            }else
                s.rotation.y += angle;

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
    // scene.background = new THREE.Color( 0.2, 0.2, 0.2 );
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

    const textureUrl = 'images/star.jpg';
    
    let starGeo = new THREE.Geometry();

    for (let i = 0; i < 6000; i++) {
        let star = new THREE.Vector3(
            (Math.random() * 2 - 1) * 1000,
            (Math.random() * 2 - 1) * 1000,
            (Math.random() * 2 - 1) * 1000
        );
        starGeo.vertices.push(star);
    }
    
    let sprite = new THREE.TextureLoader().load(textureUrl);
    let starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.5,
        map: sprite
    });

    star = new THREE.Points(starGeo, starMaterial);
    scene.add(star);
}


