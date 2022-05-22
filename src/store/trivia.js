import triviaApi from '../api/trivia';

const initialState = {
  questions: [],
  currentIndex: 0,
  isPlaying: false,
};
const getters = {
};

const actions = {
  async updateQuestions({ commit }, params) {
    const questions = await triviaApi.getQuestions(params);
    commit('setQuestions', questions.data.results);
    commit('setIsPlaying', true);
  },
  nextQuestion({ commit, state }) {
    commit('setCurrentIndex', state.currentIndex + 1);
  },
};

const mutations = {
  setQuestions(state, payload) {
    state.questions = payload;
  },
  setCurrentIndex(state, payload) {
    state.currentIndex = payload;
  },
  setIsPlaying(state, payload) {
    state.isPlaying = payload;
  },
};

export default {
  state: { ...initialState },
  getters,
  actions,
  mutations,
};
