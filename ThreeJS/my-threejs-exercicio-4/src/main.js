import * as THREE from 'three';

// Exemplo básico de criação de uma cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criando um cone com poucas faces para que vire uma pirâmide
const geometry = new THREE.ConeGeometry( 2, 4, 4 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const cone = new THREE.Mesh(geometry, material );
scene.add( cone );

camera.position.z = 30;

//velocidade para maniuplar o quão rapido ele cresce e diminui
let velocidade = 0.1;

function animate() {
  requestAnimationFrame(animate);
  // Fazendo acrescentar a escala x, y, z do cone a cada chamada da função animate
  cone.scale.x += velocidade;
  cone.scale.y += velocidade;
  cone.scale.z += velocidade;

  /*Fazendo uma verificação só em x para ver se chegou em um tamanho 
  grande para poder diminuir e verificando quando ele diminui para crescer denovo, só é
  necessário mexer em x já que todos estão crescendo juntos, verificar só uma variável
  já é suficiente para fazer com que tenha o resultado que eu quero
  */ 
  if(cone.scale.x >= 5 || cone.scale.x <= 1) {
  velocidade *= -1;
  }
  renderer.render(scene, camera);
}

animate();