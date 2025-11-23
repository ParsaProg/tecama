import { RiEyeCloseLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

export default function LoginPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef();
  const slidePerViewList = [1, 2, 3];
  const [passwordBorder, setPasswordBorder] = useState(false);
  const [remMe, setRemMe] = useState(false);
  const passwordFieldRef = useRef();
  useEffect(() => {
    passwordFieldRef.current.addEventListener("focusout", () => {
      setPasswordBorder(false);
    });
  }, []);

  return (
    <motion.div
      style={{
        backdropFilter: "blur(5px)",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 50,
        transition: { duration: 0.3, mease: "easeInOut" },
      }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex pl-[20px] justify-between items-center login-page bg-[#2d26386f] rounded-xl mt-[5rem] w-[80rem] h-[43rem] m-auto relative"
    >
      <div className="w-[58%] h-[40rem] relative rounded-xl pr-[1.5rem] ml-[-5rem]">
        <Swiper
          autoplay={true}
          ref={swiperRef}
          allowTouchMove={false}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          className="w-[100%] rounded-xl h-[40rem]"
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(val) => {
            setActiveIndex(val.activeIndex);
          }}
          onAutoplay={(val) => {
            if (activeIndex == 2) {
              setActiveIndex(0);
            }
            if (activeIndex == 1) {
              setActiveIndex(2);
            }
            if (activeIndex == 0) {
              setActiveIndex(1);
            }
          }}
        >
          <SwiperSlide>
            <div
              className="w-[100%] p-3 h-[40rem] rounded-lg "
              style={{
                backgroundImage: `url(https://cdn.analyticsvidhya.com/wp-content/uploads/2024/04/Top-8-Coding-Platforms-for-Data-Science-Beginner-01-scaled.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center right",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-[100%] p-3 h-[40rem] rounded-lg "
              style={{
                backgroundImage: `url(https://www.starleaf.com/p/84morc.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center left",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-[100%] p-3 h-[40rem] rounded-lg "
              style={{
                backgroundImage: `url(https://images.stockcake.com/public/0/3/b/03b538f0-88d3-4481-bc35-74796e47cca5_large/coding-with-coffee-stockcake.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center right",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
        <div className="bg-[#0000008e] rounded-lg p-3 text-center absolute right-[53%] translate-x-[40%] flex gap-3 mx-[-2.5rem] bottom-[1.1rem] z-20">
          {slidePerViewList.map((item, index) => {
            return (
              <div
                onClick={() => {
                  let acIndex = swiperRef.current.activeIndex;
                  setActiveIndex(index);
                  
                  if (index > acIndex) {
                    let valueDU = index - acIndex;
                    for (let i = 1; i <= valueDU; i++) {
                      swiperRef.current.slideNext();
                    }
                  } else if (index < acIndex) {
                    let valueDU = acIndex - index;
                    for (let j = 0; j < valueDU; j++) {
                      swiperRef.current.slidePrev();
                    }
                  }
                }}
                key={index}
                className={`transition-all  w-[3.5rem] h-[0.7rem] rounded-md ${
                  index === activeIndex ? "bg-white w-[5.3rem]" : "bg-[#656b76]"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="flex-col justify-center  px-[3rem] pt-[2rem]">
        <h1 className="text-white text-[3rem]">
          ورود به حساب کاربری
        </h1>
        <p className="text-[#B5B3C0] mt-[20px]">
          اکانت ندارید؟{" "}
          <Link to="/register">
            <strong className="text-[#B7ABD9] cursor-pointer transition-all duration-100 hover:text-slate-300">
              ثبت نام
            </strong>
          </Link>
        </p>

        <div className="flex-col">
          <input
          type="email"
            placeholder="ایمیل"
            className="w-[100%] mt-[1rem] block border-transparent border-[2px] focus:border-[#847EA0] transition-all duration-100  text-xl py-3 pr-3 bg-[#3B364C] rounded-lg outline-none  text-white"
          ></input>
          <div
            ref={passwordFieldRef}
            style={
              passwordBorder == true
                ? { border: "2px solid #847EA0" }
                : { border: "2px solid transparent" }
            }
            onClick={() => {
              setPasswordBorder(true);
            }}
            className="transition-all duration-100 mt-[1rem] bg-[#3B364C] flex items-center rounded-lg w-[100%]"
          >
            <input
              placeholder="رمز عبور"
              className="block border-none border-[2px]  text-xl py-3 pr-3 bg-transparent w-[91%] rounded-lg outline-none  text-white"
            ></input>
            <IoEyeOutline
              className="cursor-pointer"
              color="#B5B3C0"
              size={25}
            />
          </div>
        </div>
        <div className="flex items-center mt-[1rem] gap-x-3 select-none">
          <div
            className="bg-white w-[1.5rem] h-[1.5rem] rounded-md cursor-pointer flex justify-center items-center"
            onClick={() => {
              setRemMe(!remMe);
            }}
          >
            {remMe == true && <FaCheck />}
          </div>
          <p className="text-white">
            من{" "}
            <strong className="text-[#bdb6da] cursor-pointer  underline">
              قوانین و شرایط
            </strong>{" "}
            سایت را قبول دارم
          </p>
        </div>
        <button className="flex justify-center items-center bg-[#6E54B5] mt-[3rem] rounded-md cursor-pointer w-[100%] py-3">
          <h1 className="text-white">ورود به حساب</h1>
        </button>
        <div className="relative select-none">
          <div className="mt-[2rem] w-[100%] h-[1px] bg-[#B5B3C0]"></div>
        </div>
        <div className="flex items-center justify-center gap-[2rem] mt-[2rem]">
          <div className="cursor-pointer flex items-center gap-3 justify-center text-white border-[#B5B3C0] border-[1px] p-3 rounded-lg">
            <h1>ورود با گوگل</h1>
            <FcGoogle size={30} />
          </div>
          <div className="cursor-pointer flex items-center gap-3 justify-center text-white border-[#B5B3C0] border-[1px] p-3 rounded-lg">
            <h1>ورود با گیت‌هاب</h1>
            <FaGithub size={30} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
