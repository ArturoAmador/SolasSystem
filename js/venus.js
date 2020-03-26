//2
// 115.06 mas pequeó que el sol
// Distancia desde el Sol: 108.2 millones km


$(document).ready(function () {
    const textureUrl = 'images/planets/venusmap.jpg';
    const texture = new THREE.TextureLoader().load(textureUrl);
    const material = new THREE.MeshPhongMaterial({ map: texture });

    let data = grups[0];

    var venusGroup = new THREE.Object3D;
    data.group.add(venusGroup);
    venusGroup.position.set(10, 0, 0);

    let geometry = new THREE.SphereGeometry( 0.171, 32, 32 );

    sphere = new THREE.Mesh(geometry, material);
    venusGroup.add(sphere);

    grups.push({
        'group':venusGroup,
        'figure':sphere,
        'satelites':[]
    });

});
