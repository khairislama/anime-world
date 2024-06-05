import * as THREE from "three";

const DynamicBackground = (
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer
) => {
  camera.position.z = 5;

  const shapes: THREE.Mesh[] = [];

  const createShape = (x: number, y: number) => {
    const geometry = new THREE.CircleGeometry(0.2, 32);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(Math.random(), Math.random(), Math.random()),
    });
    const shape = new THREE.Mesh(geometry, material);
    shape.position.set(x, y, 0);
    shapes.push(shape);
    scene.add(shape);
  };

  for (let i = 0; i < 10; i++) {
    createShape((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
  }

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const onMouseMove = (event: MouseEvent) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(shapes);

    intersects.forEach((intersect) => {
      intersect.object.position.x +=
        ((event.clientX / window.innerWidth) * 10 -
          5 -
          intersect.object.position.x) /
        10;
      intersect.object.position.y +=
        (-(event.clientY / window.innerHeight) * 10 +
          5 -
          intersect.object.position.y) /
        10;
    });
  };

  const onMouseClick = (event: MouseEvent) => {
    createShape(mouse.x, mouse.y);
  };

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("click", onMouseClick);

  return () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("click", onMouseClick);
  };
};

export default DynamicBackground;
