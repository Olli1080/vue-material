import './base/index.scss'
import MdTheme from 'core/MdTheme.vue'
import { reactive, Plugin, inject, InjectionKey } from 'vue'

const init = function () {
  let material = reactive({
    ripple: true,
    theming: {},
    locale: {
      startYear: 1900,
      endYear: 2099,
      dateFormat: 'yyyy-MM-dd',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D'],
      firstDayOfAWeek: 0,
      cancel: 'Cancel',
      confirm: 'Ok'
    },
    router: {
      linkActiveClass: 'router-link-active'
    }
  })

  Object.defineProperties(material.theming, {
    metaColors: {
      get: () => MdTheme.metaColors,
      set(metaColors) {
        MdTheme.metaColors = metaColors
      }
    },
    theme: {
      get: () => MdTheme.theme,
      set(theme) {
        MdTheme.theme = theme
      }
    },
    enabled: {
      get: () => MdTheme.enabled,
      set(enabled) {
        MdTheme.enabled = enabled
      }
    }
  })

  return material;
}

const materialKey: InjectionKey<ReturnType<typeof init>> = Symbol();

export const plugin: Plugin = {
  install: (app, options) => {
    app.provide(materialKey, init());
  }
}

export function useMaterial() {
  return inject(materialKey)
}
