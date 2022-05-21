<template>
  <hello-options v-model="optionsSuffix" />
  <p v-if="optionsSuffix">
    <output>{{ optionsOutput }}</output>
  </p>
  <hr />
  <hello-setup v-model="setupSuffix" />
  <p v-if="setupSuffix">
    <output>{{ setupOutput }}</output>
  </p>
  VUE 3
  <MyComponent/>
</template>

<script lang="ts">
import { HelloOptions, HelloSetup } from "library/vue3";
import MyComponent from "@sigma-interactive/unbuild-lib/MyComponent"

export default {
  components: {
    HelloOptions,
    HelloSetup,
    MyComponent
  },
  data() {
    return {
      optionsSuffix: "",
      setupSuffix: "",
    };
  },
  computed: {
    optionsOutput(): string {
      return `Hello ${this.optionsSuffix}`;
    },
    setupOutput(): string {
      return `Hello ${this.setupSuffix}`;
    },
  },
};
</script>
