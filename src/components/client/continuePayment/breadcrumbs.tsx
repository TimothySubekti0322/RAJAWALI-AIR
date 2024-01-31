
const Breadcrumbs = () => {
    return (
      <div className="flex items-center gap-x-1 text-black text-[14px]">
              <div className="mr-1 flex items-center justify-center mt-4 w-6 h-6 bg-[#1E90FF] rounded-full">
                  <p className=" text-[15px] font-normal text-white items-center">1</p>
              </div>
              <p className="mt-4 font-semibold text-sm ">Selected Method</p>
              <p className="text-xl mt-3.5 font-normal"> - </p>
              <div className="mx-1 flex items-center justify-center mt-4 w-6 h-6 border border-[#9E9E9E] rounded-full">
                  <p className=" text-[15px] font-normal text-[#9E9E9E] items-center">2</p>
              </div>
              <p className="mt-4 font-semibold text-sm">Pay</p>
              <p className="text-xl mt-3.5 font-normal"> - </p>
              <div className="mx-1 flex items-center justify-center mt-4 w-6 h-6 border border-[#9E9E9E] rounded-full">
                  <p className=" text-[15px] font-normal text-[#9E9E9E] items-center">3</p>
              </div>
              <p className="mt-4 font-semibold text-sm">Complete</p>
          </div>
    )
  }
  
  export default Breadcrumbs
  