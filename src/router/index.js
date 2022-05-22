import { createRouter, createWebHistory } from 'vue-router';
import TriviaView from '../views/TriviaView.vue';

const routes = [
  {
    path: '/',
    name: 'trivia',
    component: TriviaView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
