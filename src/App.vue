<script setup lang="ts">
import { darkTheme, dateEnUS, dateZhCN, enUS, NConfigProvider, zhCN } from 'naive-ui'
import Layout from '@/layout/index.vue'
import { usePerferenceStore } from './store'
import { computed } from 'vue';

const perferenceStore = usePerferenceStore()
perferenceStore.setLocale(perferenceStore.locale)

const theme = computed(() => {
  return perferenceStore.isDarkMode ? darkTheme : null
})

const locale = computed(() => {
  switch (perferenceStore.locale) {
    case 'zhCN':
      return zhCN
    case 'enUS':
      return enUS
  }
})

const dateLocale = computed(() => {
  switch (perferenceStore.locale) {
    case 'zhCN':
      return dateZhCN
    case 'enUS':
      return dateEnUS
  }
})
</script>

<template>
  <n-config-provider class="h-full" :theme="theme" :locale="locale" :date-locale="dateLocale">
    <div v-if="false" class="i-carbon-home i-carbon-task i-carbon-settings"></div>
    <Layout class="h-full">
      <router-view />
    </Layout>
  </n-config-provider>
</template>

<style scoped>

</style>
