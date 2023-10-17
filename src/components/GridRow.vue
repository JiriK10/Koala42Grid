<script setup lang="ts">
import { ref, computed } from "vue"
import { GridItem } from "../models/GridItem"
import Grid from "./Grid.vue"

const props = withDefaults(
  defineProps<{
    item: GridItem
    striped: Boolean
  }>(),
  {
    striped: () => false,
  }
)

const opened = ref(false)

const rowColor = computed(() => {
  return props.striped ? "bg-neutral-700" : "bg-neutral-500"
})

const columns = computed(() => {
  return Object.keys(props.item.data)
})

const childrenRecords = computed(() => {
  let childrenProperty = Object.keys(props.item.children || {})[0]
  return childrenProperty ? props.item.children[childrenProperty].records : []
})
</script>

<template>
  <tr class="text-neutral-100" :class="[rowColor]">
    <td class="pr-10">
      <font-awesome-icon
        :icon="['fa-solid', opened ? 'fa-caret-down' : 'fa-caret-right']"
        @click="opened = !opened"
      />
    </td>
    <td v-for="column in columns" class="px-4 py-2">
      {{ item.data[column] }}
    </td>
  </tr>
  <tr :class="[rowColor]">
    <td
      v-if="childrenRecords.length > 0"
      :colspan="columns.length + 1"
      class="pl-20"
    >
      <Grid :items="childrenRecords" />
    </td>
  </tr>
</template>

<style scoped></style>
