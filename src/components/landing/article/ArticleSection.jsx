import ArticleContainer from "../../articlesContaier";
import TitlesLandingPage from "../titles";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../styles/article_section.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export default function ArticlesSection({ isDarkTheme, articlesData }) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [slidePerViewList, setSlidePerViewList] = useState([]);
  const swiperRef = useRef();
  const [slidePerView, setSlidePerView] = useState(null);
  useEffect(() => {
    if (window.innerWidth > 1250) {
      setSlidePerView(4);
      setSlidePerViewList([0]);
    }
    if (window.innerWidth < 1100) {
      setSlidePerView(2);
      setSlidePerViewList([0, 1, 2]);
    }
    if (window.innerWidth < 880) {
      setSlidePerView(1);
      setSlidePerViewList([0, 1, 2, 3]);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 880) {
        setSlidePerView(1);
        setSlidePerViewList([0, 1, 2, 3]);
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1250) {
        setSlidePerView(4);
        setSlidePerViewList([0]);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1100 && window.innerWidth > 880) {
        setSlidePerView(2);
        setSlidePerViewList([0, 1, 2]);
      }
    });
  }, []);
  return (
    <div className="z-[20] mb-[20px]">
      <div
        className="cursor-pointer"
        onClick={() => {
          navigate("/articles");
        }}
      >
        <TitlesLandingPage titleText="آخرین مقالات" isDarkTheme={isDarkTheme} />
      </div>
      <div className="items-center justify-center">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(val) => {
            setActiveIndex(val.activeIndex);
          }}
          slidesPerView={slidePerView}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ checkable: true }}
          spaceBetween={20}
          className="lg:mx-[4rem] mx-3"
        >
          {articlesData.slice(0, 4).map((articleData, articleIndex) => {
            return (
              <SwiperSlide key={articleIndex}>
                <ArticleContainer
                  key={articleData.id}
                  theme={isDarkTheme}
                  cats={articleData.cats}
                  likesCount={articleData.likesCount}
                  commentsCount={articleData.commentsCount}
                  articleImage={articleData.articleImage}
                  titleText={articleData.titleText}
                  publisherImage={articleData.publisherImage}
                  publisherName={articleData.publisherName}
                  publishTime={articleData.publishTime}
                />
              </SwiperSlide>
            );
          })}
          <div className="flex items-center justify-center">
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
                    className={`transition-all w-[1rem] h-[1rem] rounded-md ${
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
        </Swiper>
      </div>
    </div>
  );
}
