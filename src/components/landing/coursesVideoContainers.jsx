import "../../styles/courses_section.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CoursesVideoContainer(props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/courses/${props.titleText}`, {
          state: { titleText: "آموزش نود جی اس" },
        });
      }}
      className="main-window mb-[20px] flex items-center justify-center"
    >
      <div
        className={`mt-[-70px] border-[1px] border-[#2e3c51] relative rounded-xl cursor-pointer`}
      >
        <div className="main-content flex flex-col m-3">
          <img
            src={props.titleImage}
            className="image-container rounded-lg"
            alt="banner image"
          ></img>
          <div className="my-5 px-2">
            <h1 className="text-white font-bold title-text">
              {props.titleText}
            </h1>
          </div>
          <div className="flex items-center">
            <div
              className="border-2 border-white rounded-full w-[2.3rem] h-[2.3rem]"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${props.teacherProfile})`,
              }}
            ></div>
            <div className="text-white font-[5000] py-2 mx-2 flex items-center">
              <h1 className="teacher-text">مدرس:</h1>
              <div className="w-[0.3rem] "></div>
              <h1 className="teacher-main-text">{props.teacherName}</h1>
            </div>
          </div>
          <div className="flex mt-6 gap-5 justify-start items-center">
            <div className="flex items-center gap-1 rounded-md p-3 bg-[#020621] border-[1px] border-[#2e3c51]">
              <p className="text-white time-text">{props.time}</p>
            </div>
            <div className="flex items-center gap-1 rounded-md p-3 bg-[#020621] border-[1px] border-[#2e3c51]">
              <p className="text-white meet-text">{props.meetsCount}</p>
            </div>
          </div>
        </div>
        {/* <button className="see-button dark-shadow absolute bottom-3 right-[50%] translate-x-[50%] my-[-25px] bg-[#1c1f38] text-white rounded-md  flex justify-center ">
          مشاهدۀ دوره‌
        </button> */}
      </div>
    </div>
  );
}
