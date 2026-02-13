<template>
  <article class="volunteer-card-js">
    <h3>JS Component: Volunteer on duty</h3>
    <p>Name: {{ volunteer.name }}</p>
    <p>Shift: {{ volunteer.shift }}</p>
  </article>
</template>

<script>
export default {
  name: 'VolunteerCardJs',
  data() {
    return {
      volunteer: {
        name: 'Anna',
        shift: '10:00 - 16:00'
      }
    };
  }
};
</script>

<style scoped>
.volunteer-card-js {
  margin-top: 12px;
  border: 1px solid #d8e1ff;
  border-radius: 8px;
  padding: 10px;
}
</style>
