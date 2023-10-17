<script setup lang="ts">
import Grid from "./components/Grid.vue"

import exampleData from "./assets/example-data.json"
</script>

<template>
  <Grid :items="exampleData" />
</template>
