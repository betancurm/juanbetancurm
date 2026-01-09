import * as THREE from "three";

// Theme
const theme = {
  primary: 0xffffff,
  secondary: 0x2a2a2a,
};

// Scene
const scene = new THREE.Scene();

// Geometries
const sphereGeometry = new THREE.SphereGeometry(1.5, 64, 64);
const planeGeometry = new THREE.PlaneGeometry(20, 20, 20, 20);

// Materials
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: theme.primary,
  metalness: 0.6,
  roughness: 0.4,
});
const planeMaterial = new THREE.MeshStandardMaterial({
  color: theme.secondary,
  metalness: 0.8,
  roughness: 0.2,
});

// Meshes
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

sphere.position.y = 0;
sphere.castShadow = true;
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2.5;
plane.receiveShadow = true;

scene.add(sphere, plane);

// Lights
const directionalLight = new THREE.DirectionalLight(theme.primary, 1);
directionalLight.position.set(-5, 5, 5);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(theme.primary, 0.1);
scene.add(ambientLight);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 5;

// Sphere class
export class Sphere {
  private renderer: THREE.WebGLRenderer;
  private mouse: THREE.Vector2;
  private clock: THREE.Clock;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.mouse = new THREE.Vector2();
    this.clock = new THREE.Clock();

    window.addEventListener("mousemove", (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    this.animate();
  }

  private animate() {
    const elapsedTime = this.clock.getElapsedTime();

    // Animate sphere
    sphere.rotation.y = 0.2 * elapsedTime;
    sphere.rotation.x = 0.2 * elapsedTime;

    // Animate camera to mouse
    camera.position.x += (this.mouse.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (this.mouse.y * 2 - camera.position.y) * 0.02;

    this.renderer.render(scene, camera);
    window.requestAnimationFrame(() => this.animate());
  }
}
