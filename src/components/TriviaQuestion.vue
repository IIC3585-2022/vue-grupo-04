<template>
  <TriviaCard>
    <h2 class="text-lg mb-5">{{ currentQuestion.category }}</h2>
    <h1 v-html="currentQuestion.question" class="text-3xl font-semibold mb-3" />
    <div v-if="answered">
      <img
        v-if="correctAnswer"
        src="../assets/check.svg"
        alt="Correct"
        class="w-1/3 mx-auto"
      />
      <img
        v-else
        src="../assets/cross.svg"
        alt="Incorrect"
        class="w-1/3 mx-auto"
      />
      <p class="text-lg">Respuesta correcta:</p>
      <p class="text-xl mb-4">{{ currentQuestion.correctAnswer }}</p>
      <button @click="nextQuestion" class="bg-green-400 p-3 rounded-lg">Siguiente</button>
    </div>
    <div v-else>
      <TriviaAnswer
        v-for="answer in currentAnswers"
        :key="answer.value"
        :answer="answer"
        @answer="processAnswer" />
    </div>
    </TriviaCard>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import TriviaCard from './common/TriviaCard.vue';
import TriviaAnswer from './TriviaAnswer.vue';

const store = useStore();

const currentQuestion = computed(() => store.getters.currentQuestion);
const currentAnswers = computed(() => store.getters.currentAnswers);

const answered = ref(false);
const correctAnswer = ref(false);

function processAnswer(correct) {
  store.dispatch('addCorrectAnswer', { correct });
  answered.value = true;
  correctAnswer.value = correct;
}

function nextQuestion() {
  store.dispatch('nextQuestion');
  answered.value = false;
  correctAnswer.value = false;
}

</script>
