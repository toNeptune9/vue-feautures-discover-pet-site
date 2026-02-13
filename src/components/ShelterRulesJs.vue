<template>
  <section class="rules-js">
    <h2>JS Component: Shelter rules</h2>
    <ul>
      <li v-for="rule in rules" :key="rule">{{ rule }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ShelterRulesJs',
  data() {
    return {
      rules: [
        'Respect quiet hours for shy cats',
        'Wash hands before and after a visit',
        'Ask volunteers before feeding cats'
      ]
    };
  }
};
</script>

<style scoped>
.rules-js {
  margin-top: 14px;
  padding: 12px;
  border-radius: 8px;
  background: #fff7ee;
}
</style>
