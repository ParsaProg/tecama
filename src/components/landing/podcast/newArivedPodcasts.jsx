import { RiUserFollowLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import "../../../styles/podcastLanding.css";

export default function NewlyArivedPodcast(props) {
  return (
    <div className="main-div cursor-pointer rounded-2xl mt-[2rem] w-[95%] bg-slate-900 newly-arived-container border-[#2e3c51] border-[1px] p-[15px]">
      <div className="flex-col items-center inside-div">
        <div
          className="p-[10px] rounded-xl podcast-image xl:w-[100%] lg:h-[14vw]"
          style={{
            backgroundImage: `url(https://ravipodcast.ir/wp-content/uploads/2020/07/jadiradio-geek4.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex-col mt-[1rem]">
          <div className="podcast-name-section flex items-center justify-between">
            <h1 className="text-white lg:text-[1.5vw] sm:text-[3vw] font-bold">
              رادیو جادی شماره 50
            </h1>
            <p className="text-slate-300">18 ساعت پیش</p>
          </div>
          <div className="sm:flex block relative md:items-center podcast-follow-section justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <div
                  className="rounded-full w-[1.7rem] h-[1.7rem]"
                  style={{
                    backgroundImage: `url(https://ravipodcast.ir/wp-content/uploads/2020/07/jadiradio-geek4.jpg)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="flex-col p-2">
                  <h3 className="text-white text-sm">پارسا شعبانی</h3>
                  <h3 className="text-slate-400 text-sm">
                    100 هزار دنبال کننده
                  </h3>
                </div>
              </div>
            </div>
            <button className="bg-slate-600 text-white border-none outline-none rounded-md px-4 py-1 text-[13px] hover:bg-slate-900 transition-all gap-[5px] duration-200 flex items-center">
              <h1>دنبال کردن</h1>
              <RiUserFollowLine size={20} />
            </button>
          </div>
        </div>
        <div className="text-white flex items-center mt-[1rem] gap-[1rem]">
          <div className="flex gap-1 items-center">
            <AiOutlineEye size={25} />
            <p>25 هزار نفر</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaRegHeart size={18} />
            <p>10 هزار نفر</p>
          </div>
        </div>
      </div>
    </div>
  );
}
