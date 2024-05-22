import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

export default {
  title: 'City Walk',
  lastUpdated: true,
  cacheDir: '../../node_modules',
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/city-walk-app'
      }
    ],
    nav,
    sidebar
  },
}
