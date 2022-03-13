import Link from 'next/link'
import { motion } from 'framer-motion'
import BreadCrump from './Breadcrump'

import { useRouter } from 'next/router'
export default function Hero() {
  const router = useRouter()
  return (
    <>
      <section className="bg-gradient-to-r from-[#29A5E9] to-[#1678AE] ">
        <div className=" wrap_center  w-full bg-gradient-to-r from-[#29A5E9] to-[#1678AE]  ">
          <div className=" flex h-[35vh] w-full   items-center justify-center bg-[url('/images/asset2.svg')] bg-contain bg-right-top bg-no-repeat md:bg-contain ">
            <div className="sm:mt-50 mt-40 h-auto w-16 flex-grow">
              {/* <motion.h1
                initial={{ y: '-600px', opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: '1', delay: '0.1' },
                }}
                className="  w-full p-4 text-sm font-bold leading-[110%]  text-black sm:bg-transparent md:w-5/6 md:text-5xl lg:w-1/2"
              >
                Proud to help everyone no matter the size of the move or
                distance
              </motion.h1> */}
              <div className=" flex w-full flex-row items-center space-x-8 pl-4">
                <div>
                  <Link href="/getquote/?step-1">
                    <a className="block flex-none rounded-sm bg-white px-4 py-3 font-bold uppercase duration-300  ease-in hover:scale-110 md:py-3 md:px-4">
                      Get a free quote
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="tel:934-200-8161">
                    <a className="flex-none rounded-sm bg-primary  px-4 py-4 text-sm font-semibold  uppercase text-white ">
                      Call now
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="h-[100%] w-[650px] bg-[url('/images/asset.svg')] bg-cover bg-top bg-no-repeat "></div> */}
          </div>
        </div>
        {/* <div className="hidden h-[40vh] w-full items-center justify-center bg-gradient-to-r from-[#667eea] to-[#764ba2] lg:flex">
        <div className='h-[350px]'>

<img src="/images/try.png" alt="" height="auto" width={720} />
        </div>
      </div> */}
      </section>
      <BreadCrump pathname={router.pathname.slice(1)} />
    </>
  )
}

