const TheBest = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container grid gap-4 grid-cols-2 grid-rows-3 mt-[-3rem] pt-[4.44rem] min-[320px]:grid min-[320px]:grid-cols-1 sm:container sm:mx-auto sm:items-center sm:grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="container sm:mx-auto">
            <img src="/public/images/pramugari.png" alt="" className="sm:w-[600px] sm:h-auto md:w-full md:h-auto" />
          </div>
          <div className="mr-[5.06rem] sm:items-center sm:mx-6">
            <div className="justify-end w-full text-right">
              <span className="text-neutral-600 text-3xl font-bold font-['Open Sans'] leading-10">
                We{" "}
              </span>
              <span className="text-blue-500 text-3xl font-bold font-['Open Sans'] leading-10">
                Provide
              </span>
              <span className="text-neutral-600 text-3xl font-bold font-['Open Sans'] leading-10">
                {" "}
                The Best
              </span>
            </div>
            <div className="grid justify-end w-full font-['Open Sans'] mt-[0.62rem] text-black">
              Embark on a journey with our budget-friendly flight to a favorite
              destination
            </div>

            <div className="flex mt-[2.94rem]">
              <div className="flex-initial mr-[1.06rem] w-11 h-11 p-2 bg-blue-500 rounded-full justify-center items-center inline-flex mt-4">
                <img src="/public/images/search.png" alt="" />
              </div>
              <div className="flex-1 w-32">
                <p className="w-96 h-6 text-neutral-600 text-base font-bold font-['Open Sans'] leading-snug text-justify">
                  Search and Compare
                </p>
                <p className="text-black">
                  Allows you to search for flights by various parameters like
                  departure and arrival cities, dates, number of passengers, etc
                </p>
              </div>
            </div>

            <div className="flex mt-7">
              <div className="flex-initial mr-[1.06rem] w-11 h-11 p-2 bg-blue-500 rounded-full justify-center items-center inline-flex mt-4">
                <img src="/public/images/carbon_request-quote.png" alt="" />
              </div>
              <div className="flex-1 w-32 ">
                <p className="w-96 h-6 text-neutral-600 text-base font-bold font-['Open Sans'] leading-snug text-justify">
                  Fulfill your Request
                </p>
                <p className="text-black">
                  We offer online seat selection with complete information, meal
                  selection, and also inform estimated baggage prices{" "}
                </p>
              </div>
            </div>

            <div className="flex mt-7">
              <div className="flex-initial mr-[1.06rem] w-11 h-11 p-2 bg-blue-500 rounded-full justify-center items-center inline-flex mt-2">
                <img src="/public/images/plane.png" alt="" />
              </div>
              <div className="flex-1 w-32">
                <p className="w-96 h-6 text-neutral-600 text-base font-bold font-['Open Sans'] leading-snug text-justify">
                  Multi-city And Stopover Options
                </p>
                <p className="text-black">
                  Allows you to book complete routes involving multiple cities
                  or layovers
                </p>
              </div>
            </div>

            <div className="flex mt-7">
              <div className="flex-initial mr-[1.06rem] w-11 h-11 p-2 bg-blue-500 rounded-full justify-center items-center inline-flex mt-2">
                <img src="/public/images/phone.png" alt="" />
              </div>
              <div className="flex-1 w-32">
                <p className="w-96 h-6 text-neutral-600 text-base font-bold font-['Open Sans'] leading-snug text-justify">
                  Fast Response Call Center
                </p>
                <p className="text-black">
                  We have fast-response call center that will help you anytime
                  you need (24/7 hours)
                </p>
              </div>
            </div>

            <div className="flex mt-7">
              <div className="flex-initial mr-[1.06rem] w-11 h-11 p-2 bg-blue-500 rounded-full justify-center items-center inline-flex mt-2">
                <img src="/public/images/ion_notifications-outline.png" alt="" />
              </div>
              <div className="flex-1 w-32">
                <p className="w-96 h-6 text-neutral-600 text-base font-bold font-['Open Sans'] leading-snug text-justify">
                  Flight Tracking and Notification
                </p>
                <p className="text-black">
                  Keep you informed about delays, cancellations, and gate
                  changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheBest;
