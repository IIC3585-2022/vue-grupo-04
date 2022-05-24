import { createRouter, createWebHistory } from 'vue-router';
import TriviaView from '../views/TriviaView.vue';

const routes = [
  {
    path: '/',
    name: 'trivia',
    component: TriviaView,
  },
  {
    path: '/stats',
    name: 'stats',
    component: () => import('../views/StatsView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
