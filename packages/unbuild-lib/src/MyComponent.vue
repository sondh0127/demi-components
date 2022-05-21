<script lang="ts" setup>
const count = ref(0)

function increment() {
  count.value++
}

const input = ref('hello world')
</script>

<template>
  <div>
    <button @click="increment">
      Count {{ count }}
    </button>
    <el-button @click="increment">
      Count {{ count }}
    </el-button>
    <!-- <el-input placeholder="Please input" v-model="input"></el-input> -->
  </div>
</template>
