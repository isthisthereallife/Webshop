import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Footer.module.css"
import copyLeft from "../images/Copyleft_white.svg"
function Footer() {
  return (
    <div className="footer">
      <footer className="footer bg-white relative pt-1 border-b-2 border-red-700">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <Link
                  href="https://github.com/isthisthereallife"
                  className="text-yellow-700  text-md hover:text-red-500"
                >
                  Magnus
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  href="https://github.com/H0nken"
                  className="text-yellow-700  text-md hover:text-red-500"
                >
                  Jonas
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  href="https://github.com/anderbecks"
                  className="text-yellow-700  text-md hover:text-red-500"
                >
                  Ludvig
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <div className=" text-4xl text-white-400 font-bold mb-2" >
                <div className={styles.copyLeft}>
                  <Image height="50px" width="50px" src={copyLeft} /> BR3WDOG</div>
              </div>
            </div>
          </div>
        </div>
      </footer >
    </div >
  )
}

export default Footer
