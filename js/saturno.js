//6
// 11.95 más pequeño que el sol
// 1.4969 miles de millones km distancia al sol
$(document).ready(function () {
    const textureUrl = 'images/planets/saturnmap.jpg';
    const textureRingUrl = 'images/planets/rings/saturnringcolor.jpg';
    const textureUrlMoon1 = 'images/planets/moons/titanMoon.png';
    const textureUrlMoon2 = 'images/planets/moons/lapetus.jpg';
    const textureUrlMoon3 = 'images/planets/moons/mimasMoon.jpg';

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


    // satelites

    // Titan
    const titanTexture = new THREE.TextureLoader().load(textureUrlMoon1);
    const titanMaterial = new THREE.MeshPhongMaterial({ map: titanTexture });
    let sateliteGeometry1 = new THREE.SphereGeometry( 0.025, 32, 32 );

    // Lapetus 
    const lapetusTexture = new THREE.TextureLoader().load(textureUrlMoon2);
    const lapetusMaterial = new THREE.MeshPhongMaterial({ map: lapetusTexture });
    let sateliteGeometry2 = new THREE.SphereGeometry( 0.07155, 32, 32 );

    // Mimas
    const mimasTexture = new THREE.TextureLoader().load(textureUrlMoon3);
    const mimasMaterial = new THREE.MeshPhongMaterial({ map: mimasTexture });
    let sateliteGeometry3 = new THREE.SphereGeometry( 0.035, 32, 32 );


    let satelite1 = new THREE.Mesh(sateliteGeometry1, titanMaterial);
    satelite1.position.set(1.725, 0, 0);
    grups[6].satelites.push(satelite1);          // Saturno
    saturnGroup.add(satelite1);

    let satelite2 = new THREE.Mesh(sateliteGeometry2, lapetusMaterial);
    satelite2.position.set(-1.725, 0, -1.725);
    grups[6].satelites.push(satelite2);          // Saturno
    saturnGroup.add(satelite2);

    let satelite3 = new THREE.Mesh(sateliteGeometry3, mimasMaterial);
    satelite3.position.set(1.725, 0, 1.725);
    grups[6].satelites.push(satelite3);          // Saturno
    saturnGroup.add(satelite3);

});
