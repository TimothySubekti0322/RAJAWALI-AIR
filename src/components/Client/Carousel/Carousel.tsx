import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";




// import required modules
import { Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <div className="mx-[5rem] mt-[3.12rem]">
        <p className="w-96 h-11 text-neutral-600 text-3xl font-bold font-['Open Sans'] leading-10 sm:container sm:mx-auto">OFFERS</p>
        <p className="w-96 h-5 text-neutral-500 text-base font-semibold font-['Open Sans'] leading-normal">Exclusive Deals for Our Special Customers</p>
        <hr className="w-full h-0 border-4 border-blue-500 mt-[1.87rem] sm:container sm:mx-auto" />
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 250,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 160,
          },
          1280: {
            slidesPerView: 4.2,
            spaceBetween: 160,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: -400,
          }
        }}
        modules={[Pagination]}
        className="mt-20 pb-12"
      >
        <SwiperSlide className="container 2xl:ml-20">
          <div className="card w-[20rem] h-[22.5] bg-base-100 rounded-none rounded-xl shadow-lg">
            <figure>
              <img className="w-[20rem] h-[15.9375rem]"
                src="/src/assets/raja.png"
                alt="Raja Ampat"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-600 text-base font-bold font-['Roboto'] leading-snug">Raja Ampat</h2>
              <p className="text-neutral-500 text-xs font-semibold font-['Roboto'] leading-snug">Semarang (SRG) - Raja Ampat (RJM)</p>
              <p className="w-44 h-7 text-blue-500 text-base font-bold font-['Roboto'] leading-snug">IDR 1.259.000,00</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className="card w-[20rem] h-[22.5] bg-base-100 rounded-none rounded-xl shadow-lg">
            <figure>
              <img className="w-[20rem] h-[15.9375rem]"
                src="/src/assets/jakarta.png"
                alt="Raja Ampat"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-600 text-base font-bold font-['Roboto'] leading-snug">Jakarta</h2>
              <p className="text-neutral-500 text-xs font-semibold font-['Roboto'] leading-snug">Semarang (SRG) - Jakarta (CGK)</p>
              <p className="w-44 h-7 text-blue-500 text-base font-bold font-['Roboto'] leading-snug">IDR 359.000,00</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className="card w-[20rem] h-[22.5] bg-base-100 rounded-none rounded-xl shadow-lg">
            <figure>
              <img className="w-[20rem] h-[15.9375rem]"
                src="/src/assets/bali.png"
                alt="Raja Ampat"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-600 text-base font-bold font-['Roboto'] leading-snug">Bali</h2>
              <p className="text-neutral-500 text-xs font-semibold font-['Roboto'] leading-snug">Jakarta (CGK) - Bali (DPS)</p>
              <p className="w-44 h-7 text-blue-500 text-base font-bold font-['Roboto'] leading-snug">IDR 509.000,00</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className="card w-[20rem] h-[22.5] bg-base-100 rounded-none rounded-xl shadow-lg">
            <figure>
              <img className="w-[20rem] h-[15.9375rem]"
                src="/src/assets/singapure.png"
                alt="Raja Ampat"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-600 text-base font-bold font-['Roboto'] leading-snug">Singapore</h2>
              <p className="text-neutral-500 text-xs font-semibold font-['Roboto'] leading-snug">Jakarta (CGK) - Singapore (SIN)</p>
              <p className="w-44 h-7 text-blue-500 text-base font-bold font-['Roboto'] leading-snug">IDR 959.000,00</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className="card w-[20rem] h-[22.5] bg-base-100 rounded-none rounded-xl shadow-lg">
            <figure>
              <img className="w-[20rem] h-[15.9375rem]"
                src="/src/assets/thailand.png"
                alt="Raja Ampat"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-600 text-base font-bold font-['Roboto'] leading-snug">Thailand</h2>
              <p className="text-neutral-500 text-xs font-semibold font-['Roboto'] leading-snug">Jakarta (CGK) - Bangkok (BKK)</p>
              <p className="w-44 h-7 text-blue-500 text-base font-bold font-['Roboto'] leading-snug">IDR 729.000,00</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-[20rem] h-[22.5] bg-base-100 rounded-none rounded-xl shadow-lg">
            <figure>
              <img className="w-[20rem] h-[15.9375rem]"
                src="/src/assets/bajo.png"
                alt="Raja Ampat"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-600 text-base font-bold font-['Roboto'] leading-snug">Labuan Bajo</h2>
              <p className="text-neutral-500 text-xs font-semibold font-['Roboto'] leading-snug">Jakarta (CGK) - Labuan Bajo (LBJ)</p>
              <p className="w-44 h-7 text-blue-500 text-base font-bold font-['Roboto'] leading-snug">IDR 1.663.000,00</p>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Carousel;
