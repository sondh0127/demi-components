<script lang="ts" setup>
import GlobalASide from './GlobalASide.vue'
import GlobalHeader from './GlobalHeader.vue'
</script>

<template>
  <el-config-provider namespace="ep">
    <el-container>
      <GlobalASide />
      <el-container>
        <el-header style="--ep-header-padding: 0px">
          <GlobalHeader />
        </el-header>
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style scoped>
</style>
