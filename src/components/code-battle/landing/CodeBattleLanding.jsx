import { motion } from "framer-motion";
import convertToFarsiNumbers from "../../../functions/convertNumbersToFarsi";
import { Trophy, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CodeBattleLanding({ isDarkTheme }) {
  const navigate = useNavigate();

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
        <motion.div
          onClick={() => navigate("/code-battle/lobby")}
          whileTap={{ scale: 0.93 }}
        >
          <button
            className={`cursor-pointer py-3 px-5 rounded-xl text-white bg-gradient-to-l from-[#22D2EE] to-[#4F4BE6] hover:shadow-none transition-all duration-200 shadow-[0px_0px_10px_5px] shadow-[#22d3ee45] flex items-center gap-x-2`}
          >
            شروع بازی سریع
          </button>
        </motion.div>

        <motion.button
          onClick={() => navigate("/code-battle/lobby")}
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

      <div className="w-full py-10 rounded-xl bg-[#131C2F] mt-8 px-10">
        <h1 className="font-bold text-4xl">کد بتل چطوری کار میکنه؟</h1>
        <section className="flex items-center gap-x-5 justify-center w-full mt-10">
          <div className="flex flex-col items-center rounded-xl bg-[#1E293B] w-full py-10 border border-slate-700 transition-all duration-200 hover:shadow-[0px_0px_15px_5px] hover:shadow-[#08d2f631] gap-y-5">
            <div className="flex items-center justify-center p-3 rounded-xl text-[#4F46E5] bg-[#4e46e53b] shadow-[0px_0px_13px_10px] shadow-[#4e46e528] ">
              <Zap size={50} />
            </div>
            <h1 className="font-bold text-2xl">جست‌وجوی حریف</h1>{" "}
            <p className="font-[400] text-lg text-slate-400 w-[400px]">
              با یک کلیک به سیستم{" "}
              <p className="font-mono inline">matchmaking</p> وصل شو و با یک
              برنامه‌نویس دیگه مچ بشو
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl bg-[#1E293B] w-full py-10 border border-slate-700 transition-all duration-200 hover:shadow-[0px_0px_15px_5px] hover:shadow-[#08d2f631] gap-y-5">
            <div className="flex items-center justify-center p-3 rounded-xl text-[#08d2f6] bg-[#08d2f63c] shadow-[0px_0px_13px_10px] shadow-[#08d2f62a] ">
              <Users size={50} />
            </div>
            <h1 className="font-bold text-2xl">کدنویسی زنده</h1>
            <p className="font-[400] text-lg text-slate-400 w-[400px] text-center">
              همزمان با حریفت یک مسئله رو حل کن و سرعت و دقتت رو به چالش بکش
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-[#1E293B] w-full py-10 border border-slate-700 transition-all duration-200 hover:shadow-[0px_0px_15px_5px] hover:shadow-[#08d2f631] gap-y-5">
            <div className="flex items-center justify-center p-3 rounded-xl text-[#4ADE80] bg-[#4ade8032] shadow-[0px_0px_13px_10px] shadow-[#4ade8030] ">
              <Trophy size={50} />
            </div>
            <h1 className="font-bold text-2xl">برنده شو و پیشرفت کن</h1>{" "}
            <p className="font-[400] text-lg text-slate-400 w-[400px]">
              با برد کردن امتیاز جمع کن، رتبه‌ت رو بالا ببر و بهترین کدر شو
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
