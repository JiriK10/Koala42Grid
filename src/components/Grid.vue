<script setup lang="ts">
import { useToast } from "primevue/usetoast"
import Toast from "primevue/toast"
import { GridItem } from "../models/GridItem"
import GridHeader from "./GridHeader.vue"
import GridRow from "./GridRow.vue"

const props = defineProps({
  items: Array<GridItem>,
})

const toast = useToast()

function deleteItem(item: GridItem) {
  let itemIndex = props.items!.findIndex((i) => i == item)
  if (itemIndex > -1) {
    let deletedIDs: Array<number> = []
    let query = [props.items![itemIndex]]
    while (query.length > 0) {
      let queryItem: GridItem = query.shift()!
      deletedIDs.push(queryItem.data.ID ?? "???")
      query.push(...queryItem.children!)
    }
    toast.add({
      severity: "error",
      summary: "Deleted IDs",
      detail: deletedIDs.join(", "),
      life: 5000,
    })

    props.items!.splice(itemIndex, 1)
  }
}
</script>

<template>
  <table v-if="items != null && items.length > 0" class="text-center">
    <GridHeader :item="items[0]" />
    <template v-for="(item, index) in items">
      <GridRow
        :item="item"
        :striped="index % 2 == 1"
        v-model:opened="item.opened"
        @click-delete="deleteItem(item)"
      />
    </template>
  </table>
  <Toast position="bottom-center" />
</template>
