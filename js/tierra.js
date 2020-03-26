//3
// 109.29 veces mas pequeño que el sol
// 149.24 millones km distancia al sol


$(document).ready(function () {
    const textureUrl = 'images/planets/earthmap1k.jpg';
    const texture = new THREE.TextureLoader().load(textureUrl);
    const material = new THREE.MeshPhongMaterial({ map: texture });

    let sunGrup = grups[0];        // Sol

    var tierraGroup = new THREE.Object3D;
    sunGrup.group.add(tierraGroup);
    tierraGroup.position.set(14, 0, 0);

    let geometry = new THREE.SphereGeometry( 0.18, 32, 32 );

    sphere = new THREE.Mesh(geometry, material);
    tierraGroup.add(sphere);

    grups.push({
        'group':tierraGroup,
        'figure':sphere,
        'satelites':[]
    });

    // satelites
    const moonTextureUrl = 'images/moon_1024.jpg';
    const moonTexture = new THREE.TextureLoader().load(moonTextureUrl);
    const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTexture });

    let sateliteGeometry = new THREE.SphereGeometry( 0.03, 32, 32 );
    let satelite = new THREE.Mesh(sateliteGeometry, moonMaterial);
    satelite.position.set(0.35, 0, 0);
    grups[3].satelites.push(satelite);          // Tierra
    tierraGroup.add(satelite);

});
