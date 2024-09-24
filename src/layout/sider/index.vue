<script setup lang="ts">
import {MenuOption, NLayoutSider, NMenu} from 'naive-ui'
import options from './options'
import { h, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/i18n'
import { usePerferenceStore } from '@/store'

const {t} = useI18n()
const perferenceStore = usePerferenceStore()

const processHash = (hash: string): string[] => {
  if (hash.startsWith('#/')) {
    hash = hash.substring(2)
  }
  const queryIndex = hash.indexOf('?')
  if (queryIndex !== -1) {
    hash = hash.substring(0, queryIndex)
  }
  return hash.split('/')
}

const selected = ref<string>(processHash(location.hash)[0])

const rederIcon = (icon: string) => {
  return () => h('div', { class: icon })
}

const handleSelected = (key: string, _: MenuOption) => {
  selected.value = key
}

const menuOptions : MenuOption[] = []
for (const option of options) {
  menuOptions.push({
    label: () => h(
      RouterLink,
      {
        to: option.to
      },
      {
        default: () => t(`sider.${option.key}`)
      }
    ),
    key: option.key,
    icon: rederIcon(option.icon)
  })
}

const expandIcon = (option: MenuOption) => {
  const menu = options.find(value => value.key === option.key)
  if (menu) {
    return h(
      'div',
      {
        class: menu.icon
      }
    )
  }
}
</script>

<template>
  <n-layout-sider bordered collapse-mode="width" :width="240" show-trigger @collapse="perferenceStore.siderCollapse" @expand="perferenceStore.siderExpand">
    <n-menu :collapsed="perferenceStore.collapsed" :options="menuOptions" :expand-icon="expandIcon" :value="selected" :on-update:value="handleSelected"/>
  </n-layout-sider>
</template>

<style scoped>

</style>