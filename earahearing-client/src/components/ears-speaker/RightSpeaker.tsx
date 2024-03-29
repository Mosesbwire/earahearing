
import { SVGProps } from "react"
import { motion } from 'framer-motion'

type propsType = SVGProps<SVGSVGElement> & {
  isPlaying: boolean
}
export const RightSpeaker = ({isPlaying, ...rest}: propsType) => (
  <svg
    // width={282}
    // height={135}
    viewBox="0 0 282 135"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g id="speaker-ear-right">
      <path
        id="Vector"
        d="M207.172 134.781C207.688 135.182 208.376 134.982 208.891 134.581L254.277 97.4784H266.139C274.563 97.4784 281.44 89.4563 281.44 79.6292V55.3622C281.44 45.5351 274.563 37.513 266.139 37.513H254.449L209.235 0.410606C208.548 -0.191054 207.344 -0.191029 206.828 0.811738C206.656 1.21284 206.485 1.6139 206.485 2.01501V132.976C206.313 133.779 206.656 134.38 207.172 134.781ZM209.579 5.82557L251.87 40.5213C252.214 41.1229 252.73 41.524 253.246 41.524H265.795C272.328 41.524 277.658 47.7412 277.658 55.3622V79.6292C277.658 87.2502 272.328 93.4674 265.795 93.4674H253.246C252.73 93.4674 252.214 93.8685 251.87 94.4701L209.579 129.166V5.82557Z"
        fill="#01556A"
      />
      <g id="volume-bars-right">
        <motion.path
            animate={isPlaying ? {opacity: [1, 0]}: {opacity: [1, 1]}}
            transition={{
              delay: 0,
              duration: 1,
              ease: 'linear',
              repeat: Infinity
            }}
          id="Vector_2"
          d="M185.342 99.9519C185.342 99.9519 162.706 67.9006 185.342 33.2451"
          stroke={isPlaying ?"#FFA73F": "#01556A" } 
          strokeWidth={2.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <motion.path
            animate={isPlaying ? {opacity: [1, 0]}: {opacity: [1, 1]}}
            transition={{
              delay: 0.6,
              duration: 1,
              ease: 'linear',
              repeat: Infinity
            }}
          id="Vector_3"
          d="M172.722 118.181C172.722 118.181 137.666 68.702 172.722 15.0161"
          stroke={isPlaying ?"#FFA73F": "#01556A" } 
          strokeWidth={2.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <motion.path
            animate={isPlaying ? {opacity: [1, 0]}: {opacity: [1, 1]}}
            transition={{
              delay: 1,
              duration: 1,
              ease: 'linear',
              repeat: Infinity
            }}
          id="Vector_4"
          d="M156.697 128.197C156.697 128.197 114.629 69.3028 156.697 4.99991"
          stroke={isPlaying ?"#FFA73F": "#01556A" } 
          strokeWidth={2.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
      </g>
      <g id="ear">
        <g id="Group">
          <g id="Group_2">
            <path
              id="b"
              d="M37 49.2873C37.4003 45.2841 38.201 41.0807 39.4019 37.0775C40.6029 32.4738 42.8046 28.4706 45.6069 24.6676C48.0088 21.6652 50.811 19.4634 54.2138 17.4618C57.6165 15.6604 61.2194 14.0591 65.0224 12.8581C69.0256 11.8573 72.8287 11.6572 77.032 12.658C81.0352 13.4586 84.8383 15.0599 88.241 17.2617C90.6429 18.863 92.8447 20.8646 94.8463 23.0663C97.4483 25.8686 99.45 29.0711 101.051 32.674C102.853 36.6772 104.254 40.6804 105.054 45.0839C105.855 49.4875 106.456 54.0911 106.656 58.4946C106.856 62.698 106.456 66.7012 105.455 70.5042C104.454 74.9078 102.653 78.7109 100.251 82.3137C97.8487 86.1168 94.8463 89.3193 91.2434 91.9214C88.8415 93.7228 86.8399 95.7244 84.8383 97.726C81.8359 100.929 79.2338 104.331 77.032 108.134C74.8303 111.737 72.028 115.14 68.8254 118.142C67.024 119.944 64.8223 121.145 62.4203 121.745C58.0168 123.146 53.8135 122.946 49.6101 121.145C47.4083 120.144 45.6069 118.743 44.4059 117.142C41.8038 113.539 40.0024 109.736 39.0016 105.532C38.4011 103.531 38.0008 101.529 37.8006 99.5275"
              stroke="#01556A"
              strokeWidth={2.5}
              strokeMiterlimit={10}
            />
          </g>
          <g id="Group_3">
            <path
              id="a"
              d="M46.6077 50.0879C47.8086 46.0847 48.8094 43.0823 49.6101 41.2809C50.811 38.4787 52.4123 35.6764 54.4139 33.0743C55.4147 31.8734 57.4163 29.8718 60.6189 27.2697C63.8215 25.0679 66.2234 23.6668 68.0248 23.2665C70.8271 22.4659 73.8294 22.4659 76.8318 23.2665C79.8342 24.0671 82.4363 25.6684 84.6381 27.67C86.8399 29.6716 89.0416 33.0743 91.4435 37.4778C93.8455 42.0815 95.0464 45.8846 95.4467 48.887C96.2474 55.4923 95.8471 60.8966 94.8463 65.3001C93.8455 69.3033 91.8439 73.3065 88.8415 77.1096C87.4403 78.7108 83.4371 82.7141 76.6317 89.3193M52.6125 55.2921C52.6125 51.4891 55.0144 48.4866 60.0184 45.6844C65.0224 43.0823 71.0272 41.8814 78.0328 41.8814M54.6141 52.69C59.0176 51.489 63.2209 51.489 67.2242 52.69C67.8246 52.8902 68.8255 53.2905 70.6269 54.0911L72.8286 55.6924C73.8294 56.493 74.6301 57.2937 75.2306 57.8942C75.831 58.4947 76.2314 59.2953 76.8318 60.2961C77.2322 60.8966 77.6325 61.8974 78.0328 62.8982M46.2073 51.8894C45.6069 55.0919 46.6077 57.2937 49.2097 58.6948C50.811 59.4954 52.6125 59.4955 54.4139 59.0951C55.6149 58.895 56.6157 59.2953 57.2161 60.2961C59.0176 62.698 59.0176 65.3001 57.2161 68.1023C55.2145 71.3049 53.0128 74.7076 51.0112 78.1104C50.811 78.5107 50.6109 79.1111 50.4107 79.7116C50.2106 80.3121 50.2106 81.1127 50.0104 81.7132"
              stroke="#01556A"
              strokeWidth={1.5}
              strokeMiterlimit={10}
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

