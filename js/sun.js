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


    let sateliteGeometry = new THREE.TorusGeometry( 25, 3.6, 24, 200, 6.3);

      // from THREE.js examples
      function generateSprite() {

        var canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;

        var context = canvas.getContext('2d');
        var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
        gradient.addColorStop(0, 'rgba(193,175,179,1)');
        gradient.addColorStop(0.2, 'rgba(124,116,108,1)');
        gradient.addColorStop(0.4, 'rgba(0,0,16,1)');
        gradient.addColorStop(1, 'rgba(0,0,0,1)');



        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;

    }

    let materialSprite = new THREE.PointCloudMaterial({
        color: 0xffffff,
        size: 0.1,
        transparent: true,
        blending: THREE.AdditiveBlending,
        map: generateSprite()
    });


    let satelite = new THREE.PointCloud(sateliteGeometry, materialSprite);
    satelite.sortParticles = true;
    satelite.position.set(0, 0, 0);
    grups[0].satelites.push(satelite);          // Sol
    sunGroup.add(satelite);




    // Now add the group to our scene
    addScene( sunGroup );

    // add mouse handling so we can rotate the scene
    addMouseHandler(canvas, sunGroup);

});
