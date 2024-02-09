import { motion } from "framer-motion"
import { SVGProps } from "react"

type propsType = SVGProps<SVGSVGElement> & {
    isActive: boolean,
    isSelected: boolean
  }
export const HeadphoneSvg = ({isActive,isSelected, ... rest}: propsType) => (
  <svg
    // width={160}
    // height={100}
    viewBox="0 0 160 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g id="headphone-system">
      <g id="headphone">
        <g id="Group">
          <g id="Group_2">
            <g id="Group_3">
              <path
                id="Vector"
                d="M38.659 54.4335V89.116C38.659 90.4092 37.6641 91.4673 36.4205 91.3497C27.7154 90.1741 21 81.8268 21 71.7159C21 61.6051 27.7154 53.3754 36.4205 52.0822C37.6641 51.9646 38.659 53.0227 38.659 54.4335Z"
                fill={`${isSelected ? "#ff8c00" : "#01556A"}`}
              />
              <path
                id="Vector_2"
                d="M44.0064 93.3485C42.5141 93.3485 41.2705 91.9377 41.2705 90.2917V53.2579C41.2705 51.4944 42.5141 50.2012 44.0064 50.2012C45.4987 50.2012 46.7423 51.612 46.7423 53.2579V90.2917C46.7423 91.9377 45.4987 93.3485 44.0064 93.3485Z"
                fill={`${isSelected ? "#ff8c00" : "#01556A"}`}
              />
            </g>
            <path
              id="Vector_3"
              d="M123.721 50.9068C123.721 52.2 123.72 53.4932 123.596 54.7865H119.244C119.368 53.4932 119.368 52.2 119.368 50.9068C119.368 46.9095 118.87 43.0297 118 39.2676H114.145C109.668 21.75 95.3667 9.0527 78.3295 9.0527C61.2923 9.0527 46.8667 21.75 42.3897 39.2676H38.5346C37.6641 43.0297 37.1667 46.9095 37.1667 50.9068C37.1667 52.2 37.1667 53.4932 37.291 54.7865H32.9384C32.8141 53.4932 32.8141 52.2 32.8141 50.9068C32.9384 22.8081 53.209 0 78.3295 0C103.45 0 123.721 22.8081 123.721 50.9068Z"
              fill={`${isSelected ? "#ff8c00" : "#01556A"}`}
            />
            <g id="Group_4">
              <path
                id="Vector_4"
                d="M118 54.4335V89.116C118 90.4092 118.995 91.4673 120.238 91.3497C128.944 90.1741 135.659 81.8268 135.659 71.7159C135.659 61.6051 128.944 53.3754 120.238 52.0822C118.995 51.9646 118 53.0227 118 54.4335Z"
                fill={`${isSelected ? "#ff8c00" : "#01556A"}`}
              />
              <path
                id="Vector_5"
                d="M112.653 93.3485C114.145 93.3485 115.388 91.9377 115.388 90.2917V53.2579C115.388 51.4944 114.145 50.2012 112.653 50.2012C111.16 50.2012 109.917 51.612 109.917 53.2579V90.2917C109.792 91.9377 111.036 93.3485 112.653 93.3485Z"
                fill={`${isSelected ? "#ff8c00" : "#01556A"}`}
              />
            </g>
          </g>
        </g>
      </g>
      {isActive ? <motion.g id="sound"
        animate={{opacity: [1, 0.2]}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <path
          id="Vector_6"
          d="M20.0164 55C10.4164 64.9 10.7164 80.6 20.6164 90.2"
          stroke="#ff8c00"
          strokeWidth={4}
          strokeMiterlimit={10}
        />
        <path
          id="Vector_7"
          d="M140.1 90C148.6 79.2 146.8 63.6 136 55"
          stroke="#ff8c00"
          strokeWidth={4}
          strokeMiterlimit={10}
        />
        <path
          id="Vector_8"
          d="M11.6928 45C-2.90717 60.1 -2.50717 84.1 12.5928 98.7"
          stroke="#ff8c00"
          strokeWidth={4}
          strokeMiterlimit={10}
        />
        <path
          id="Vector_9"
          d="M150.2 98.3C163.2 81.9 160.5 58 144 45"
          stroke="#ff8c00"
          strokeWidth={4}
          strokeMiterlimit={10}
        />
      </motion.g>: null}
    </g>
  </svg>
)

