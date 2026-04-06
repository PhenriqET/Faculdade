import * as THREE from 'three';

// Exemplo básico de criação de uma cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper( 100 );
scene.add( axesHelper );


// Crie um cubo simples
const geometry = new THREE.BoxGeometry(1.5,1.5,1.5);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Criando uma Esfera simples
const geometry2 = new THREE.SphereGeometry(1.7);
const material2 = new THREE.MeshBasicMaterial( { color: 0xff69b4 } );
const sphere = new THREE.Mesh( geometry2, material2 );
scene.add( sphere );

// Criando um Plano simples
const geometry3 = new THREE.PlaneGeometry(11.5,10);
const material3 = new THREE.MeshBasicMaterial( { color: 0x00ff00, side: THREE.DoubleSide } );
const plane = new THREE.Mesh( geometry3, material3 );
scene.add( plane );


// Mexendo com o Posicionamento e Rotação dos objetos

// Posição e Rotação do Cubo
cube.position.set(-5,0,0); //(x,y,z), utilizei o set só para ficar mais organizado
cube.rotation.set(45,90,0);

// Posição do Plano
plane.position.set(4.5,2,-6);

// Mexendo com o posicionamento da câmera
camera.position.set(6,5,6);
camera.lookAt(0,0,0);


function animate() {
  requestAnimationFrame(animate);
  /*cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;*/
  renderer.render(scene, camera);
}
animate();
