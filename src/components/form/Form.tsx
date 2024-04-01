"use client"
import { useState } from "react"

import RatingStep from "@/components/form/steps/RatingStep"
import SuccessStep from "@/components/form/steps/SuccessStep"
import useMultiStepForm from "@/hooks/useMultiStepForm"

interface FormData {
  rating: string | null
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    rating: null,
  })

  function handleInputChange(value: string) {
    setFormData((previousFormData) => ({
      ...previousFormData,
      rating: value,
    }))
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (formData.rating) {
      next()
    }
  }

  const { currentView, next } = useMultiStepForm({
    views: [
      <RatingStep key={"1"} handleInputChange={handleInputChange} />,
      <SuccessStep key={"2"} rating={formData.rating!} />,
    ],
  })

  return (
    <form
      className="max-w-[413px] rounded-[30px] bg-neutral-very-dark-blue p-[35px] flex flex-col"
      onSubmit={handleFormSubmit}
    >
      {currentView}
    </form>
  )
}
