//7
// 27.45 veces mas pequeño que el sol
// 2.9632 miles de millones km distancia al sol

$(document).ready(function () {
    const textureUrl = 'images/planets/saturnringcolor.jpg';
    const texture = new THREE.TextureLoader().load(textureUrl);
    const material = new THREE.MeshPhongMaterial({ map: texture });

    let sunGrup = grups[0];

    var uranoGroup = new THREE.Object3D;
    sunGrup.group.add(uranoGroup);
    uranoGroup.position.set(45, 0, 0);

    let geometry = new THREE.SphereGeometry( 0.302, 32, 32 );

    sphere = new THREE.Mesh(geometry, material);
    uranoGroup.add(sphere);

    grups.push({
        'group':uranoGroup ,
        'figure':sphere,
        'satelites':[]
    });

    let sateliteGeometry = new THREE.TorusGeometry( 0.5, 0.1, 3, 50, 6.3 );
    let moonMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    let satelite = new THREE.Mesh(sateliteGeometry, moonMaterial);
    satelite.position.set(0, 0, 0);
    grups[7].satelites.push(satelite);          // Urano
    uranoGroup.add(satelite);

});
