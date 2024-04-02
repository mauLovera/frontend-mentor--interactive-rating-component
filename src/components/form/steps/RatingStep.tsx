import StarIcon from "@/components/icons/StarIcon"
import RatingButton from "@/components/form/RatingButton"

interface Props {
  handleInputChange: (value: string) => void
}

export default function RatingStep({ handleInputChange }: Props) {
  return (
    <>
      <div className="mb-[32px] flex aspect-square h-[50px] items-center justify-center rounded-full bg-neutral-dark-blue w-fit">
        <StarIcon />
      </div>
      <h1 className="mb-[10px] text-[28px] font-bold tracking-[calc(-0.5_*_0.01em)]">
        How did we do?
      </h1>
      <p className="mb-[26px] leading-[157%] text-neutral-light-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <fieldset className="mb-[30px] flex justify-between text-lg font-bold">
        {[...Array(5)].map((_, idx) => (
          <RatingButton key={idx} value={idx + 1} onClick={handleInputChange} />
        ))}
      </fieldset>
      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-[30px] bg-primary-orange py-3 align-middle uppercase tracking-[calc(15_*_0.01em)] transition-colors hover:bg-neutral-white hover:text-primary-orange"
      >
        <span className="relative top-0.5">Submit</span>
      </button>
    </>
  )
}
