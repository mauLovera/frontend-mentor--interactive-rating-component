import { useState } from 'react'

interface Props {
  steps: React.ReactNode[]
}

/**
 * @function useMultiStepForm
 * @returns Methods for navigating through a multi-step form.
 * @params {steps: ReactNode[]} An array of React Elements
 * */

export default function useMultiStepForm({ steps }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  /**
   * @method next
   * @description Increment the current step index.
   **/

  function next() {
    setCurrentIndex((i) => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  /**
   * @method back
   * @description Decrement the current step index.
   **/

  function back() {
    setCurrentIndex((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }

  /**
   * @method goTo
   * @description Go to the passed index within steps array.
   **/

  function goTo(index: number) {
    setCurrentIndex((i) => {
      if (index > steps.length - 1 || index < 0) return i
      return index
    })
  }

  /**
   * @method getProgress
   * @description Get the current percentage number
   * of completion on form.
   * @returns number
   */

  function getProgress(): number {
    return ((currentIndex + 1) / steps.length) * 100
  }

  return {
    currentIndex,
    currentStep: steps[currentIndex],
    isStart: currentIndex === 0,
    isEnd: currentIndex === steps.length - 1,
    next, 
    back,
    goTo,
    getProgress
  }
}