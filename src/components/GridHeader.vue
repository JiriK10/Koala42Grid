<script setup lang="ts">
import { GridItem } from "../models/GridItem"

const props = defineProps<{
  item: GridItem
}>()
</script>

<template>
  <tr class="bg-primary text-gray-900">
    <th></th>
    <th v-for="key in Object.keys(item.data)" class="px-4 py-2">
      {{ key }}
    </th>
    <th>Delete</th>
  </tr>
</template>
