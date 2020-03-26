// 8
// 28.28 más pequeño que el sol
// 4.4769 miles de millones km distancia al sol

$(document).ready(function () {
    const textureUrl = 'images/planets/neptunemap.jpg';
    const texture = new THREE.TextureLoader().load(textureUrl);
    const material = new THREE.MeshPhongMaterial({ map: texture });

    let sunGrup = grups[0];

    var neptunoGroup = new THREE.Object3D;
    sunGrup.group.add(neptunoGroup);
    neptunoGroup.position.set(48, 0, 0);

    let geometry = new THREE.SphereGeometry( 0.698, 32, 32 );

    sphere = new THREE.Mesh(geometry, material);
    neptunoGroup.add(sphere);

    grups.push({
        'group':neptunoGroup,
        'figure':sphere,
        'satelites':[]
    });

});
