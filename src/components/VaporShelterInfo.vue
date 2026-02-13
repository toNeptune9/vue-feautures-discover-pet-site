<template>
  <section class="vapor-info">
    <h2>Vapor block component</h2>
    <p>{{ message }}</p>
  </section>
</template>

<script vapor setup lang="ts">
const message = 'This component uses <script vapor> syntax sample.';
</script>

<style scoped>
.vapor-info {
  margin-top: 12px;
  padding: 12px;
  border-radius: 8px;
  background: #eefcf4;
}
</style>
