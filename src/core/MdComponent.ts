import MdTheme from 'core/MdTheme'
import { computed, ExtractPropTypes } from 'vue'

export default function () {
  let sharedProps = {
    mdTheme: String
  };

  type Props = Readonly<ExtractPropTypes<typeof sharedProps>>

  const proped = (props: Readonly<Props & Record<string, unknown>>) => {
    const $mdActiveTheme = computed(() => {
      const { enabled, getThemeName, getAncestorTheme } = MdTheme

      if (enabled && props.mdTheme !== null) {
        return getThemeName(props.mdTheme || getAncestorTheme())
      }

      return null
    })
    return { $mdActiveTheme }
  }
  return { sharedProps, proped };
}
