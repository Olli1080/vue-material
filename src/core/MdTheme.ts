import { defineComponent, computed, watch, ref, Component, onMounted, getCurrentInstance, ComponentInternalInstance } from 'vue'

let msColor: HTMLElement | null = null
let themeColor: HTMLElement | null = null
let maskIcon: HTMLElement | null = null

export default defineComponent({
  setup: () => {
    const prefix = 'md-theme-'
    const theme = ref<string>('default')
    const enabled = ref<boolean>(true)
    const metaColors = ref<boolean>(false)

    const themeTarget = computed(() => {
      if (typeof window === 'undefined') {
        return document.documentElement
      }
      return false
    })

    const getThemeName = function (themeAlt?: string) {
      const themeName = themeAlt || theme.value

      return prefix + themeName
    }

    const fullThemeName = computed(() => {
      return getThemeName()
    })

    const getAncestorTheme = function () {

      const component = getCurrentInstance();
      if (component) {
        const currentTheme = component.props.mdTheme
        const getParentThemeName = (parent: ComponentInternalInstance | null): string | null => {
          if (parent) {
            const { parent: subparent } = parent
            const { mdTheme } = parent.props

            if (mdTheme && mdTheme !== currentTheme) {
              return <string>mdTheme
            }
            return getParentThemeName(subparent)
          }
          return theme.value
        }

        return getParentThemeName(component.parent)
      }
      return null
    }

    const setMicrosoftColors = function (primaryColor: string) {
      if (msColor) {
        msColor.setAttribute('content', primaryColor)
      }
    }

    const setThemeColors = function (primaryColor: string) {
      if (themeColor) {
        themeColor.setAttribute('content', primaryColor)
      }
    }

    const setMaskColors = function (primaryColor: string) {
      if (maskIcon) {
        maskIcon.setAttribute('color', primaryColor)
      }
    }

    const setHtmlMetaColors = function (themeName?: string) {
      let primaryColor = '#fff'

      if (themeName) {
        const computedStyle = window.getComputedStyle(document.documentElement)

        primaryColor = computedStyle.getPropertyValue(`--${themeName}-primary`)
      }

      if (primaryColor) {
        setMicrosoftColors(primaryColor)
        setThemeColors(primaryColor)
        setMaskColors(primaryColor)
      }
    }

    watch(enabled, () => {
      if (themeTarget.value) {
        if (enabled.value) {
          themeTarget.value.classList.add(fullThemeName.value)
          metaColors.value && setHtmlMetaColors(fullThemeName.value)
        } else {
          themeTarget.value.classList.remove(fullThemeName.value)
          metaColors.value && setHtmlMetaColors()
        }
      }
    }, { immediate: true })

    watch(theme, (newTheme, oldTheme) => {

      newTheme = getThemeName(newTheme);

      (<HTMLElement>themeTarget.value).classList.remove(getThemeName(oldTheme));
      (<HTMLElement>themeTarget.value).classList.add(newTheme)

      if (metaColors.value) {
        setHtmlMetaColors(newTheme)
      }
    })

    watch(metaColors, (meta) => {
      if (meta) {
        setHtmlMetaColors(fullThemeName.value)
      } else {
        setHtmlMetaColors()
      }
    })

    onMounted(() => {
      msColor = document.querySelector('[name="msapplication-TileColor"]')
      themeColor = document.querySelector('[name="theme-color"]')
      maskIcon = document.querySelector('[rel="mask-icon"]')

      if (enabled.value && metaColors.value) {
        window.addEventListener('load', () => {
          setHtmlMetaColors(fullThemeName.value)
        })
      }
    })

    return {
      prefix,
      theme,
      enabled,
      metaColors,
      themeTarget,
      fullThemeName,
      getThemeName,
      getAncestorTheme,
      setMicrosoftColors,
      setThemeColors,
      setMaskColors,
      setHtmlMetaColors
    }
  }
})
