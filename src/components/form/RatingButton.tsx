import { MouseEvent } from "react"

export default function RatingButton({
  value,
  onClick,
}: {
  value: number
  onClick: (value: string) => void
}) {
  return (
    <div onClick={() => onClick(`${value}`)}>
      <input
        type="radio"
        value={value}
        id={`${value}`}
        name="rating"
        className="peer hidden"
      />
      <label
        htmlFor={`${value}`}
        className="flex aspect-square h-[50px] cursor-pointer items-center justify-center rounded-full bg-neutral-dark-blue transition-colors hover:bg-neutral-medium-grey peer-checked:bg-primary-orange"
      >
        <span className="relative top-0.5">{value}</span>
      </label>
    </div>
  )
}
