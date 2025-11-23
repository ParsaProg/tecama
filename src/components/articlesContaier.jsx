import { MdOutlineDateRange } from "react-icons/md";
import "../styles/article_section.css";
import { useNavigate } from "react-router-dom";

export default function ArticleContainer(props) {
  const navigate = useNavigate();
  const {
    cats,
    articleImage,
    titleText,
    publisherImage,
    publisherName,
    publishTime,
    weblog,
    theme
  } = props;
  return (
    <div
      onClick={() => {
        navigate(`/articles/${titleText}` , {
          state: {titleImage: articleImage, titleText: titleText}
        });
      }}
      className={`article-container m-[auto] scale-[0.94] cursor-pointer rounded-lg border-[1.5px]  ${theme? "bg-slate-900 border-[#2e3c51]": "bg-slate-100 border-slate-300"} transition duration-[0.5s] ${
        weblog && "w-full"
      }`}
    >
      {weblog ? (
        <img
          className={`w-[100%] h-[20vw] rounded-t-lg`}
          src={articleImage}
          alt="banner image"
        ></img>
      ) : (
        <img
          className={`w-[100%] h-[15vw] rounded-t-lg title-image`}
          src={articleImage}
          alt="banner image"
        ></img>
      )}
      <h1 className={`${theme? "text-[#bfc7d2]": "text-black"} font-bold text-[1.3vw] pt-[10px] pb-[20px] md:pb-[10px] px-[1.3rem] mt-[5px]`}>
        {window.innerWidth > 880 && !weblog
          ? titleText.length > 25
            ? titleText.substring(0, 25) + "..."
            : titleText
          : titleText}
      </h1>
      <div className="category-container flex sm:items-center gap-x-3">
        {cats.map((cat, index) => {
          return (
            <h2
              key={index}
              className={`${index === 0 && "mr-[1.2rem]"} flex text-sm ${theme? "text-[#bfc7d2] hover:text-white border-[#2e3c51] bg-[#020621]": "text-black bg-slate-100 border-[#a5b1c4]"} rounded-md p-2 transition-all  border-[1px] `}
            >
              {cat}
            </h2>
          );
        })}
      </div>
      <div className="flex items-center p-[1.3rem]">
        <div
          className="sm:w-[2.5rem] sm:h-[2.5rem] w-[2rem] h-[2rem] rounded-full border-[1px] border-[#000000]"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${publisherImage})`,
          }}
        />
        <p className={`${theme? "text-[#25A6E9]": "text-blue-600"} font-[500] mx-[7px] text-sm hover:text-white cursor-pointer transition-all`}>
          {publisherName}
        </p>
        <div className={`flex items-start mx-[7px] ${theme? "text-[#646f7e]": "text-gray-800"}`}>
          <MdOutlineDateRange size={18} className="mx-[7px]" />
          <p className={` font-[500] text-sm `}>{publishTime}</p>
        </div>
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
