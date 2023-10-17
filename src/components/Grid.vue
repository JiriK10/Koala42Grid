<script setup lang="ts">
import { ref } from "vue"
import { GridItem } from "../models/GridItem"
import GridHeader from "./GridHeader.vue"
import GridRow from "./GridRow.vue"

const props = defineProps({
  items: Array<GridItem>,
})
</script>

<template>
  <table v-if="items != null && items.length > 0">
    <GridHeader :item="items[0]" />
    <template v-for="(item, index) in items">
      <GridRow :item="item" :striped="index % 2 == 1" />
    </template>
  </table>
</template>

<style scoped></style>
