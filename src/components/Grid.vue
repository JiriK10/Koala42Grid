<script setup lang="ts">
import { useConfirm } from "primevue/useconfirm"
import ConfirmDialog from "primevue/confirmdialog"
import { useToast } from "primevue/usetoast"
import Toast from "primevue/toast"
import { GridItem } from "../models/GridItem"
import GridHeader from "./GridHeader.vue"
import GridRow from "./GridRow.vue"

const props = defineProps({
  items: Array<GridItem>,
})

const emit = defineEmits(["item-deleted"])

const confirmDialog = useConfirm()
const toast = useToast()

function confirmDelete(item: GridItem) {
  confirmDialog.require({
    header: "Confirm delete",
    message: "Do you want to delete this row with its children?",
    acceptClass: "bg-primary text-gray-900 px-10",
    rejectClass: "p-button-text text-primary px-10",
    accept: () => {
      confirmDialog.close()
      deleteItem(item)
    },
    reject: () => {
      confirmDialog.close()
    },
    onHide: () => {
      confirmDialog.close()
    },
  })
}

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
      life: 3000,
    })

    props.items!.splice(itemIndex, 1)
    emit("item-deleted")
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
        @click-delete="confirmDelete(item)"
      />
    </template>
  </table>
  <ConfirmDialog />
  <Toast position="bottom-center" />
</template>
