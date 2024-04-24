"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./../slideshow.css";
// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

function SlideShowItem({ title, className, alt, img, children }) {
  return (
    <div className="absolute  bottom-20 text-center text-white">
      <Image
        width={792}
        height={1000}
        src={"/assets/images/" + img}
        alt={alt}
        className={`inline-block w-1/3 ` + className}
      />
      <h1 className="mb-1 mt-4 text-2xl font-medium">{title}</h1>
      <p className="font-light">{children}</p>
    </div>
  );
}

export default function SlideShow() {
  return (
    <div className="z-0 w-1/2 flex left-1/2 top-0 bottom-0 right-0 fixed">
      <Swiper
        
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        autoplay={{delay : 7000}}
        loop={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper w-full bg-gradient-to-b from-[#00529C] to-[#061523] text-white"
        // style={{
        //   "--swiper-navigation-color": "#000",
        //   "--swiper-pagination-color": "#fff",
        // }}
      >
        <SwiperSlide>
          <SlideShowItem
            title={"Booking Antrian"}
            alt={"image booking ticket"}
            img={"booking_ticket.png"}
          >
            Pesan antrian lebih mudah dan cepat melalui Website.
          </SlideShowItem>
        </SwiperSlide>
        <SwiperSlide>
          <SlideShowItem
            title={"Daftar Bank"}
            alt={"image ticket recap"}
            img={"bank_list.png"}
            className={"w-2/3"}
          >
            Ketahui informati Bank terdekat kami dan kuota layanan <br /> yang
            tersedia dengan mudah
          </SlideShowItem>
        </SwiperSlide>
        <SwiperSlide>
          <SlideShowItem
            title={"Rekap Tiket Antrian"}
            alt={"image ticket recap"}
            img={"ticket_recap.png"}
            className={"w-2/3"}
          >
            Kemudahan dalam mengetahui aktivitas anda bersama kami.
          </SlideShowItem>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
