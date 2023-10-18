<script setup lang="ts">
import { computed } from "vue"
import { GridItem } from "../models/GridItem"
import Grid from "./Grid.vue"

const props = withDefaults(
  defineProps<{
    item: GridItem
    opened: Boolean
    striped: Boolean
  }>(),
  {
    striped: () => false,
  }
)

const emit = defineEmits(["click-delete", "update:opened"])

const rowColor = computed(() => {
  return props.striped ? "bg-neutral-700" : "bg-neutral-500"
})

const columns = computed(() => {
  return Object.keys(props.item.data)
})

const childrenRecords = computed(() => {
  return props.item.children!
})

const hasChildrenRecords = computed(() => {
  return childrenRecords.value.length > 0
})

function toggle() {
  if (hasChildrenRecords.value) {
    emit("update:opened", !props.opened)
  }
}
</script>

<template>
  <tr
    class="text-neutral-100"
    :class="[rowColor, hasChildrenRecords ? 'cursor-pointer' : '']"
    @click="toggle"
  >
    <td class="w-28">
      <font-awesome-icon
        :icon="['fa-solid', opened ? 'fa-caret-down' : 'fa-caret-right']"
        :class="[hasChildrenRecords ? '' : 'opacity-30']"
      />
    </td>
    <td v-for="column in columns" class="px-4 py-2">
      {{ item.data[column] }}
    </td>
    <td
      title="Delete item"
      class="w-20 text-lg text-red-600 hover:text-red-400 cursor-pointer"
      @click.stop="emit('click-delete')"
    >
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </td>
  </tr>
  <tr v-if="opened" :class="[rowColor]">
    <td v-if="hasChildrenRecords" :colspan="columns.length + 2" class="pl-12">
      <Grid :items="childrenRecords" />
    </td>
  </tr>
</template>
