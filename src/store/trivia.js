import { shuffle } from 'lodash';
import triviaApi from '../api/trivia';

const initialState = {
  questions: [],
  currentIndex: 0,
  isPlaying: false,
  correctAnswersCount: 0,
};

const getters = {
  currentQuestion(state) {
    return state.questions[state.currentIndex];
  },
  currentAnswers(_state, triviaGetters) {
    const incorrectAnswers = triviaGetters.currentQuestion.incorrectAnswers.map(
      (answer) => ({ correct: false, value: answer }),
    );
    return shuffle(
      [{ correct: true, value: triviaGetters.currentQuestion.correctAnswer }, ...incorrectAnswers],
    );
  },
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
  addCorrectAnswer({ commit, state }) {
    commit('setCorrectAnswersCount', state.correctAnswersCount + 1);
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
  setCorrectAnswersCount(state, payload) {
    state.correctAnswersCount = payload;
  },
};

export default {
  state: { ...initialState },
  getters,
  actions,
  mutations,
};
