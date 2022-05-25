<script setup>
defineProps({
  show: Boolean,
  correctAnswers: Number,
});
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="fixed top-0 left-0 z-[9998] w-full h-full table bg-black/[0.5]"
    >
      <div class="table-cell align-middle">
        <div class="rounded-xl bg-white mx-auto w-1/2 drop-shadow-md p-7 ">
          <h3 class="text-xl font-bold uppercase text-center"> El juego ha terminado</h3>
          <p class="text-xl text-center">
            Tus respuestas correctas:
          </p>
          <p class="font-bold text-xl text-center">{{ correctAnswers }} / 10</p>
          <img
            src="../assets/puzzle.svg"
            alt="Game"
            class="w-1/3 mx-auto"
          />
          <button
            @click="$emit('close')"
            class="bg-green-400 p-3 rounded-lg m-auto block"
          >
            Volver a Jugar
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
