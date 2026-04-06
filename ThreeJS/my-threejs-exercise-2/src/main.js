import * as THREE from 'three';

// Exemplo básico de criação de uma cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crie um cubo simples
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 10;
camera.position.x = 1;

/* Para fazer o movimento de translação foi necessário utilizar cosseno
e seno para poder mexer na posição do cubo, utilizando Math.cos(angulo)
e Math.sin(angulo), onde angulo é o valor que mudará o tempo todo
para poder fazer com que haja a mudança de posição fazendo o movimento
de translação, e o valor sendo multiplicado por Math é o raio do movimento
*/
let angulo = 0;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  angulo += 0.05;
  cube.position.x = 5 * Math.cos(angulo);
  cube.position.y = 5 * Math.sin(angulo);
  renderer.render(scene, camera);
}

animate();