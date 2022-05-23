<script lang="ts" setup>
import { HelloOptions, HelloSetup } from 'library/vue3'
import MyComponent from '@sigma-interactive/unbuild-lib/MyComponent'

const optionsSuffix = ref('')
const setupSuffix = ref('')

const optionsOutput = computed(() => `Hello ${optionsSuffix.value}`)
const setupOutput = computed(() => `Hello ${setupSuffix.value}`)
</script>

<template>
  <div>
    <h1>This is an about page</h1>
  </div>
  <hello-options v-model="optionsSuffix" />
  <p v-if="optionsSuffix">
    <output>{{ optionsOutput }}</output>
  </p>
  <hr>
  <hello-setup v-model="setupSuffix" />
  <p v-if="setupSuffix">
    <output>{{ setupOutput }}</output>
  </p>
  VUE 3
  <MyComponent />
</template>
