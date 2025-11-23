import { useEffect, useState } from "react";
import { MdOutlineArticle } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogPage({
  isDarkTheme,
  articlesData,
  coursesData,
  newsData,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const index = query.get("index") || 0;
    if (index === "news") {
      setActiveTabIndex(1);
    }
  }, [location.search]);



  const tabs = [
    { id: 0, name: "همه", icon: null, color: "#f0a432" },
    {
      id: 1,
      name: "اخبار روز",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          color={
            activeTabIndex === 1 ? (isDarkTheme ? "white" : "black") : "#A87FFB"
          }
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-square-icon lucide-message-square"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      color: "#A87FFB",
    },
    {
      id: 2,
      name: "دوره‌های آموزشی",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          color={
            activeTabIndex === 2 ? (isDarkTheme ? "white" : "black") : "#239cdc"
          }
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-monitor-play-icon lucide-monitor-play"
        >
          <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
          <path d="M12 17v4" />
          <path d="M8 21h8" />
          <rect x="2" y="3" width="20" height="14" rx="2" />
        </svg>
      ),
      color: "#239cdc",
    },
    {
      id: 3,
      name: "مقالات علمی",
      icon: (
        <MdOutlineArticle
          size={20}
          color={
            activeTabIndex === 3 ? (isDarkTheme ? "white" : "black") : "#125f46"
          }
        />
      ),
      color: "#125f46",
    },
  ];

  const ArticleContainer = ({
    weblog,
    cats,
    likesCount,
    commentsCount,
    articleImage,
    titleText,
    publisherImage,
    publisherName,
    publishTime,
    className = "",
    imageClassName = "",
    tagsClassName = "",
  }) => {
    return (
      <Link
        to={"/articles/مقاله ی تکاما"}
        state={{ titleImage: articleImage, titleText: titleText }}
      >
        <div
          className={`rounded-lg border overflow-hidden ${className} ${
            isDarkTheme
              ? "bg-[#10151D] border-[#2E3C51]"
              : "bg-white border-gray-200"
          }`}
        >
          <img
            src={articleImage}
            alt={titleText}
            className={`w-full h-[200px] sm:h-[400px] object-cover rounded-t-lg ${imageClassName}`}
          />
          <div className="p-4">
            <h2
              className={`text-xl font-bold mb-2 ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              {titleText}
            </h2>
            <div
              className={`flex flex-wrap gap-2 overflow-hidden max-h-[3em] ${tagsClassName}`}
            >
              {cats.map((cat, index) => (
                <span
                  key={index}
                  className={`text-xs px-2 py-1 rounded ${
                    isDarkTheme
                      ? "bg-[#1B212A] text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm ${
                    isDarkTheme ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {likesCount} پسند
                </span>
                <span
                  className={`text-sm ${
                    isDarkTheme ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {commentsCount} نظر
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={publisherImage}
                  alt={publisherName}
                  className="w-8 h-8 rounded-full"
                />
                <span
                  className={`text-sm ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  {publisherName}
                </span>
              </div>
            </div>
            <div
              className={`text-xs mt-2 ${
                isDarkTheme ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {publishTime}
            </div>
          </div>
        </div>
      </Link>
    );
  };

  const CoursesContainer = ({
    titleImage,
    titleText,
    publisherName,
    publisherImage,
    publishTime,
    cats,
    navigation,
    className = "",
    imageClassName = "",
    tagsClassName = "",
  }) => {
    return (
      <>
        <div
          onClick={() =>
            navigation === "news"
              ? navigate(`/news/${titleText}`, {
                  state: { titleText: titleText, titleImage: titleImage },
                })
              : navigate(`/courses/${titleText}`, {
                  state: { titleText: titleText, titleImage: titleImage },
                })
          }
          className={`rounded-lg border overflow-hidden ${className} ${
            isDarkTheme
              ? "bg-[#10151D] border-[#2E3C51]"
              : "bg-white border-gray-200"
          }`}
        >
          <img
            src={titleImage}
            alt={titleText}
            className={`w-full h-[200px] sm:h-[400px] rounded-t-lg ${imageClassName}`}
          />
          <div className="p-4">
            <h2
              className={`text-xl font-bold mb-2 ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              {titleText}
            </h2>
            <div
              className={`flex flex-wrap gap-2 overflow-hidden max-h-[3em] ${tagsClassName}`}
            >
              {cats.map((cat, index) => (
                <span
                  key={index}
                  className={`text-xs px-2 py-1 rounded ${
                    isDarkTheme
                      ? "bg-[#1B212A] text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm ${
                    isDarkTheme ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {publishTime}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={publisherImage}
                  alt={publisherName}
                  className="w-8 h-8 rounded-full"
                />
                <span
                  className={`text-sm ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  {publisherName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 50,
        transition: { duration: 0.3, mease: "easeInOut" },
      }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`max-w-[700px] mx-auto w-full relative px-4 sm:px-0 ${
        isDarkTheme ? "text-white" : "text-gray-800"
      }`}
    >
      <div
        className={`z-20 absolute blur-[100px] opacity-[0.7] mt-[-130px] right-[50%] translate-x-[50%] rounded-full w-[300px] sm:w-[650px] h-[100px] sm:h-[150px] ${
          isDarkTheme ? "bg-[#293f67]" : "bg-gray-200"
        }`}
      ></div>

      <section className="mt-10 flex items-center justify-between z-30 relative">
        <div
          className={`cursor-pointer flex md:hidden items-center justify-center z-50 rounded-full w-[50px] h-[50px] border-[1.5px] ${
            isDarkTheme
              ? "text-[#808C9C] border-[#2E3C51] bg-[#10151D]"
              : "text-gray-600 border-gray-300 bg-white"
          }`}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 18 12"
            fill="none"
            className="min-w-[16px]"
          >
            <path
              d="M8 12H10C10.55 12 11 11.55 11 11C11 10.45 10.55 10 10 10H8C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1ZM4 7H14C14.55 7 15 6.55 15 6C15 5.45 14.55 5 14 5H4C3.45 5 3 5.45 3 6C3 6.55 3.45 7 4 7Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <div
          className={`hidden md:flex items-center px-3 rounded-full h-[60px] w-auto flex-shrink-0 ${
            isDarkTheme
              ? "bg-[#10151D] border-[#2E3C51]"
              : "bg-white border-gray-300"
          } border-[1.5px] relative`}
        >
          <div
            className={`absolute h-[50px] rounded-full transition-all duration-300 top-[50%] translate-y-[-50%] z-40`}
            style={{
              width:
                activeTabIndex === 0
                  ? "80px"
                  : activeTabIndex === 1
                  ? "120px"
                  : activeTabIndex === 2
                  ? "170px"
                  : "160px",
              backgroundColor: tabs[activeTabIndex].color,
              right:
                activeTabIndex === 0
                  ? "5px"
                  : activeTabIndex === 1
                  ? "90px"
                  : activeTabIndex === 2
                  ? "225px"
                  : "410px",
            }}
          ></div>

          <div className="flex items-center justify-start gap-x-3">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`flex items-center justify-center gap-x-2 rounded-full ${
                  activeTabIndex !== tab.id &&
                  (isDarkTheme ? "hover:bg-[#1B212A]" : "hover:bg-gray-100")
                } transition-all duration-200 px-4 py-2 z-[999] cursor-pointer`}
                onClick={() => setActiveTabIndex(tab.id)}
              >
                {tab.icon && <span className="mt-0.5">{tab.icon}</span>}
                <h3
                  className={`${
                    activeTabIndex === tab.id
                      ? isDarkTheme
                        ? "text-white"
                        : "text-black"
                      : isDarkTheme
                      ? "text-white"
                      : "text-gray-800"
                  } text-lg font-[500]`}
                >
                  {tab.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {showMobileMenu && (
          <div
            className={`md:hidden absolute top-[70px] left-0 w-full rounded-lg z-50 p-4 ${
              isDarkTheme
                ? "bg-[#10151D] border-[#2E3C51]"
                : "bg-white border-gray-300"
            } border-[1.5px]`}
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`flex items-center gap-x-2 p-3 rounded-lg ${
                  activeTabIndex === tab.id
                    ? isDarkTheme
                      ? "bg-[#1B212A]"
                      : "bg-gray-100"
                    : isDarkTheme
                    ? "hover:bg-[#1B212A]"
                    : "hover:bg-gray-100"
                } transition-all duration-200 cursor-pointer`}
                onClick={() => {
                  setActiveTabIndex(tab.id);
                  setShowMobileMenu(false);
                }}
              >
                {tab.icon && <span className="mt-0.5">{tab.icon}</span>}
                <h3
                  className={`text-lg font-[500] ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  {tab.name}
                </h3>
              </div>
            ))}
          </div>
        )}

        <div
          className={`hidden md:flex cursor-pointer items-center justify-center z-50 rounded-full w-[60px] h-[60px] border-[1.5px] ${
            isDarkTheme
              ? "text-[#808C9C] border-[#2E3C51] bg-[#10151D]"
              : "text-gray-600 border-gray-300 bg-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 18 12"
            fill="none"
            className="min-w-[16px]"
          >
            <path
              d="M8 12H10C10.55 12 11 11.55 11 11C11 10.45 10.55 10 10 10H8C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1ZM4 7H14C14.55 7 15 6.55 15 6C15 5.45 14.55 5 14 5H4C3.45 5 3 5.45 3 6C3 6.55 3.45 7 4 7Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      <div className="mt-10 w-full grid grid-cols-1 gap-6">
        {activeTabIndex === 0 && (
          <>
            {coursesData.length + articlesData.length !== 0 ? (
              coursesData.map((courseData, courseIndex) => {
                return (
                  <CoursesContainer
                    navigation="course"
                    key={courseIndex}
                    theme={isDarkTheme}
                    containerType="course"
                    titleImage={courseData.titleImage}
                    titleText={courseData.titleText}
                    publisherName={courseData.publisherName}
                    publisherImage={courseData.publisherImage}
                    time={courseData.time}
                    meetsCount={courseData.meetsCount}
                    publishTime={courseData.publishTime}
                    cats={courseData.cats}
                  />
                );
              })
            ) : (
              <h1
                className={`${
                  isDarkTheme ? "text-white" : "text-black"
                } flex items-center mt-5 justify-center text-center`}
              >
                در حال بارگیری اطلاعات ...
              </h1>
            )}
            {articlesData.map((articleData) => {
              return (
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
              );
            })}
            {newsData.map((newsData, newsIndex) => {
              return (
                <CoursesContainer
                  key={newsIndex}
                  weblog={true}
                  titleImage={newsData.titleImage}
                  titleText={newsData.titleText}
                  publisherName={newsData.publisherName}
                  publisherImage={newsData.publisherImage}
                  publishTime={newsData.publishTime}
                  cats={newsData.cats}
                  navigation="news"
                />
              );
            })}
          </>
        )}

        {activeTabIndex === 1 && (
          <>
            {newsData.length !== 0 ? (
              newsData.map((newsData, newsIndex) => {
                return (
                  <CoursesContainer
                    key={newsIndex}
                    weblog={true}
                    titleImage={newsData.titleImage}
                    titleText={newsData.titleText}
                    publisherName={newsData.publisherName}
                    publisherImage={newsData.publisherImage}
                    publishTime={newsData.publishTime}
                    cats={newsData.cats}
                    navigation="news"
                  />
                );
              })
            ) : (
              <h1
                className={`${
                  isDarkTheme ? "text-white" : "text-black"
                } flex items-center mt-5 justify-center text-center`}
              >
                در حال بارگیری اطلاعات ...
              </h1>
            )}
          </>
        )}

        {activeTabIndex === 2 && (
          <>
            {coursesData.length !== 0 ? (
              coursesData.map((courseData, courseIndex) => {
                return (
                  <CoursesContainer
                    navigation="course"
                    key={courseIndex}
                    theme={isDarkTheme}
                    containerType="course"
                    titleImage={courseData.titleImage}
                    titleText={courseData.titleText}
                    publisherName={courseData.publisherName}
                    publisherImage={courseData.publisherImage}
                    time={courseData.time}
                    meetsCount={courseData.meetsCount}
                    publishTime={courseData.publishTime}
                    cats={courseData.cats}
                  />
                );
              })
            ) : (
              <h1
                className={`${
                  isDarkTheme ? "text-white" : "text-black"
                } flex items-center mt-5 justify-center text-center`}
              >
                در حال بارگیری اطلاعات ...
              </h1>
            )}
          </>
        )}

        {activeTabIndex === 3 && (
          <>
            {articlesData.length !== 0 ? (
              articlesData.map((articleData) => {
                return (
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
                );
              })
            ) : (
              <h1
                className={`${
                  isDarkTheme ? "text-white" : "text-black"
                } flex items-center mt-5 justify-center text-center`}
              >
                در حال بارگیری اطلاعات ...
              </h1>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}
