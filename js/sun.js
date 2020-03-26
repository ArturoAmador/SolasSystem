$(document).ready(function () {

    const textureUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/297733/sunSurfaceMaterial.jpg';
    //const texture = new THREE.TextureLoader().load(textureUrl);

    let GLOWMAP = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/297733/sunSurfaceMaterial.jpg');
    let NOISEMAP = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/297733/sunAtmosphereMaterial.png');
    uniforms = {
        time: { type: "f", value: 1.0 },
        noiseTexture: { type: "t", value: NOISEMAP },
        glowTexture: { type: "t", value: GLOWMAP }
    };

    uniforms.noiseTexture.value.wrapS = uniforms.noiseTexture.value.wrapT = THREE.RepeatWrapping;
    uniforms.glowTexture.value.wrapS = uniforms.glowTexture.value.wrapT = THREE.RepeatWrapping;

    let material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
        transparent:true,
    });



    // Create a group to hold all the objects
    let sunGroup = new THREE.Object3D;

    // Create the cube geometry
    let geometry = new THREE.SphereGeometry( 2, 32, 32 );

    // And put the geometry and material together into a mesh
    sun = new THREE.Mesh(geometry, material);

    // Tilt the mesh toward the viewer
    sun.rotation.x = Math.PI;
    sun.rotation.y = Math.PI / 2;

    grups.push({
        figure:sun,
        group: sunGroup,
        satelites:[]
    });

    // Add the cube mesh to our group
    sunGroup.add( sun );
    sunGroup.position.set(0, 0, 0);

    // Now add the group to our scene
    addScene( sunGroup );

    // add mouse handling so we can rotate the scene
    addMouseHandler(canvas, sunGroup);

});
