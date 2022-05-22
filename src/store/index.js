import { createStore } from 'vuex';
import trivia from './trivia';

const store = createStore({
  modules: {
    trivia,
  },
});

export default store;
