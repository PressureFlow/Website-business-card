import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HomePage from "./components/screens/HomePage.vue";
import NotFoundPage from "./components/error/NotFoundPage.vue";
import MyProject from "./components/screens/MyProject.vue";

import * as THREE from "../node_modules/three/build/three.module.js";

//Настройка сцены
const scene = new THREE.Scene();
// const spaceTexture = new THREE.Color( 0x000000 );
// scene.background = spaceTexture;

//Настройка камеры
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//Настройка renderers
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0);

renderer.domElement.setAttribute("id", "3d");

document.body.insertBefore(renderer.domElement, document.body.firstChild);

renderer.domElement.set;

//Глобальное освещение
const aLight = new THREE.AmbientLight(0xffffff);
scene.add(aLight);

//Настройка куба

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: "#555", wireframe: true })
);
cube.position.z = -2;
cube.position.x = 1.5;
cube.position.y = -0.2;

cube.rotation.y = 10;
cube.rotation.x = 10;
scene.add(cube);

//Анимация | каждый кадр
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.y += 0.003;
  cube.rotation.x += 0.002;
  cube.rotation.z += 0.002;

  renderer.render(scene, camera);
}
//Запуск анимации
animate();

// Событие для прокрутки
document.body.onscroll = hundlerScroll;
function hundlerScroll() {
  const t = document.body.getBoundingClientRect().top;

  if (cube.rotation.y > 0 && cube.rotation.x > 0) {
    cube.rotation.y -= 0.01;
    cube.rotation.x -= 0.01;
  }

  if (camera.position.z < -1.4) {
    cube.rotation.y = 0;
    cube.rotation.x = 0;
  } else {
    cube.position.x = 1.5;
  }

  camera.position.z = t * 0.001;
}

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/:pathMath(.*)*",
      name: "404",
      component: NotFoundPage,
    },
    {
      path: "/blog",
      name: "project",
      component: MyProject,
    },
  ],
  history: createWebHistory(),
});

const isAuthenticated = false;

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthenticated) {
    return {
      name: "home",
    };
  }
});

const app = createApp(App);
app.use(router);
app.mount("#app");
