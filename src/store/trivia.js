import { shuffle } from 'lodash';
import triviaApi from '../api/trivia';

const initialState = {
  questions: [],
  currentIndex: 0,
  isPlaying: false,
  correctAnswersCount: 0,
  isGameOver: false,
  maxCorrectAnswers: 0,
  gamesPlayed: 0,
  totalQuestionsAnswered: 0,
  totalQuestionsAnsweredRight: 0,
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
    commit('setTotalQuestionsAnswered', state.totalQuestionsAnswered + 1);
    if (state.currentIndex === 10) {
      commit('setGamesPlayed', state.gamesPlayed + 1);
      commit('setIsGameOver', true);
    }
  },
  addCorrectAnswer({ commit, state }, params) {
    const { correct } = params;
    if (correct) {
      commit('setCorrectAnswersCount', state.correctAnswersCount + 1);
      commit('setTotalQuestionsAnsweredRight', state.totalQuestionsAnsweredRight + 1);
    }
  },
  updateMaxCorrectAnswers({ commit }, params) {
    const { newValue } = params;
    commit('setMaxCorrectAnswers', newValue);
  },
  resetGame({ commit }) {
    commit('setQuestions', []);
    commit('setCurrentIndex', 0);
    commit('setIsPlaying', false);
    commit('setCorrectAnswersCount', 0);
    commit('setIsGameOver', false);
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
  setIsGameOver(state, payload) {
    state.isGameOver = payload;
  },
  setMaxCorrectAnswers(state, payload) {
    state.maxCorrectAnswers = payload;
  },
  setTotalQuestionsAnswered(state, payload) {
    state.totalQuestionsAnswered = payload;
  },
  setTotalQuestionsAnsweredRight(state, payload) {
    state.totalQuestionsAnsweredRight = payload;
  },
  setGamesPlayed(state, payload) {
    state.gamesPlayed = payload;
  },

};

export default {
  state: { ...initialState },
  getters,
  actions,
  mutations,
};
