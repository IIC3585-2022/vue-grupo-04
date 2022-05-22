<template>
  <div>
    <h1 class="text-3xl font-bold underline mb-10">
      Trivia
    </h1>
    <div v-if="isPlaying">
        <p class="text-xl">
          Respuestas Correctas
          <span class="font-bold">{{ correctAnswers }} / {{ AMOUNT_QUESTIONS }} </span>
        </p>
      <TriviaQuestion class="mb-10" />
      <p class="text-2xl"> {{ currentIndex + 1 }} / {{ AMOUNT_QUESTIONS }} </p>
    </div>
    <TriviaCard v-else>
      <div>
        <p>Elige la dificultad</p>
        <select v-model="difficulty" class="mb-10">
          <option disabled value="">Dificultad</option>
          <option value="easy">Fácil</option>
          <option value="medium">Mediana</option>
          <option value="hard">Difícil</option>
        </select>
      </div>
      <button @click="startGame" class="bg-green-400 p-3 rounded-lg">Empezar juego</button>
    </TriviaCard>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import TriviaCard from '../components/common/TriviaCard.vue';
import TriviaQuestion from '../components/TriviaQuestion.vue';

const AMOUNT_QUESTIONS = 10;

const store = useStore();

const difficulty = ref(null);
const isPlaying = computed(() => store.state.trivia.isPlaying);
const correctAnswers = computed(() => store.state.trivia.correctAnswersCount);

async function startGame() {
  store.dispatch('updateQuestions', { amount: AMOUNT_QUESTIONS, difficulty: difficulty.value, type: 'multiple' });
}

const currentIndex = computed(() => store.state.trivia.currentIndex);
</script>
