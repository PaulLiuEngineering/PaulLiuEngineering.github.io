var camera, scene, renderer;
var geometry, material, mesh;
var controls, objLoader;



function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	geometry = new THREE.BoxGeometry( 1, 1, 1);
	material = new THREE.MeshBasicMaterial({color:0x00ff00});

	camera.position.z = 200;

	// controls = new THREE.OrbitControls(camera, renderer.domElement);
	// controls.enableDamping = true;
	// controls.campingFactor = 0.25;
	// controls.enableZoom = true;

	objLoader = new THREE.OBJLoader();
	objLoader.load('new_speaker_mount.obj', function(object){
		object.position.y -=60;
		scene.add(object);
	});
	

	
	// scene.add( mesh );
	
	

}

function animate() {

	requestAnimationFrame( animate );

	// mesh.rotation.x += 0.01;
	// mesh.rotation.y += 0.02;

	renderer.render( scene, camera );

}

$(document).ready(function() {
    init();
    animate();
});