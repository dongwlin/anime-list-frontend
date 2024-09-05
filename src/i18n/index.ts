import {ref, computed} from 'vue'
import enUS from '@/locales/enUS.json'
import zhCN from '@/locales/zhCN.json'
import { Locale } from '@/locales/types'
import { Messages } from './types'

const messages: Record<Locale, Messages> = {
  enUS: Object.freeze(enUS),
  zhCN: Object.freeze(zhCN)
}
const locale = ref<Locale>('enUS')

const getNestedValue = (obj: any, keyPath: string): string => {
  const value = keyPath.split('.').reduce((acc, key: string) => acc && acc[key], obj)
  if (!value) {
    console.error(`Missing translation for "${keyPath}" in locale "${locale.value}"`)
  }
  return value || keyPath
}


const translationCache = new Map<string, string>()

const t = (key: string): string => {
  const cacheKey = `${locale.value}:${key}`
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!
  }

  const value = getNestedValue(messages[locale.value], key)
  translationCache.set(cacheKey, value)
  return value
}

const setLocale = (newLocale: Locale) => {
  locale.value = newLocale
  translationCache.clear
}

const currentLocale = computed(() => locale.value)

export function useI18n() {
  return {
    t,
    setLocale,
    currentLocale
  }
}