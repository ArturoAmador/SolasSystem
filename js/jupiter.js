//5
// 9.96 veces mas que pequeño que el sol
// 777.78 millones km distancia al sol


$(document).ready(function () {
    const textureUrl = 'images/planets/jupitermap.jpg';
    const texture = new THREE.TextureLoader().load(textureUrl);
    const material = new THREE.MeshPhongMaterial({ map: texture });

    let data = grups[0];

    var mercurioGroup = new THREE.Object3D;
    data.group.add(mercurioGroup);
    mercurioGroup.position.set(35, 0, 0);

    let geometry = new THREE.SphereGeometry( 0.4, 32, 32 );

    sphere = new THREE.Mesh(geometry, material);
    mercurioGroup.add(sphere);

    grups.push({
        'group':mercurioGroup,
        'figure':sphere,
        'satelites':[]
    });

});
