<script setup lang="ts">
import { NLayout } from 'naive-ui'
import Sider from './sider/index.vue'
import Content from './content/index.vue'
</script>

<template>
  <n-layout has-sider>
    <Sider />
    <Content>
      <slot></slot>
    </Content>
  </n-layout>
</template>

<style scoped></style>