<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/AppHeader'
</script>

<template>
  <header>
    <div class="wrapper">
      <Header />
    </div>
  </header>

  <RouterView />
</template>
