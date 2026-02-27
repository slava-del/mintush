export function Signature({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 45C20 15 35 10 45 25C55 40 60 20 70 15C80 10 85 35 95 30C105 25 110 10 120 20C130 30 135 45 145 35C155 25 160 15 170 20C175 23 180 30 190 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
