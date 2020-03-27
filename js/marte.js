//4
// 205.44 veces mas pequeño que el sol
// distancia al sol 223.17 millones km

$(document).ready(function () {
    const textureUrl = 'images/planets/mars_1k_color.jpg';
    const texture = new THREE.TextureLoader().load(textureUrl);
    const material = new THREE.MeshPhongMaterial({ map: texture });

    let sunGrup = grups[0];

    var marsGroup = new THREE.Object3D;
    sunGrup.group.add(marsGroup);
    marsGroup.position.set(18, 0, 0);

    let geometry = new THREE.SphereGeometry( 0.0954, 32, 32 );

    sphere = new THREE.Mesh(geometry, material);
    marsGroup.add(sphere);

    grups.push({
        'group':marsGroup,
        'figure':sphere,
        'satelites':[]
    });

    // satelites
    const moonTextureUrl = 'images/moon_1024.jpg';
    const moonTexture = new THREE.TextureLoader().load(moonTextureUrl);
    const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTexture });
    let sateliteGeometry = new THREE.SphereGeometry( 0.03, 32, 32 );


    let satelite1 = new THREE.Mesh(sateliteGeometry, moonMaterial);
    satelite1.position.set(0.25, 0, 0);
    grups[4].satelites.push(satelite1);          // Marte
    marsGroup.add(satelite1);

    let satelite2 = new THREE.Mesh(sateliteGeometry, moonMaterial);
    satelite2.position.set(-0.25, 0, 0);
    grups[4].satelites.push(satelite2);          // Marte
    marsGroup.add(satelite2);

});
