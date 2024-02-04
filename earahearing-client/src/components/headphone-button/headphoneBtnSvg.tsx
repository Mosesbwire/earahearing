import { SVGProps } from "react"
import { motion } from 'framer-motion'
type propsType = SVGProps<SVGSVGElement> & {
  isActive: boolean
}
export const HeadPhoneBtnSvg = ({isActive, ...rest}: propsType) => {
  
  return (
    <svg
      // width={130}
      // height={88}
      viewBox="0 0 130 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g id="HEADPHONE CLICKED 1" clipPath="url(#clip0_63_156)">
        <g id="headphone">
          <g id="Group">
            <g id="Group_2">
              <path
                id="Vector"
                d="M31.0001 46.3003V75.8003C31.0001 76.9003 30.2 77.8003 29.2 77.7003C22.2 76.7003 16.8 69.6003 16.8 61.0003C16.8 52.4003 22.2 45.4003 29.2 44.3003C30.2 44.3003 31.0001 45.2003 31.0001 46.3003Z"
                fill="#01556A"
              />
              <path
                id="Vector_2"
                d="M35.3001 79.4002C34.1001 79.4002 33.1001 78.2002 33.1001 76.8002V45.3002C33.1001 43.8002 34.1001 42.7002 35.3001 42.7002C36.5001 42.7002 37.5001 43.9002 37.5001 45.3002V76.8002C37.5001 78.3002 36.5001 79.4002 35.3001 79.4002Z"
                fill="#01556A"
              />
            </g>
            <path
              id="Vector_3"
              d="M99.4 43.3C99.4 44.4 99.4 45.5 99.3 46.6H95.8C95.9 45.5 95.9 44.4 95.9 43.3C95.9 39.9 95.5 36.6 94.8 33.4H91.7C88.1 18.6 76.6 7.70001 62.9 7.70001C49.2 7.70001 37.7001 18.6 34.0001 33.4H30.9C30.2 36.6 29.8 39.9 29.8 43.3C29.8 44.4 29.8 45.5 29.9 46.6H26.4C26.3 45.5 26.3 44.4 26.3 43.3C26.3 19.4 42.6 0 62.8 0C83 0 99.4 19.4 99.4 43.3Z"
              fill="#01556A"
            />
            <g id="Group_3">
              <path
                id="Vector_4"
                d="M94.8 46.3003V75.8003C94.8 76.9003 95.6 77.8003 96.6 77.7003C103.6 76.7003 109 69.6003 109 61.0003C109 52.4003 103.6 45.4003 96.6 44.3003C95.6 44.3003 94.8 45.2003 94.8 46.3003Z"
                fill="#01556A"
              />
              <path
                id="Vector_5"
                d="M90.5001 79.4002C91.7001 79.4002 92.7001 78.2002 92.7001 76.8002V45.3002C92.7001 43.8002 91.7001 42.7002 90.5001 42.7002C89.3001 42.7002 88.3001 43.9002 88.3001 45.3002V76.8002C88.2001 78.3002 89.2001 79.4002 90.5001 79.4002Z"
                fill="#01556A"
              />
            </g>
          </g>
        </g>
        { isActive ? <motion.g id="sound"
          animate={{opacity: [1, 0.4]}}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <path
            id="Vector_6"
            d="M120.3 86.5998C133.3 70.1998 130.6 46.2998 114.1 33.2998"
            stroke="#FFA73F"
            strokeWidth={3}
            strokeMiterlimit={10}
          />
          <path
            id="Vector_7"
            d="M114.7 77.3999C123.2 66.5999 121.4 50.9999 110.6 42.3999"
            stroke="#FFA73F"
            strokeWidth={3}
            strokeMiterlimit={10}
          />
          <path
            id="Vector_8"
            d="M11.7 33.1001C-2.89998 48.2001 -2.49995 72.2001 12.6 86.8001"
            stroke="#FFA73F"
            strokeWidth={3}
            strokeMiterlimit={10}
          />
          <path
            id="Vector_9"
            d="M16.4 42.7998C6.80004 52.6998 7.10008 68.3998 17.0001 77.9998"
            stroke="#FFA73F"
            strokeWidth={3}
            strokeMiterlimit={10}
          />
        </motion.g>: null}
      </g>
      <defs>
        <clipPath id="clip0_63_156">
          <rect width={129.5} height={87.5} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

