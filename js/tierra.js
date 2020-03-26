//3
// 109.29 veces mas pequeño que el sol
// 149.24 millones km distancia al sol


$(document).ready(function () {
    const textureUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/297733/sunSurfaceMaterial.jpg';
    const texture = new THREE.TextureLoader().load(textureUrl);

    let data = grups[0];

    var tierraGroup = new THREE.Object3D;
    data.group.add(tierraGroup);
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
    let sateliteGeometry = new THREE.SphereGeometry( 0.03, 32, 32 );
    let moonMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    let satelite = new THREE.Mesh(sateliteGeometry, moonMaterial);
    satelite.position.set(0.35, 0, 0);
    grups[3].satelites.push(satelite);
    tierraGroup.add(satelite);

});
