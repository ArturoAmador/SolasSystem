//6
// 11.95 más pequeño que el sol
// 1.4969 miles de millones km distancia al sol
$(document).ready(function () {
    const textureUrl = 'images/planets/saturnmap.jpg';
    const textureRingUrl = 'images/planets/rings/saturnringcolor.jpg';

    // Saturn Texture
    const texture = new THREE.TextureLoader().load(textureUrl);
    const material = new THREE.MeshPhongMaterial({ map: texture });

    // Saturn Rings Texture
    const textureRing  = new THREE.TextureLoader().load(textureRingUrl);
    const matieralRing = new THREE.MeshPhongMaterial({ map : textureRing});


    let sunGrup = grups[0];

    var saturnGroup = new THREE.Object3D;
    sunGrup.group.add(saturnGroup);
    saturnGroup.position.set(40, 0, 0);

    let geometry = new THREE.SphereGeometry( 1.7, 32, 32 );

    sphere = new THREE.Mesh(geometry, material);
    saturnGroup.add(sphere);

    grups.push({
        'group':saturnGroup ,
        'figure':sphere,
        'satelites':[]
    });

    let sateliteGeometry = new THREE.TorusGeometry( 2.3, 0.09, 2, 50, 6.3 );

    let satelite = new THREE.Mesh(sateliteGeometry, matieralRing);
    satelite.position.set(0, 0, 0);
    grups[6].satelites.push(satelite);          // Saturno
    saturnGroup.add(satelite);

});
