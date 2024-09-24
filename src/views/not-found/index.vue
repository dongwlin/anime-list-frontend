<script setup lang="ts">
import { useI18n } from '@/i18n'
import { NResult } from 'naive-ui'

const { t } = useI18n()
</script>

<template>
  <n-result status="404" size="huge" :title="t('page.not_found.title')"
    :description="t('page.not_found.description')"></n-result>
</template>

<style scoped></style>