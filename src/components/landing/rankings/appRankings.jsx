import TitlesLandingPage from "../titles.jsx";
import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { ReactComponent as ListIcon } from "../../../assets/icons/list-icon.svg";
import { SiSpringCreators } from "react-icons/si";
import { IoIosStar } from "react-icons/io";
import "../../../styles/responsive/app_ranking.css";
import AppRankingContainer from "../../appRankingContainer.jsx";

export default function AppRankings() {
  const filterData = [
    {
      cat: "ui",
      text: "رابط کاربری",
    },
    {
      cat: "userLikes",
      text: "نظر کاربران",
    },
    {
      cat: "userLikes",
      text: "نظر کاربران",
    },
    {
      cat: "userLikes",
      text: "نظر کاربران",
    },
    {
      cat: "userLikes",
      text: "نظر کاربران",
    },
  ];
  return (
    <div className="z-[20] app-rankings mt-[5rem]">
      <TitlesLandingPage titleText="رتبه‌بندی نرم‌افزار‌های ایرانی" />
      <div className="mt-[2rem] m-[auto] w-[88%] rounded-md border-[5px] border-[#647896]">
        <div className="ranking-header flex items-center justify-center">
          <div className="border-white border-[1.5px] rounded-md m-[1rem] header-section1 flex items-center">
            <div className="z-[30] shrink-0 flex justify-center items-center pl-[5px] pr-[10px] text-white h-[3.5rem] rounded-full m-[20px] border-white border-[2px]">
              <input
                type="text"
                className="border-none outline-none bg-transparent w-[98%] h-[3.5rem] rounded-full"
                placeholder="جستجو کنید ..."
              />
              <div className="rounded-full p-[8px] flex justify-center items-center bg-slate-300 border-slate-300 border-[2px] transition-all duration-200 text-black cursor-pointer hover:bg-transparent hover:border-white hover:border-[2px] hover:text-white">
                <IoSearchOutline size={20} />
              </div>
            </div>
            <div className="z-[30] sort-button flex justify-center items-center pl-[5px] pr-[10px] text-white w-[20rem] h-[3.5rem] rounded-full m-[20px] border-white border-[2px] gap-[20px] transition-all duration-150 hover:text-black hover:fill-black hover:bg-white cursor-pointer">
              <h1>دسته‌بندی موضوعات مختلف</h1>
              <ListIcon size={25} />
            </div>
          </div>
          <div className="z-[30] border-white border-[1.5px] rounded-full md:rounded-md m-[1rem] flex items-center header-section2">
            <div className="text-center shrink-0 flex justify-between items-center text-white h-[3.5rem] p-5 rounded-full md:rounded-sm text-lg">
              <h1>فیلتر کردن بر اساس</h1>
              <CiFilter size={25} />
              <div className="filter-modes grid md:grid-cols-5 gap-y-[10px]">
                {filterData.map((dt, index) => {
                  return (
                    <span
                      key={index}
                      className="text-center cursor-pointer hover:bg-[#ffffff28] hover:border-white transition-all duration-200 bg-transparent rounded-sm border-[1px] border-slate-400 mr-[20px] text-sm p-1"
                    >
                      {dt.text}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div
          style={{ placeSelf: "center" }}
          className="mt-[3rem] gap-y-4 gap-x-10 mb-[20px] grid ranking-content grid-cols-3"
        >
          <AppRankingContainer />
          <AppRankingContainer />
          <AppRankingContainer />
        </div>
      </div>
    </div>
  );
}
