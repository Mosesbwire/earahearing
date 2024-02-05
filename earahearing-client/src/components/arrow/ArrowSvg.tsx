
import { motion } from 'framer-motion'
import { SVGProps } from "react"
export const ArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={343}
    // height={679}
    viewBox="0 0 343 679"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="arrow">
      <motion.g 
      animate={{y: [-60, 0, -60]}}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      id="arrow-icon">
        <g id="Group">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M170 679L343 383L235 384V0H104V384H0L170 679Z"
            fill="#FFA73F"
          />
        </g>
      </motion.g>
    </g>
  </svg>
)

