// 9
// 586.14 veces más pequeño que el sol
// 4.7 billones de kilómetros distancia al sol

$(document).ready(function () {
    const textureUrl = 'images/planets/plutomap1k.jpg';
    const texture = new THREE.TextureLoader().load(textureUrl);
    const material = new THREE.MeshPhongMaterial({ map: texture });

    let sunGrup = grups[0];

    var plutonGroup = new THREE.Object3D;
    sunGrup.group.add(plutonGroup);
    plutonGroup.position.set(50, 0, 0);

    let geometry = new THREE.SphereGeometry( 0.05, 32, 32 );

    sphere = new THREE.Mesh(geometry, material);
    plutonGroup.add(sphere);

    grups.push({
        'group':plutonGroup,
        'figure':sphere,
        'satelites':[]
    });

});
