<template>
  <div class="about">
    <h1 class="text-3xl font-bold underline mb-10">Stats</h1>
    <div class="flex flex-col rounded-xl bg-white mx-auto w-1/2 drop-shadow-md p-7">
      <div class="m-8 text-left flex">
        <img
          src="../assets/controller.svg"
          alt="Correct"
          class=" mr-6 h-8 w-8 align-middle"
        />
        <p>
          Total Juegos Jugados:  {{gamesPlayed}}
        </p>
      </div>
      <div class="m-8 text-left flex ">
        <img
          src="../assets/check.svg"
          alt="Correct"
          class="  mr-6 h-8 w-8 align-middle"
        />
        <p>
          Total Preguntas Correctas: {{totalQuestionsAnsweredRight}}
        </p>
      </div>
      <div class="m-8 text-left  flex">
        <img
          src="../assets/questions.svg"
          alt="Correct"
          class=" mr-6 h-8 w-8 align-middle"
        />
        <p>
          Total Preguntas Respondidas: {{totalQuestionsAnswered}}
        </p>
      </div>
      <div class="m-8 text-left flex">
        <img
          src="../assets/crown-2.svg"
          alt="Correct"
          class=" mr-6 h-8 w-8 align-middle"
        />
        <p>
          Mayor Cantidad de Aciertos: {{maxCorrectAnswers}}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const maxCorrectAnswers = computed(() => store.state.trivia.maxCorrectAnswers);
const gamesPlayed = computed(() => store.state.trivia.gamesPlayed);
const totalQuestionsAnswered = computed(() => store.state.trivia.totalQuestionsAnswered);
const totalQuestionsAnsweredRight = computed(() => store.state.trivia.totalQuestionsAnsweredRight);

</script>
