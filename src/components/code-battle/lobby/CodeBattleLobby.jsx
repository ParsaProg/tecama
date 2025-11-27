"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Filter, Plus, Users, Zap } from "lucide-react";
import { useState } from "react";
import convertToFarsiNumbers from "../../../functions/convertNumbersToFarsi";

const CodeBattleLobby = ({ isDarkTheme }) => {
    const roomList = [
        {
            uniqId: "afhjewopnvljkdfhbgkjhfgpw",
            title: "چالش الگوریتم‌ها",
            state: "waiting",
        },
         {
            uniqId: "afhjewopnvljkdfhbgkjhfgps",
            title: "مسابقه ساختمان داده",
            state: "run",
        },
         {
            uniqId: "afhjewopnvljkdfhbgkjhfgpp",
            title: "رقابت سریع",
            state: "waiting",
        },
         {
            uniqId: "afhjewopnvljkdfhbgkjhfgpa",
            title: "مبارزه پایتون",
            state: "waiting",
        },
    ];
  const [showDialogIndex, setShowDialogIndex] = useState(0);
  return (
    <div
      className={`${
        isDarkTheme ? "text-white" : "text-black"
      } w-full mt-[50px] flex flex-col gap-y-5`}
    >
      <section className="w-full flex items-center justify-between sm:flex-row flex-col gap-y-5">
        <div className="flex flex-col items-start gap-y-1">
          <h1 className="font-bold text-2xl">لابی اتاق ها</h1>
          <h3 className="font-[300] text-lg text-slate-300">
            به یک اتاق بپیوند یا اتاق خودت رو بساز
          </h3>
        </div>
        <div className="flex items-center gap-x-3">
          <motion.div whileTap={{ scale: 0.93 }}>
            <button
              className={`sm:w-auto w-full cursor-pointer py-3 px-5 rounded-xl text-white bg-[#4F4BE6] hover:shadow-none transition-all justify-center duration-200 flex items-center gap-x-2`}
            >
              <Plus size={18} />
              ساخت اتاق
            </button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.93 }}>
            <button
              className={`flex items-center justify-center text-[#22D2EE] transition-all duration-200 cursor-pointer p-3 rounded-xl bg-transparent border ${
                isDarkTheme ? "border-[#22D2EE]" : "border-slate-600"
              } gap-x-2 hover:bg-[#158293] hover:text-white`}
            >
              <Zap size={18} />
              بازی سریع
            </button>
          </motion.div>
        </div>
      </section>
      <div className="flex items-center gap-x-2 sm:justify-start justify-center">
        <div className="text-slate-400 p-3 rounded-xl border border-slate-800">
          <Filter size={20} />
        </div>
        <div className="relative">
          <motion.div
            onClick={() =>
              showDialogIndex === 1
                ? setShowDialogIndex(0)
                : setShowDialogIndex(1)
            }
            whileTap={{ scale: 0.95 }}
            className=" w-[120px] text-sm bg-[#1e293b7e] border border-slate-800 p-3 rounded-xl text-white flex gap-x-2 items-center justify-center"
          >
            <ChevronDown size={15} className="text-slate-400" />
            همۀ اتاق‌ها
          </motion.div>
          <AnimatePresence>
            {showDialogIndex === 1 && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: -30, x: -10, scale: 0.8 },
                  visible: { opacity: 1, y: 0, x: 0, scale: 1 },
                }}
                key={"filter-1"}
                className=" w-[120px] absolute top-[50px] text-sm bg-[#181f2d] border border-slate-600 p-1 rounded-xl text-white flex flex-col items-start gap-y-1 z-100"
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#22D2EE] p-2 rounded-lg text-black flex items-center gap-x-2"
                >
                  <Check size={15} />
                  همۀ اتاق‌ها
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex p-2 rounded-lg hover:bg-[#22D2EE] transition-colors duration-200 hover:text-black items-center gap-x-2"
                >
                  فقط آماده
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative">
          <motion.div
            onClick={() =>
              showDialogIndex === 2
                ? setShowDialogIndex(0)
                : setShowDialogIndex(2)
            }
            whileTap={{ scale: 0.95 }}
            className="w-[130px] text-sm bg-[#1e293b7e] border border-slate-800 p-3 rounded-xl text-white flex gap-x-2 items-center justify-center "
          >
            <ChevronDown size={15} className="text-slate-400" />
            جدید‌ترین
          </motion.div>
          <AnimatePresence>
            {showDialogIndex === 2 && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: -30, x: -10, scale: 0.8 },
                  visible: { opacity: 1, y: 0, x: 0, scale: 1 },
                }}
                key={"filter-2"}
                className=" w-[130px] absolute top-[50px] text-sm bg-[#161e2b] border border-slate-600 p-1 rounded-xl text-white flex flex-col items-start gap-y-1 z-[998]"
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#22D2EE] p-2 rounded-lg text-black flex items-center gap-x-2"
                >
                  <Check size={15} />
                  جدید‌ترین
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex p-2 rounded-lg hover:bg-[#22D2EE] transition-colors duration-200 hover:text-black items-center gap-x-2"
                >
                  بر اساس بازیکن
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex p-2 rounded-lg hover:bg-[#22D2EE] transition-colors duration-200 hover:text-black items-center gap-x-2"
                >
                  بر اساس وضعیت
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <section className="grid items-center gap-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full">
        {roomList.map((room, _i) => {
            return <div key={_i} className="w-full h-[180px] p-5 rounded-xl transition-all duration-200 bg-[#1e293b7e] border border-slate-800 hover:shadow-[0px_0px_10px_5px] hover:shadow-[#22d3ee2e] flex flex-col items-start justify-between gap-y-5">
                <div className="flex items-center w-full justify-between">
                    <h1 className="text-xl font-bold">{room.title}</h1>
                    <div className={`p-2 rounded-full text-sm -z-1 ${room.state === "waiting"? "opacity-[0.8] bg-slate-600 border border-slate-500": "bg-red-500 text-white"}`}>
                        {room.state === "waiting"? "در حال انتظار": "در حال برگزاری"}
                    </div>
                </div>
                <div className="flex items-center w-full justify-between">
                    <div className="text-md text-slate-400 font-[400] flex items-center gap-x-2">
                        <div className="-mt-1"><Users size={18}/></div>
                        
                        {convertToFarsiNumbers(room.state === "waiting"? "1/2": "2/2")}
                    </div>
                    <button disabled={room.state === "run"} className="disabled:opacity-[0.8] disabled:cursor-not-allowed bg-[#4F4BE6] rounded-lg text-white p-3 text-sm">ورود به اتاق</button>
                </div>
            </div>
        })}
      </section>
    </div>
  );
};

export default CodeBattleLobby;
