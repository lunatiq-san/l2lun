// import * as THREE from 'three';
// import getRefs from '../get-refs';

// const refs = getRefs();

// // width and height <canvas> element equals page
// // let WIDTH = window.innerWidth;
// let WIDTH = 640;
// // let HEIGHT = window.innerHeight;
// let HEIGHT = 360;

// // That place where all is happening
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xaaaaaa);
// const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);

// // for painting scene in browser
// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(WIDTH, HEIGHT);
// // color BG
// renderer.setClearColor(0x000000, 0);
// // pin DOM element with page
// refs.jsThreeMenu.appendChild(renderer.domElement);
// // document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(10, 10, 10);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 15;
// // Added object in scene
// scene.add(camera);

// // var dodecahedronGeometry = new THREE.DodecahedronBufferGeometry(15, 0);
// // var lambertMaterial = new THREE.MeshLambertMaterial({ color: 0x0095dd });
// // var dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
// // dodecahedron.position.x = 25;
// // scene.add(dodecahedron);

// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.005;
//   cube.rotation.y += 0.005;

//   renderer.render(scene, camera);
// }

// animate();
