import Title from '../components/Title'
export default function LongDistance() {
  return (
    <>
      <div className="wrap_center  px-4 ">
        <Title size="uppercase text-2xl font-bold" text="Long distance" />
        <div className="flex flex-col items-center  text-xl md:flex-row lg:px-14">
          <p className=" w-full leading-7 md:w-[50%]">
            LOCAL / LONG DISTANCE MOVING We offer two cross country long
            distance moving options to meet your budget and timeframes –
            consolidated shipping and exclusive express long distance moving.
            Get in touch with our team to discuss the best option for you. Call
            us at{' '}
            <span className="py-[2px] px-[4px] text-[18px] font-bold text-red-500">
              934-200-8161
            </span>
            or fill this form to get a free moving quote with a guaranteed flat
            rate price.
          </p>
          <div className="flex  w-3/6 justify-center ">
            <img src="./images/map.svg" alt="long distance" />
          </div>
        </div>
      </div>
    </>
  )
}
