import type React from "react"

interface ResidenciaLogoProps {
  className?: string
}

export const ResidenciaLogo: React.FC<ResidenciaLogoProps> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="200"
      height="50"
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="50" rx="8" fill="#295548" />
      <path d="M20 35V15H25.5L30 25L34.5 15H40V35H35V22.5L30.5 32.5H29.5L25 22.5V35H20Z" fill="white" />
      <path d="M45 35V15H60V19H50V23H58V27H50V31H60V35H45Z" fill="white" />
      <path d="M65 35V15H70V31H80V35H65Z" fill="white" />
      <path d="M85 35V15H90V23H95L100 15H105L98.5 25L105 35H100L95 27H90V35H85Z" fill="white" />
      <path d="M110 35V15H125V19H115V23H123V27H115V35H110Z" fill="white" />
      <path d="M130 35V15H145V19H135V23H143V27H135V31H145V35H130Z" fill="white" />
      <path d="M150 35V15H155V31H165V35H150Z" fill="white" />
      <path d="M170 35V15H185V19H175V23H183V27H175V31H185V35H170Z" fill="white" />
    </svg>
  )
}

