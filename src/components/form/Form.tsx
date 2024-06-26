"use client"
import { useState } from "react"

import RatingStep from "@/components/form/steps/RatingStep"
import SuccessStep from "@/components/form/steps/SuccessStep"
import useMultiStepForm from "@/hooks/useMultiStepForm"

interface FormData {
  data: {
    rating: string | null
  }
  errors: {
    rating: boolean | null
  }
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    data: {
      rating: null,
    },
    errors: {
      rating: null,
    },
  })

  function handleInputChange(value: string) {
    setFormData((previousFormData) => ({
      ...previousFormData,
      data: {
        rating: value,
      },
      errors: {
        rating: false,
      },
    }))
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (formData.data.rating) {
      next()
    } else {
      setFormData((previousFormData) => ({
        ...previousFormData,
        errors: {
          rating: true,
        },
      }))
    }
  }

  const { currentStep, next } = useMultiStepForm({
    steps: [
      <RatingStep key={"1"} handleInputChange={handleInputChange} />,
      <SuccessStep key={"2"} rating={formData.data.rating!} />,
    ],
  })

  return (
    <>
      <div
        className={`mb-4 w-full rounded-[30px] px-3 py-1 opacity-0 ring-2 ring-neutral-very-dark-blue ${formData.errors.rating && "opacity-100"} text-center transition-opacity duration-100`}
      >
        <span
          className={
            "relative top-0.5 text-sm text-primary-orange sm:text-base"
          }
        >
          Please select a rating before attempting to procced
        </span>
      </div>
      <form
        className=" relative flex max-w-[415px] flex-col rounded-[30px] bg-neutral-very-dark-blue p-[32px]"
        onSubmit={handleFormSubmit}
      >
        {currentStep}
      </form>
    </>
  )
}
