<script setup lang="ts">
import AppButton from './AppButton.vue';

defineProps<{ msg: string }>()
</script>

<template>
  <div class="text-center mt-20 mb-12">
    <h1 class="font-body text-3xl mb-4 text-amber-300">Rock and Stone Survivor Tools</h1>
    <h2 class="font-body text-lg">Unofficial DRG: Survivor Theorycrafting Project</h2>
  </div>

  <AppButton class="m-auto">
    Weapons
  </AppButton>
</template>

<style scoped>

</style>
