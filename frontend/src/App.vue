<template>
  <main style="max-width: 720px; margin: 24px auto; font-family: system-ui;">
    <h1>Pokedex Docker</h1>

    <form @submit.prevent="search" style="display:flex; gap:8px; margin: 12px 0;">
      <input v-model="name" placeholder="pikachu" style="flex:1; padding:8px;" />
      <button type="submit" style="padding:8px 12px;">Search</button>
    </form>

    <p v-if="loading">Loading...</p>
    <p v-if="error" style="color:crimson;">{{ error }}</p>

    <section v-if="pokemon">
      <h2>#{{ pokemon.id }} {{ pokemon.name }}</h2>
      <img
        v-if="pokemon.sprites?.front_default"
        :src="pokemon.sprites.front_default"
        alt=""
        width="128"
        height="128"
      />
      <pre style="background:#f6f6f6; padding:12px; overflow:auto;">{{ pokemon }}</pre>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

const name = ref("pikachu");
const pokemon = ref(null);
const loading = ref(false);
const error = ref("");

async function search() {
  loading.value = true;
  error.value = "";
  pokemon.value = null;
  try {
    const r = await fetch(`/api/pokemon/${encodeURIComponent(name.value)}`);
    if (!r.ok) throw new Error("Not found");
    pokemon.value = await r.json();
  } catch (e) {
    error.value = "見つからないか、通信に失敗しました";
  } finally {
    loading.value = false;
  }
}
</script>