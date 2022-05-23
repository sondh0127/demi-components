<script lang="ts" setup>
import { asideCollapsed } from './aside'
import { toggleDark } from '@/composables'

const toggleAside = useToggle(asideCollapsed)
</script>

<template>
  <div class="flex">
    <el-button text bg size="default" @click="toggleAside()">
      <el-icon :size="20">
        <div v-if="asideCollapsed" class="i-ep:expand" />
        <div v-else class="i-ep:fold" />
      </el-icon>
    </el-button>
    <div class="flex-grow">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
          Element Plus
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            Workspace
          </template>
          <el-menu-item index="2-1">
            item one
          </el-menu-item>
          <el-menu-item index="2-2">
            item two
          </el-menu-item>
          <el-menu-item index="2-3">
            item three
          </el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>
              item four
            </template>
            <el-menu-item index="2-4-1">
              item one
            </el-menu-item>
            <el-menu-item index="2-4-2">
              item two
            </el-menu-item>
            <el-menu-item index="2-4-3">
              item three
            </el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" disabled>
          Info
        </el-menu-item>
        <el-menu-item index="4">
          Orders
        </el-menu-item>
        <el-menu-item h="full" @click="toggleDark()">
          <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height);">
            <i inline-flex i="dark:ep-moon ep-sunny" />
          </button>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
