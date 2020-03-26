//4
// 205.44 veces mas pequeño que el sol
// distancia al sol 223.17 millones km

$(document).ready(function () {
    const textureUrl = 'images/planets/mars_1k_color.jpg';
    const texture = new THREE.TextureLoader().load(textureUrl);
    const material = new THREE.MeshPhongMaterial({ map: texture });

    let sunGrup = grups[0];

    var venusGroup = new THREE.Object3D;
    sunGrup.group.add(venusGroup);
    venusGroup.position.set(23, 0, 0);

    let geometry = new THREE.SphereGeometry( 0.09, 32, 32 );

    sphere = new THREE.Mesh(geometry, material);
    venusGroup.add(sphere);

    grups.push({
        'group':venusGroup,
        'figure':sphere,
        'satelites':[]
    });

});
