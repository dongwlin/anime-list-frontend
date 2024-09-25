import { Home, Settings } from '@vicons/carbon'
import { Component } from 'vue'

type Option = {
  key: string
  to: string
  icon: Component
}

const options: Option[] = [
  {
    key: 'home',
    to: '/home',
    icon: Home
  },
  {
    key: 'settings',
    to: '/settings',
    icon: Settings
  }
]

export default options