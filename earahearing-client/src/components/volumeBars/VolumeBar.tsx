import {motion} from 'framer-motion'

import { SVGProps } from "react"
const volumeBarPaths = [
    "M3.80794 51.3599C1.90394 51.3599 0.356934 50.3199 0.356934 49.0399V42.3999C0.356934 41.7599 0.713935 41.1999 1.42794 40.7199C2.14194 40.2399 2.97494 39.9999 3.80794 39.9999C5.59294 39.9999 7.37794 40.8799 7.37794 42.3199V48.9599C7.25894 50.3199 5.71194 51.3599 3.80794 51.3599Z",
    "M17.493 51.3599C15.589 51.3599 14.042 50.3199 14.042 49.0399V32.0799C14.042 31.4399 14.399 30.8799 15.113 30.3999C15.946 29.8399 16.898 29.6799 17.612 29.6799C19.397 29.6799 21.182 30.5599 21.182 31.9999V48.9599C20.944 50.3199 19.397 51.3599 17.493 51.3599Z",
    "M30.9451 51.36C29.0411 51.36 27.4941 50.32 27.4941 49.04V21.76C27.4941 21.12 27.8511 20.56 28.5651 20.08C29.3981 19.52 30.3501 19.36 31.0641 19.36C32.8491 19.36 34.6341 20.24 34.6341 21.68V48.96C34.5151 50.32 32.8491 51.36 30.9451 51.36Z",
    "M30.9451 51.36C29.0411 51.36 27.4941 50.32 27.4941 49.04V21.76C27.4941 21.12 27.8511 20.56 28.5651 20.08C29.3981 19.52 30.3501 19.36 31.0641 19.36C32.8491 19.36 34.6341 20.24 34.6341 21.68V48.96C34.5151 50.32 32.8491 51.36 30.9451 51.36Z",
    "M44.0355 50.5244C42.1315 50.5244 40.5845 49.3304 40.5845 47.8607V16.5392C40.5845 15.8044 40.9415 15.1615 41.6555 14.6104C42.4885 13.9674 43.4405 13.7837 44.1545 13.7837C45.9395 13.7837 47.7245 14.7941 47.7245 16.4474V47.7689C47.6055 49.3304 45.9395 50.5244 44.0355 50.5244Z",
    "M58.3101 50.4713C56.4061 50.4713 54.8591 49.0461 54.8591 47.292V9.90828C54.8591 9.03124 55.2161 8.26383 55.9301 7.60605C56.7631 6.83864 57.7151 6.61938 58.4291 6.61938C60.2141 6.61938 61.9991 7.82531 61.9991 9.79864V47.1824C61.8801 49.0461 60.2141 50.4713 58.3101 50.4713Z",
    "M73.7801 50.4238C71.8761 50.4238 70.3291 48.7932 70.3291 46.7863V4.01394C70.3291 3.01048 70.6861 2.13246 71.4001 1.37986C72.2331 0.501838 73.1851 0.250977 73.8991 0.250977C75.6841 0.250977 77.4691 1.63073 77.4691 3.88851V46.6609C77.3501 48.7932 75.6841 50.4238 73.7801 50.4238Z"
   
]
export const VolumeBars = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={78}
    // height={52}
    viewBox="0 0 78 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Volume-bars">
      <g id="Group">
        {volumeBarPaths.map((path, idx) => (
            <motion.path
                id="vector"
                d={path}
                fill="#01556A"
                key={`key-${idx}`}
            />
        ))}
        {/* <g id="bar-2">
          <path
            id="Vector"
            d="M17.493 51.3599C15.589 51.3599 14.042 50.3199 14.042 49.0399V32.0799C14.042 31.4399 14.399 30.8799 15.113 30.3999C15.946 29.8399 16.898 29.6799 17.612 29.6799C19.397 29.6799 21.182 30.5599 21.182 31.9999V48.9599C20.944 50.3199 19.397 51.3599 17.493 51.3599Z"
            fill="#02718C"
          />
          <path
            id="Vector_2"
            d="M17.3739 29.92C18.9209 29.92 20.5869 30.72 20.5869 32.08V49.04C20.5869 50.24 19.1589 51.2 17.3739 51.2C15.5889 51.2 14.1609 50.24 14.1609 49.04V32.08C14.1609 31.52 14.5179 30.96 15.1129 30.56C15.9459 30.08 16.7789 29.92 17.3739 29.92ZM17.3739 29.52C16.4219 29.52 15.4699 29.76 14.6369 30.24C13.9229 30.72 13.5659 31.36 13.5659 32.08V49.04C13.5659 50.48 15.2319 51.6 17.3739 51.6C19.5159 51.6 21.1819 50.48 21.1819 49.04V32.08C21.3009 30.48 19.3969 29.52 17.3739 29.52Z"
            fill="#02718C"
          />
        </g>
        <g id="bar-3">
          <path
            id="Vector_3"
            d="M30.9451 51.36C29.0411 51.36 27.4941 50.32 27.4941 49.04V21.76C27.4941 21.12 27.8511 20.56 28.5651 20.08C29.3981 19.52 30.3501 19.36 31.0641 19.36C32.8491 19.36 34.6341 20.24 34.6341 21.68V48.96C34.5151 50.32 32.8491 51.36 30.9451 51.36Z"
            fill="#02718C"
          />
        </g>
        <g id="bar-4">
          <path
            id="Vector_4"
            d="M44.0355 50.5244C42.1315 50.5244 40.5845 49.3304 40.5845 47.8607V16.5392C40.5845 15.8044 40.9415 15.1615 41.6555 14.6104C42.4885 13.9674 43.4405 13.7837 44.1545 13.7837C45.9395 13.7837 47.7245 14.7941 47.7245 16.4474V47.7689C47.6055 49.3304 45.9395 50.5244 44.0355 50.5244Z"
            fill="#02718C"
          />
        </g>
        <g id="bar-5">
          <path
            id="Vector_5"
            d="M58.3101 50.4713C56.4061 50.4713 54.8591 49.0461 54.8591 47.292V9.90828C54.8591 9.03124 55.2161 8.26383 55.9301 7.60605C56.7631 6.83864 57.7151 6.61938 58.4291 6.61938C60.2141 6.61938 61.9991 7.82531 61.9991 9.79864V47.1824C61.8801 49.0461 60.2141 50.4713 58.3101 50.4713Z"
            fill="#02718C"
          />
        </g>
        <g id="bar-6">
          <path
            id="Vector_6"
            d="M73.7801 50.4238C71.8761 50.4238 70.3291 48.7932 70.3291 46.7863V4.01394C70.3291 3.01048 70.6861 2.13246 71.4001 1.37986C72.2331 0.501838 73.1851 0.250977 73.8991 0.250977C75.6841 0.250977 77.4691 1.63073 77.4691 3.88851V46.6609C77.3501 48.7932 75.6841 50.4238 73.7801 50.4238Z"
            fill="#02718C"
          />
        </g>
        <g id="bar-1">
          <path
            id="Vector_7"
            d="M3.80794 51.3599C1.90394 51.3599 0.356934 50.3199 0.356934 49.0399V42.3999C0.356934 41.7599 0.713935 41.1999 1.42794 40.7199C2.14194 40.2399 2.97494 39.9999 3.80794 39.9999C5.59294 39.9999 7.37794 40.8799 7.37794 42.3199V48.9599C7.25894 50.3199 5.71194 51.3599 3.80794 51.3599Z"
            fill="#02718C"
          />
        </g> */}
      </g>
    </g>
  </svg>
)

