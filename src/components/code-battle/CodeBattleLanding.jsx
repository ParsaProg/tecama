import { motion } from "framer-motion";
import convertToFarsiNumbers from "../../functions/convertNumbersToFarsi";

export default function CodeBattleLanding({ isDarkTheme }) {
  return (
    <div
      className={`${
        isDarkTheme ? "text-white" : "text-black"
      } w-full flex flex-col items-center text-center gap-y-7 mt-[50px]`}
    >
      <div className="text-white shadow-[0px_0px_10px_5px] shadow-[#102A3E] py-3 px-5 rounded-full border border-[#144C62] bg-[#102A3E]">
        ⚡ پلتفرم رقابت کدنویسی زنده
      </div>

      <h1 className="font-bold text-7xl font-sans">Code Battle</h1>
      <h3 className="text-5xl font-bold bg-gradient-to-l from-[#22D2EE] to-[#4F4BE6] bg-clip-text text-transparent">
        رقابت زنده برنامه‌نویسی 1v1
      </h3>
      <h3
        className={`text-xl [@media(min-width:500px)]:w-[500px] font-[400] text-center  ${
          isDarkTheme ? "text-slate-400" : "text-slate-600"
        }`}
      >
        در لحظه به مبارزه وصل شو و با هر کسی از ایران رقابت کن. مهارت‌هات رو به
        چالش بکش و برنده شو!
      </h3>

      <section className="flex items-center gap-x-5 mt-3 text-lg">
        <motion.div whileTap={{ scale: 0.93 }}>
          <button
            className={`cursor-pointer py-3 px-5 rounded-xl text-white bg-gradient-to-l from-[#22D2EE] to-[#4F4BE6] hover:shadow-none transition-all duration-200 shadow-[0px_0px_10px_5px] shadow-[#22d3ee45] flex items-center gap-x-2`}
          >
            شروع بازی سریع
          </button>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.93 }}
          className={`cursor-pointer p-3 rounded-xl bg-transparent border ${
            isDarkTheme ? "border-slate-700" : "border-slate-600"
          } flex items-center gap-x-2`}
        >
          ساخت اتاق خصوصی
        </motion.button>
      </section>

      <section className="flex items-center gap-x-10 mt-5 ">
        <div
          className={`${
            isDarkTheme ? "border-slate-600 bg-[#1E293B]" : "border-slate-300"
          } flex flex-col items-start p-5 gap-y-5 shadow-[0px_0px_15px_5px] shadow-[#504be641] w-[400px] rounded-xl bg-transparent border`}
        >
          <section className="flex items-center gap-x-2">
            <div className="p-5 rounded-full bg-[#4F4BE6]"></div>
            <h2 className="text-md text-slate-400 font-[400]" dir="ltr">
              {convertToFarsiNumbers("بازیکن 1")} {"(شما)"}{" "}
            </h2>
          </section>
          <div
            className="bg-[#172133] w-full rounded-lg p-4 font-mono text-sm text-left"
            dir="ltr"
          >
            <div className="text-[#08d2f6]">
              {"function"} {" solve() {"}
              <div className="text-slate-400 pl-4">{"// Your code"}</div>
              {"}"}
              <div className="text-accent"></div>
            </div>
          </div>
        </div>
        <div
          className={`${
            isDarkTheme ? "border-slate-600 bg-[#1E293B]" : "border-slate-300"
          } flex flex-col items-start p-5 shadow-[0px_0px_15px_5px] gap-y-5 shadow-[#22d3ee3f] w-[400px] rounded-xl bg-transparent border`}
        >
          <section className="flex items-center gap-x-2">
            <div className="p-5 rounded-full bg-[#22D2EE]"></div>
            <h2 className="text-md text-slate-400 font-[400]" dir="ltr">
              {convertToFarsiNumbers("بازیکن 2")}
            </h2>
          </section>
          <div
            className="bg-[#172133] w-full rounded-lg p-4 font-mono text-sm text-left"
            dir="ltr"
          >
            <div className="text-[#08d2f6]">
              {"function"} {" solve() {"}
              <div className="text-slate-400 pl-4">{"// Opponent code"}</div>
              {"}"}
              <div className="text-accent"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-10 rounded-xl bg-[#131C2F] mt-8">
        <h1 className="font-bold text-4xl">کد بتل چطوری کار میکنه؟</h1>
      </div>
    </div>
  );
}
