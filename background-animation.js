// background-animation.js
document.addEventListener("DOMContentLoaded", function () {
  // Check if container exists
  const container = document.getElementById("background-animation");
  if (!container) return;

  // Three.js setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true, // Make background transparent
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1500; // Reduced for performance
  const posArray = new Float32Array(particlesCount * 3);

  // Random particle positions
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10; // Spread particles wider
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );

  // Particle material - softer white with slight glow
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x4af626, // Terminal green color
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  camera.position.z = 3;

  // Mouse movement effect (subtle)
  let mouseX = 0;
  let mouseY = 0;
  const mouseFactor = 0.00005; // Very subtle effect

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX * mouseFactor;
    mouseY = event.clientY * mouseFactor;
  });

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);

    // Gentle rotation and mouse interaction
    particlesMesh.rotation.x += 0.0005;
    particlesMesh.rotation.y += 0.0005;
    particlesMesh.rotation.z += 0.0005;

    // Subtle mouse interaction
    particlesMesh.rotation.y += (mouseX - particlesMesh.rotation.y) * 0.05;
    particlesMesh.rotation.x += (-mouseY - particlesMesh.rotation.x) * 0.05;

    renderer.render(scene, camera);
  };

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();
});
