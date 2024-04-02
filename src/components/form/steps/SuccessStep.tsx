import ThankYouIcon from "@/components/icons/ThankYouIcon"

export default function SuccessStep({ rating }: { rating: string }) {
  return (
    <>
      <div className="self-center mb-[30px]">
        <ThankYouIcon />
      </div>
      <div className="rounded-[30px] bg-neutral-dark-blue text-center text-primary-orange py-1 px-4 w-fit self-center mb-[30px]">
        <span className="relative top-0.5">
          You selected {rating} out of 5
        </span>
      </div>
      <h2 className="text-center text-[28px] mb-4 font-bold">Thank you!</h2>
      <p className="text-center text-neutral-light-grey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </>
  )
}
