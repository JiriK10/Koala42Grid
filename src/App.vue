<script setup lang="ts">
import { reactive } from "vue"
import Grid from "./components/Grid.vue"

import exampleData from "./assets/example-data.json"

// Simplify "children" structure
let query = [...exampleData]
while (query.length > 0) {
  let item: any = query.shift()
  let itemProps = Object.keys(item.children || {})
  if (itemProps.length > 0) {
    let childrenProperty = itemProps[0]
    item.children = childrenProperty
      ? item.children[childrenProperty].records
      : []
    query.push(...item.children)
  } else {
    item.children = []
  }
}

const items = reactive(exampleData)
// TODO resetovat opened při posledním delete
// TODO potvrzení delete
</script>

<template>
  <div class="flex flex-col items-center">
    <Grid :items="items" />
  </div>
</template>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
