import { computed, defineComponent, onMounted, ref, watch } from 'vue'

export default defineComponent({
  setup: (props, ctx) => {
    const root = ref<HTMLElement | null>(null);

    let mdHasFocus = false
    let hasEvents = false
    let eventTarget: EventTarget | null = null
    let supportsPassiveEvent: boolean | { passive: boolean } = false
    let MdFocused = ref<EventTarget | null>(null)

    const focusedElement = computed(() => {
      return MdFocused.value
    });

    function checkPassiveEventSupport() {
      try {
        var opts = Object.defineProperty({}, 'passive', {
          get() {
            supportsPassiveEvent = { passive: true }
          }
        })
        window.addEventListener('ghost', () => { }, opts)
      } catch (e) { }
    }

    function setKeyboardInteraction({ keyCode, target }: KeyboardEvent) {
      MdFocused.value = target
    }

    function setMouseAndTouchInteraction(event: TouchEvent) {
      MdFocused.value = null
    }

    function createKeyboardEvents() {
      eventTarget?.addEventListener('keyup', <EventListenerOrEventListenerObject>setKeyboardInteraction)
    }

    function createPointerEvents() {
      eventTarget?.addEventListener('pointerup', <EventListenerOrEventListenerObject>setMouseAndTouchInteraction)
    }

    function createMSPointerEvents() {
      eventTarget?.addEventListener('MSPointerUp', <EventListenerOrEventListenerObject>setMouseAndTouchInteraction)
    }

    function createMouseAndTouchEvents() {
      eventTarget?.addEventListener('mouseup', <EventListenerOrEventListenerObject>setMouseAndTouchInteraction)

      if ('ontouchend' in window) {
        eventTarget?.addEventListener('touchend', <EventListenerOrEventListenerObject>setMouseAndTouchInteraction, supportsPassiveEvent)
      }
    }

    function bindEvents() {
      if (window.PointerEvent) {
        createPointerEvents()
      } else if (window.MSPointerEvent) {
        createMSPointerEvents()
      } else {
        createMouseAndTouchEvents()
      }

      createKeyboardEvents()
    }

    function createEvents() {
      if (!hasEvents) {
        eventTarget = document.body
        checkPassiveEventSupport()
        bindEvents()
        hasEvents = true
      }
    }

    watch(focusedElement, (el) => {
      mdHasFocus = el === root.value
    })

    onMounted(() => {
      createEvents();
    })

    return {
      mdHasFocus,
      focusedElement
    }
  },
})