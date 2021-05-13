import { computed, defineComponent, onMounted, onBeforeUnmount } from "vue"

export default defineComponent({
  props: {
    mdSwipeable: Boolean,
    mdSwipeThreshold: {
      type: Number,
      default: 150
    },
    mdSwipeRestraint: {
      type: Number,
      default: 100
    },
    mdSwipeTime: {
      type: Number,
      default: 300
    }
  },
  setup: (props) => {
    let swipeStart = false
    let swipeStartTime: Date | null = null
    let swiped: string | null = null
    let touchPosition = {
      startX: 0,
      startY: 0
    }

    const getSwipedElement = computed(() => { this.mdSwipeElement || window })

    const handleTouchStart = function (event: TouchEvent) {
      touchPosition.startX = event.touches[0].screenX
      touchPosition.startY = event.touches[0].screenY
      swipeStartTime = new Date()

      swipeStart = true
    }

    /* eslint-disable complexity */
    const handleTouchMove = function (event: TouchEvent) {
      if (swipeStart) {
        const touchmoveX = event.touches[0].screenX
        const touchmoveY = event.touches[0].screenY

        const actualX = touchmoveX - touchPosition.startX
        const actualY = touchmoveY - touchPosition.startY

        const elapsedTime = (new Date()).getTime() - (<Date>swipeStartTime).getTime()

        if (elapsedTime <= props.mdSwipeTime) {
          if (Math.abs(actualX) >= props.mdSwipeThreshold && Math.abs(actualY) <= props.mdSwipeRestraint) {
            swiped = actualX < 0
              ? 'left'
              : 'right'
          } else if (Math.abs(actualY) >= props.mdSwipeThreshold && Math.abs(actualX) <= props.mdSwipeRestraint) {
            swiped = actualY < 0
              ? 'up'
              : 'down'
          }
        }
      }
    } /* eslint-enable complexity */
    const handleTouchEnd = function () {
      touchPosition = {
        startX: 0,
        startY: 0
      }
      swiped = null
      swipeStart = false
    }

    onMounted(() => {
      if (props.mdSwipeable) {
        this.getSwipeElement.addEventListener('touchstart', handleTouchStart, false)
        this.getSwipeElement.addEventListener('touchend', handleTouchEnd, false)
        this.getSwipeElement.addEventListener('touchmove', handleTouchMove, false)
      }
    })

    onBeforeUnmount(() => {
      if (props.mdSwipeable) {
        this.getSwipeElement.removeEventListener('touchstart', handleTouchStart, false)
        this.getSwipeElement.removeEventListener('touchend', handleTouchEnd, false)
        this.getSwipeElement.removeEventListener('touchmove', handleTouchMove, false)
      }
    })

    return {
      swipeStart,
      swipeStartTime,
      swiped,
      touchPosition,
      getSwipedElement,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd
    }
  },
})