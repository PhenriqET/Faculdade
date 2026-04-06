import * as THREE from 'three';

// Exemplo básico de criação de uma cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criando uma Esfera simples
const geometry = new THREE.SphereGeometry(0.5);
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );



// Crie o plano esquerdo
const geometry2 = new THREE.PlaneGeometry(1,3);
const material2 = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
const planeE = new THREE.Mesh( geometry2, material2 );
scene.add( planeE );

planeE.position.x = -10.5;

// Crie o plano direito
const geometry3 = new THREE.PlaneGeometry(1,3);
const material3 = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
const planeD = new THREE.Mesh( geometry3, material3 );
scene.add( planeD );

planeD.position.x = 10.5;


camera.position.z = 10;

let velocidade = 0.1;

function animate() {
  requestAnimationFrame(animate);
  sphere.position.x += velocidade;
  if( sphere.position.x >= 9 || sphere.position.x <= -9){
    velocidade = velocidade * -1; //fazendo a inversão da direção quando chega em um dos planes
  }
  renderer.render(scene, camera);
}

animate();