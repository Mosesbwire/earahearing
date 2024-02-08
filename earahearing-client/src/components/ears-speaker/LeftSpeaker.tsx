
import { SVGProps } from "react"
import { motion } from 'framer-motion'

type propTypes = SVGProps<SVGSVGElement> & {
  isPlaying: boolean
}

export const LeftSpeaker = ({isPlaying, ...rest}: propTypes) => (
  <svg
    // width={278}
    // height={135}
    viewBox="0 0 278 135"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g id="speaker-ear-left">
      <g id="ear">
        <path
          id="a_2_"
          d="M241.304 47.2436C240.103 43.2372 239.101 40.4327 238.3 38.4295C237.098 35.625 235.495 32.8205 233.492 30.2163C232.49 29.0144 230.487 27.0112 227.282 24.6074C224.077 22.4038 221.673 21.0016 219.87 20.601C217.066 19.7997 214.261 19.7997 211.056 20.601C208.051 21.4022 205.447 23.0048 203.244 25.008C201.04 27.0112 198.837 30.4166 196.433 34.8237C194.029 39.431 192.827 43.2372 192.426 46.242C191.625 52.8525 192.026 58.2612 193.027 62.6683C194.029 66.6747 196.032 70.6811 199.037 74.2868C200.439 75.8894 204.445 79.8958 211.256 86.5064M233.292 49.8477C228.885 48.6458 224.678 48.6458 220.671 49.8477C220.07 50.048 219.069 50.4487 217.266 51.25L215.062 52.8525C214.061 53.6538 213.26 54.4551 212.659 55.0561C212.058 55.657 211.657 56.4583 211.056 57.4599C210.655 58.0609 210.255 59.0625 209.854 60.0641M235.295 52.4519C235.295 48.6458 232.891 45.641 227.883 43.0368C222.875 40.4327 216.865 39.2307 209.854 39.2307M241.705 48.8461C242.306 52.0512 241.304 54.2548 238.7 55.657C237.098 56.4583 235.295 56.4583 233.492 56.0577C232.29 55.8573 231.288 56.258 230.687 57.2596C228.885 59.6634 228.885 62.2676 230.687 65.0721C232.691 68.2772 234.894 71.6827 236.897 75.0881C237.098 75.4887 237.298 76.0897 237.498 76.6907C237.699 77.2917 237.699 78.0929 237.899 78.6939"
          stroke="#01556A"
          strokeWidth={1.5}
          strokeMiterlimit={10}
        />
        <g id="Group">
          <path
            id="b_2_"
            d="M251.361 49.3172C250.96 45.3107 250.159 41.104 248.957 37.0976C247.755 32.4902 245.552 28.4838 242.747 24.6778C240.343 21.6729 237.539 19.4694 234.133 17.4662C230.728 15.6633 227.323 14.0607 223.516 12.8588C219.71 11.8572 215.704 11.6569 211.698 12.6585C207.691 13.4598 203.885 15.0623 200.48 17.2659C198.076 18.8684 195.872 20.8716 193.869 23.0752C191.265 25.8796 189.262 29.0848 187.659 32.6906C185.856 36.697 184.454 40.7034 183.653 45.1104C182.851 49.5175 182.25 53.9245 182.05 58.3316C181.85 62.5383 182.25 66.3444 183.252 70.1505C184.254 74.5575 186.057 78.3636 188.46 81.9694C190.864 85.7755 193.869 88.9806 197.475 91.5848C199.879 93.3877 201.882 95.3909 203.885 97.3941C206.89 100.599 209.494 104.005 211.698 107.811C213.901 111.417 216.706 114.822 219.71 117.827C221.513 119.63 223.717 120.832 226.121 121.433C230.528 122.835 234.734 122.634 238.941 120.832C241.145 119.83 242.948 118.628 244.149 116.825C246.754 113.219 248.556 109.413 249.558 105.207C250.159 103.203 250.56 101.2 250.76 99.1969"
            stroke="#01556A"
            strokeWidth={1.5}
            strokeMiterlimit={10}
          />
        </g>
      </g>
      <path
        id="Vector"
        d="M74.1695 0.218633C73.6545 -0.182473 72.9677 0.0180921 72.4526 0.419199L27.1268 37.5216H15.2803C6.86754 37.5216 0 45.5437 0 55.3708V79.6378C0 89.4649 6.86754 97.487 15.2803 97.487H26.9551L72.1092 134.589C72.796 135.191 73.9978 135.191 74.5129 134.188C74.6846 133.787 74.8563 133.386 74.8563 132.985V2.0236C75.028 1.22139 74.6846 0.61974 74.1695 0.218633ZM71.7658 129.174L29.5305 94.4787C29.1871 93.8771 28.672 93.476 28.1569 93.476H15.6237C9.09951 93.476 3.77717 87.2588 3.77717 79.6378V55.3708C3.77717 47.7498 9.09951 41.5326 15.6237 41.5326H28.1569C28.672 41.5326 29.1871 41.1315 29.5305 40.5299L71.7658 5.8341V129.174Z"
        fill="#01556A"
      />
      <g id="volume-bars-left">
        <motion.path
          animate={isPlaying &&{ opacity: [1, 0]}}
          
          transition={{
            delay: 0,
            duration: 1,
            ease: 'linear',
            repeat: Infinity
          }}
          
          id="Vector_2"
          d="M98 33.2451C98 33.2451 120.636 65.2964 98 99.9519"
          stroke={isPlaying ?"#FFA73F": "#01556A" } 
          strokeWidth={2.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <motion.path
          animate={isPlaying && {opacity: [1, 0]}}
          transition={{
            delay: 0.6,
            duration: 1,
            ease: 'linear',
            repeat: Infinity
          }}
          id="Vector_3"
          d="M110.62 15.0159C110.62 15.0159 145.676 64.495 110.62 118.181"
          stroke={isPlaying ?"#FFA73F": "#01556A" } 
          strokeWidth={2.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <motion.path
          animate={isPlaying && {opacity: [1, 0]}}
          transition={{
            delay: 1,
            duration: 1,
            ease: 'linear',
            repeat: Infinity
          }}
          id="Vector_4"
          d="M126.646 5C126.646 5 168.713 63.8942 126.646 128.197"
          stroke={isPlaying ?"#FFA73F": "#01556A" } 
          strokeWidth={2.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
      </g>
    </g>
  </svg>
)

