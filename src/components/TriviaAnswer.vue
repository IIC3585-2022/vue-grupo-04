<template>
  <div>
    <button
      class="p-4 text-xl bg-green-400 my-3 w-5/6"
      @click="$emit('answer', answer.correct)"
    >
      {{ answer.value }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['answer']);
</script>
