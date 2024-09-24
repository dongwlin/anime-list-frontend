import { useI18n } from '@/i18n'
import { Locale } from '@/locales/types'
import { useOsTheme } from 'naive-ui'
import {defineStore} from 'pinia'
import {ref} from 'vue'

export const usePerferenceStore = defineStore('perference', () => {
  const osTheme = useOsTheme()

  const isDarkMode = ref<boolean>(osTheme.value === 'dark')
  const locale = ref<Locale>('enUS')
  const collapsed = ref<boolean>(false)

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
  }

  const setLocale = (value: Locale) => {
    locale.value = value
    useI18n().setLocale(value)
  }

  const siderCollapse = () => {
    collapsed.value = true
  }

  const siderExpand = () => {
    collapsed.value = false
  }


  return {
    isDarkMode,
    locale,
    collapsed,
    toggleDarkMode,
    setLocale,
    siderCollapse,
    siderExpand
  }
},
{
  persist: true
})
