import { i18n } from '@/plugins/i18n'

export const navMenu = [
  {
    id: 1,
    title: i18n.t('global.header.menu.details'),
    route: '/details-list',
    active: false
  },
  {
    id: 2,
    title: i18n.t('global.header.menu.about_us'),
    route: '/about-us',
    active: false
  }
]
