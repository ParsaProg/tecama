import TitlesLandingPage from "../titles";
import { TiArrowSortedUp } from "react-icons/ti";
import TopWeakPodcasts from "./topWeakPodcasts";
import { MdOutlinePodcasts } from "react-icons/md";
import NewlyArivedPodcast from "./newArivedPodcasts";
import "../../../styles/responsive/podcast_res.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function PodcastLandingPage() {
  useEffect(() => {
    setActiveIndex(swiperRef.current.activeIndex);

    document.querySelector(".swiper-pagination-bullets").style.display = "none";
    if (window.innerWidth > 1500) {
      setSlidePerView(2);
      setSlidePerViewList([1, 2]);
    } else {
      setSlidePerView(1);
      setSlidePerViewList([1, 2, 3]);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1500) {
        setSlidePerView(2);
        setSlidePerViewList([1, 2]);
      } else {
        setSlidePerView(1);
        setSlidePerViewList([1, 2, 3]);
      }
    });
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);
  const swiperRef = useRef();
  const [slidePerView, setSlidePerView] = useState(null);
  const [slidePerViewList, setSlidePerViewList] = useState([1, 2]);
  return (
    <div className="podcast-landing mt-[50px]">
      <Link to={"/podcasts"}>
        <TitlesLandingPage titleText="پادکست‌ها" />
      </Link>
      <div className="z-[30] rounded-md gap-[3rem] flex justify-center md:mr-[5rem] mr-3 md:mt-4">
        <div className="sm:bg-slate-900 none xl:block rounded-xl pt-5 pb-5 w-[35rem] top-podcasts">
          <div className="pr-5">
            <h1 className="text-white text-2xl">برترین‌ پادکست‌های هفته ✨</h1>
            <TopWeakPodcasts
              bannerImage="https://ravipodcast.ir/wp-content/uploads/2020/07/jadiradio-geek4.jpg"
              titleText="رادیو جادی شماره 125"
              publisherName="جادی میرمیرانی"
              publisherImage="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Software_Freedom_Day_2016_in_Tehran_By_Behdad_Abedi_%28433%29.jpg/640px-Software_Freedom_Day_2016_in_Tehran_By_Behdad_Abedi_%28433%29.jpg"
              publisherSubscribers="100 هزار"
            />
            <TopWeakPodcasts
              bannerImage="https://www.dataacademy.ir/storage/products/images/zvOHOvv2db6RtHzxy0w8lT11a3XdEoQ5Aoo6512F.jpeg"
              titleText="رادیو امین الگوریتم داده"
              publisherName="امین رحمانیان"
              publisherImage="https://github.com/ParsaProg/Parsina_PantomimeGame/blob/main/assets/images/photo_2024-04-01_20-47-29.jpg?raw=true"
              publisherSubscribers="100 هزار"
            />
            <TopWeakPodcasts
              bannerImage="https://www.dataacademy.ir/storage/products/images/zvOHOvv2db6RtHzxy0w8lT11a3XdEoQ5Aoo6512F.jpeg"
              titleText="رادیو امین الگوریتم داده"
              publisherName="امین رحمانیان"
              publisherImage="https://github.com/ParsaProg/Parsina_PantomimeGame/blob/main/assets/images/photo_2024-04-01_20-47-29.jpg?raw=true"
              publisherSubscribers="100 هزار"
            />
            <button className="bg-slate-600 text-white border-none outline-none rounded-md px-4 py-1 text-lg hover:bg-slate-900 transition-all duration-200 flex m-auto mt-[2rem] items-center gap-3">
              مشاهده همه <MdOutlinePodcasts />
            </button>
          </div>
        </div>
        <div className="sm:bg-slate-900 m-auto rounded-xl pt-5 mr-[20px] md:px-0 newly-arived">
          <h1 className="text-white new-podcast-title text-2xl mr-5">
            جدیدترین پادکست‌ها 📣
          </h1>
          <Swiper
            spaceBetween={20}
            className="m-auto flex justify-center items-center xl:p-[1.3rem] md:p-5 p-3"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(val) => {
              setActiveIndex(val.activeIndex);
            }}
          >
            <SwiperSlide>
              <NewlyArivedPodcast />
            </SwiperSlide>
            <SwiperSlide>
              <NewlyArivedPodcast />
            </SwiperSlide>
            <SwiperSlide>
              <NewlyArivedPodcast />
            </SwiperSlide>
          </Swiper>
          <div className="z-[30] flex items-center justify-center">
            <TiArrowSortedUp
              className={`transition-all rotate-[90deg] ${
                activeIndex !== 0 ? "cursor-pointer" : ""
              } ${activeIndex !== 0 ? "hover:fill-[#6b7280]" : ""}`}
              onClick={() => {
                if (activeIndex > 0) {
                  swiperRef.current.slidePrev();
                  setActiveIndex(activeIndex - 1);
                }
              }}
              color={activeIndex === 0 ? "#22293e" : "#41465a"}
              size={50}
            />
            <div className="flex gap-3">
              {slidePerViewList.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setActiveIndex(index);
                      let acIndex = swiperRef.current.activeIndex;
                      if (index > acIndex) {
                        let valueDU = index - acIndex;
                        for (let i = 0; i < valueDU; i++) {
                          swiperRef.current.slideNext();
                        }
                      } else if (index < acIndex) {
                        let valueDU = acIndex - index;
                        for (let i = 0; i < valueDU; i++) {
                          swiperRef.current.slidePrev();
                        }
                      }
                    }}
                    key={index}
                    className={`z-[30] transition-all w-[1rem] h-[1rem] rounded-md ${
                      index === activeIndex
                        ? "bg-[#6e809c] w-[2rem]"
                        : "bg-[#374151]"
                    }`}
                  ></div>
                );
              })}
            </div>
            <TiArrowSortedUp
              onClick={() => {
                if (slidePerViewList.length > activeIndex + 1) {
                  setActiveIndex(activeIndex + 1);
                  swiperRef.current.slideNext();
                }
              }}
              className={`transition-all rotate-[-90deg] ${
                activeIndex !== slidePerViewList.length - 1
                  ? "cursor-pointer"
                  : ""
              } ${
                activeIndex !== slidePerViewList.length - 1
                  ? "hover:fill-[#6b7280]"
                  : ""
              }`}
              color={
                activeIndex === slidePerViewList.length - 1
                  ? "#22293e"
                  : "#41465a"
              }
              size={50}
            />
          </div>
        </div>
        <div className="bg-slate-900 rounded-md"></div>
      </div>
    </div>
  );
}
