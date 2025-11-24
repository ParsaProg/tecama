import { MdOutlineDateRange } from "react-icons/md";
import "../styles/article_section.css";
import { useNavigate } from "react-router-dom";

export default function CoursesContainer(props) {
  const navigate = useNavigate();
  const {
    cats,
    titleImage,
    titleText,
    publisherImage,
    publisherName,
    publishTime,
    meetsCount,
    time,
    containerType,
    weblog,
    navigation,
    theme,
  } = props;
  return (
    <div
      onClick={() => {
        {
          navigation === "news"
            ? navigate(`/news/${titleText}`)
            : navigate(`/courses/${props.titleText}`, {
                state: { titleText: titleText, titleImage: titleImage,  },
              });
        }
      }}
      className={`mb-4 w-full article-container cursor-pointer rounded-lg border-[1.5px]  ${theme? "bg-slate-900 border-[#2e3c51]": "bg-slate-100 border-slate-300"} transition duration-[0.5s] ${
        weblog && "w-full"
      }`}
    >
      {weblog ? (
        <img
          className={`w-[100%] h-[20vw] rounded-t-lg`}
          src={titleImage}
          alt="banner image"
        ></img>
      ) : (
        <img
          className={`w-[100%] h-[15vw] rounded-t-lg title-image`}
          src={titleImage}
          alt="banner image"
        ></img>
      )}
      <h1 className={`${theme? "text-[#bfc7d2]": "text-black"} font-bold text-[1.3vw] pt-[10px] pb-[20px] md:pb-[10px] px-[1.3rem] mt-[5px]`}>
        {window.innerWidth > 880 && !weblog
          ? titleText.length > 35
            ? titleText.substring(0, 35) + "..."
            : titleText
          : titleText}
      </h1>
      <div className="category-container flex items-center gap-x-3">
        {containerType == "course" && !weblog ? (
          <>
            <h2
              className={`mr-[1.3rem] flex text-sm ${theme? "hover:text-white text-[#bfc7d2] border-[#2e3c51] bg-[#020621]": "text-black bg-slate-100 border-[#a5b1c4]"} rounded-md p-[0.5rem] transition-all  border-[1px] `}
            >
              {meetsCount}
            </h2>
            <h2
               className={`flex text-sm ${theme? "text-[#bfc7d2] hover:text-white border-[#2e3c51] bg-[#020621]": "text-black bg-slate-100 border-[#a5b1c4]"} rounded-md p-[0.5rem] transition-all  border-[1px] `}
            >
              {time}
            </h2>
          </>
        ) : (
          cats.map((cat, index) => {
            return (
              <h2
                key={index}
                className={`flex text-lg text-[#bfc7d2] bg-[#020621] rounded-md p-[0.5rem] transition-all hover:text-white ${
                  index == 0 ? "mr-[1.3rem]" : ""
                } border-[1px] border-[#2e3c51]`}
              >
                {cat}
              </h2>
            );
          })
        )}
      </div>
      <div className="flex items-center p-[1.3rem] gap-3">
        <div
          className="sm:w-[2.5rem] sm:h-[2.5rem] w-[2rem] h-[2rem] rounded-full border-[1px] border-[#181919]"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${publisherImage})`,
          }}
        />
        <p className={`${theme? "text-[#25A6E9]  hover:text-whit": "text-blue-600"} font-[500] text-lge cursor-pointer transition-all`}>
          مدرس دوره: {publisherName}
        </p>
        {containerType == "article" && (
          <div className="flex items-start mx-[7px]">
            <MdOutlineDateRange
              color="#646f7e"
              size={18}
              className="mx-[7px]"
            />
            <p className="text-[#646f7e] font-[500] text-sm ">{publishTime}</p>
          </div>
        )}
        {/* <div className="flex items-start mx-[7px]">
          <FaRegComments color="#646f7e" size={18} className="mx-[7px]" />
          <p className="text-[#646f7e] font-[500] text-sm">
            {commentsCount}
          </p>
        </div>
        <div className="flex items-start mx-[7px]">
          <FaRegHeart color="#646f7e" size={18} className="mx-[7px]" />
          <p className="text-[#646f7e] font-[500] text-sm ">
            {likesCount}
          </p>
        </div> */}
      </div>
    </div>
  );
}
