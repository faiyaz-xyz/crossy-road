import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { DirectionalLight } from "./components/DirectionalLight";
import { player } from "./components/Player";
import { map, intializeMap } from "./components/Map";
import { animateVehicles } from "./animateVehicles";

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
scene.add(dirLight);

const camera = Camera();
scene.add(camera);

initializeGame();

function initializeGame() {
  intializeMap();
}

const renderer = Renderer();
renderer.render(scene, camera);
renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();

  renderer.render(scene, camera);
}
