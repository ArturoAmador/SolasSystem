//1
// 285 veces más pequeño que el sol
// distancia del sol 57.91 millones km

$(document).ready(function () {
    const textureUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/297733/sunSurfaceMaterial.jpg';
    const texture = new THREE.TextureLoader().load(textureUrl);

    let data = grups[0];

    var mercurioGroup = new THREE.Object3D;
    data.group.add(mercurioGroup);
    mercurioGroup.position.set(5, 0, 0);

    let geometry = new THREE.SphereGeometry( 0.07, 32, 32 );

    sphere = new THREE.Mesh(geometry, material);
    mercurioGroup.add(sphere);

    grups.push({
        'group':mercurioGroup,
        'figure':sphere,
        'satelites':[]
    });

});
