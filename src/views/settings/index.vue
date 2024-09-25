<script setup lang="ts">
import { useI18n } from '@/i18n'
import { Locale } from '@/locales/types';
import { usePerferenceStore } from '@/store';
import { NCard, NForm, NFormItem, NSwitch, NSelect } from 'naive-ui'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const perferenceStore = usePerferenceStore()
const router =  useRouter()

const languages = [
  {
    label: 'English',
    value: 'enUS'
  },
  {
    label: '简体中文',
    value: 'zhCN'
  }
]

const handleChangeLanguage = (value: Locale) => {
  perferenceStore.setLocale(value)
  router.push({
    name: 'refresh'
  })
}
</script>

<template>
  <n-card class="min-w-96" content-class="flex justify-center">
    <n-form class="w-1/2" label-placement="left" label-width="auto">
      <n-form-item :label="t('page.settings.content.dark_mode')">
        <n-switch v-model:value="perferenceStore.isDarkMode" />
      </n-form-item>
      <n-form-item :label="t('page.settings.content.language')">
        <n-select v-model:value="perferenceStore.locale" :options="languages" :on-update:value="handleChangeLanguage" />
      </n-form-item>
    </n-form>
  </n-card>
</template>

<style scoped></style>