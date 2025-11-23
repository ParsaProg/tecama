import { MdOutlineDateRange } from "react-icons/md";
import { useRef } from "react";

export default function NewsContainer(props) {
  const catborderRef = useRef();
  const {
    bannerImage,
    titleText,
    publishDate,
    publisherName,
    publisherImage,
  } = props;
  return (
    <div
      className="relative w-[80vw] scale-[0.94] h-[80vw] lg:w-[30vw] lg:h-[30vw] md:w-[40vw] md:h-[40vw] sm:w-[80vw] sm:h-[55vh] rounded-xl  items-center m-[auto] cursor-pointer transition-all"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.6020063025210083) 0%, rgba(0,0,0,0.8031827731092436) 100%)",
        }}
        className="absolute bottom-[0] p-5 flex justify-start items-start flex-col gap-5 rounded-b-xl"
      >
        <h1 className="text-white xl:text-[1.3vw] lg:text-[1.5vw] font-bold leading-[2rem]">
          {titleText}
        </h1>
        <div className="flex items-center gap-5">
          <div className="flex shrink-0 items-center gap-2">
            <span
              className="xl:w-[2vw] xl:h-[2vw] lg:w-[3vw] lg:h-[3vw] md:w-[3vw] md:h-[3vw] w-[5vw] h-[5vw] rounded-full border-[0.8px] border-slate-100"
              style={{
                backgroundImage: `url(${publisherImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></span>
            <h3 className="text-white md:text-[1.8vw] lg:text-[0.9vw]">{publisherName}</h3>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineDateRange color="white" size={15} />
            <h3 className="text-white text-[3vw] md:text-[1.8vw] lg:text-[0.9vw]">{publishDate}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
