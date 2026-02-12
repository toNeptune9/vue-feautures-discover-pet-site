<template>
  <main class="container">
    <header>
      <h1>{{ titleLiteral }}</h1>
      <p>{{ shelterMotto }}</p>
      <p>String literal example: {{ statusLiteral }}</p>
      <StatusBadge :label="`Shelter status: ${statusLiteral}`" :tone="statusLiteral === 'open' ? 'success' : 'warning'" />
    </header>

    <AdoptionFilter v-model:query="query" v-model:min-age="minAge" />

    <ShelterOverview :state="shelterState" />
    <VaporNote :cats="filteredCats" />

    <section class="cats-grid">
      <CatCard
        v-for="cat in filteredCats"
        :key="cat.id"
        :cat="cat"
        @adopt="handleAdopt"
        @open-profile="handleOpenProfile"
      />
    </section>

    <footer>
      <p>Last action: {{ lastAction }}</p>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import CatCard from './components/CatCard.vue';
import AdoptionFilter from './components/AdoptionFilter.vue';
import ShelterOverview from './components/ShelterOverview.vue';
import VaporNote from './components/VaporNote';
import StatusBadge from './components/StatusBadge';
import { shelterMotto, sortByAge } from './utils/catHelpers';
import type { Cat, ShelterState } from './types/cat';

const titleLiteral = 'Cat Shelter "Hope Paws"' as const;
const statusLiteral: 'open' | 'closed' = 'open';

const query = ref('');
const minAge = ref(0);
const lastAction = ref('No actions yet');

const cats = ref<Cat[]>([
  {
    id: 1,
    name: 'Luna',
    age: 2,
    temper: 'playful',
    imageUrl:
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80',
    rescuedAt: '2024-06-01',
    traits: ['social', 'loves toy balls']
  },
  {
    id: 2,
    name: 'Marcel',
    age: 5,
    temper: 'calm',
    imageUrl:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    rescuedAt: '2023-12-10',
    traits: ['affectionate', 'loves blankets']
  },
  {
    id: 3,
    name: 'Cloudy',
    age: 1,
    temper: 'curious',
    imageUrl:
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=80',
    rescuedAt: '2024-10-02',
    traits: ['explorer', 'likes high places']
  }
]);

const shelterState = computed<ShelterState>(() => ({
  property: {
    foo: {
      bar: {
        baz: 'Completion demo: property.foo.bar.baz'
      }
    }
  },
  stats: {
    available: {
      cats: filteredCats.value.length
    }
  }
}));

const filteredCats = computed(() =>
  sortByAge(cats.value).filter((cat) => {
    const byName = cat.name.toLowerCase().includes(query.value.toLowerCase());
    const byAge = cat.age >= minAge.value;
    return byName && byAge;
  })
);

function handleAdopt(cat: Cat): void {
  lastAction.value = `Adoption request: ${cat.name}`;
}

function handleOpenProfile(catId: number): void {
  lastAction.value = `Opened cat profile #${catId}`;
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  font-family: Inter, system-ui, sans-serif;
  padding: 20px;
}

.cats-grid {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.vapor-note {
  margin-top: 12px;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 8px;
  background: #f3f9ff;
}
</style>
