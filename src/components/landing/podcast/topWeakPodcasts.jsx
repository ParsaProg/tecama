import { BiSolidShow } from "react-icons/bi";

export default function TopWeakPodcasts(props){
    return <div className="mt-[2rem]">
    <div className="rounded-2xl w-[95%] border-slate-700 border-[1px] p-[15px]">
      <div className="flex items-center">
        <div
          className="p-[10px] rounded-md w-[10rem] h-[5rem]"
          style={{
            backgroundImage:
              `url(${props.bannerImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex-col items-start mr-[10px] w-[16rem] gap-2">
          <h1 className="text-white font-bold">{props.titleText}</h1>
          <div className="flex items-center">
              <div className="rounded-full w-[1.7rem] h-[1.7rem]"  style={{
                  backgroundImage:
                  `url(${props.publisherImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}></div>
              <div className="flex-col p-2">
                  <h3 className="text-white font-[400] text-sm">{props.publisherName}</h3>
                  <h3 className="text-slate-400 text-sm">{props.publisherSubscribers} دنبال کننده</h3>
              </div>
          </div>
        </div>
        <button className="flex items-center gap-3 bg-red-900 text-white border-none outline-none rounded-md px-4 py-1 text-lg hover:bg-red-950 transition-all duration-200">مشاهده <BiSolidShow color="white"/></button>
      </div>
      
    </div>
  </div>
}