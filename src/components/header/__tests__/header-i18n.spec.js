import { createLocalVue, mount } from '@vue/test-utils'
// component
import HeaderI18n from '@/components/header/components/HeaderI18n.vue'
// boostrap vue
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('HeaderI18n.vue', () => {
  it('should be a vue instance', () => {
    const wrapper = mount(HeaderI18n, {
      localVue
    })

    // expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should check if exists data within component', () => {
    const wrapper = mount(HeaderI18n, {
      localVue
    })
    const languages = wrapper.vm.languages

    wrapper.setData({
      languages: [...languages,
      {
        id: 1,
        a: 'en',
        b: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png'
      }]
    })
    // expect(wrapper).toMatchSnapshot()
  })
})
