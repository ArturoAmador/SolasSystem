//5
// 9.96 veces mas que pequeño que el sol
// 777.78 millones km distancia al sol


$(document).ready(function () {
    const textureUrl = 'images/planets/jupitermap.jpg';
    const textureUrlMoon1 = 'images/planets/moons/ioMoon.jpg';
    const textureUrlMoon2 = 'images/planets/moons/ganymedeMoon.jpg';
    const textureUrlMoon3 = 'images/planets/moons/europeMoon.jpg';
    const textureUrlMoon4 = 'images/planets/moons/callistoMoon.jpg';
    const texture = new THREE.TextureLoader().load(textureUrl);
    const material = new THREE.MeshPhongMaterial({ map: texture });

    let data = grups[0];

    var jupiterGroup = new THREE.Object3D;
    data.group.add(jupiterGroup);
    jupiterGroup.position.set(35, 0, 0);

    let geometry = new THREE.SphereGeometry( 2.01, 32, 32 );

    sphere = new THREE.Mesh(geometry, material);
    jupiterGroup.add(sphere);

    grups.push({
        'group':jupiterGroup,
        'figure':sphere,
        'satelites':[]
    });


    // satelites

    // Io 
    const ioTexture = new THREE.TextureLoader().load(textureUrlMoon1);
    const ioMaterial = new THREE.MeshPhongMaterial({ map: ioTexture });
    let sateliteGeometry1 = new THREE.SphereGeometry( 0.025, 32, 32 );

    // Ganymede 
    const ganymedeTexture = new THREE.TextureLoader().load(textureUrlMoon2);
    const ganymedeMaterial = new THREE.MeshPhongMaterial({ map: ganymedeTexture });
    let sateliteGeometry2 = new THREE.SphereGeometry( 0.07155, 32, 32 );

    // Europe
    const europeTexture = new THREE.TextureLoader().load(textureUrlMoon3);
    const europeMaterial = new THREE.MeshPhongMaterial({ map: europeTexture });
    let sateliteGeometry3 = new THREE.SphereGeometry( 0.035, 32, 32 );

    // Calliston
    const callistonTexture = new THREE.TextureLoader().load(textureUrlMoon4);
    const callistonMaterial = new THREE.MeshPhongMaterial({ map: callistonTexture });
    let sateliteGeometry4 = new THREE.SphereGeometry( 0.045, 32, 32 );


    let satelite1 = new THREE.Mesh(sateliteGeometry1, ioMaterial);
    satelite1.position.set(2.26, 0, 0);
    grups[5].satelites.push(satelite1);          // Jupiter
    jupiterGroup.add(satelite1);

    let satelite2 = new THREE.Mesh(sateliteGeometry2, ganymedeMaterial);
    satelite2.position.set(-2.26, 0, -2.26);
    grups[5].satelites.push(satelite2);          // Jupiter
    jupiterGroup.add(satelite2);

    let satelite3 = new THREE.Mesh(sateliteGeometry3, europeMaterial);
    satelite3.position.set(2.26, 0, 2.26);
    grups[5].satelites.push(satelite3);          // Jupiter
    jupiterGroup.add(satelite3);

    let satelite4 = new THREE.Mesh(sateliteGeometry4, callistonMaterial);
    satelite4.position.set(-2.26, 0, 0);
    grups[5].satelites.push(satelite4);          // Jupiter
    jupiterGroup.add(satelite4);

});
