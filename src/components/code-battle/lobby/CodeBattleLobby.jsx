"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Filter, Plus, Zap } from "lucide-react";
import { useState } from "react";

const CodeBattleLobby = ({ isDarkTheme }) => {
  const [showDialogIndex, setShowDialogIndex] = useState(0);
  return (
    <div
      className={`${
        isDarkTheme ? "text-white" : "text-black"
      } w-full mt-[50px] flex flex-col gap-y-5`}
    >
      <section className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start gap-y-1">
          <h1 className="font-bold text-2xl">لابی اتاق ها</h1>
          <h3 className="font-[300] text-lg text-slate-300">
            به یک اتاق بپیوند یا اتاق خودت رو بساز
          </h3>
        </div>
        <div className="flex items-center gap-x-3">
          <motion.div whileTap={{ scale: 0.93 }}>
            <button
              className={`cursor-pointer py-3 px-5 rounded-xl text-white bg-[#4F4BE6] hover:shadow-none transition-all duration-200 flex items-center gap-x-2`}
            >
              <Plus size={18} />
              ساخت اتاق
            </button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.93 }}>
            <button
              className={`text-[#22D2EE] transition-all duration-200 cursor-pointer p-3 rounded-xl bg-transparent border ${
                isDarkTheme ? "border-[#22D2EE]" : "border-slate-600"
              } flex items-center gap-x-2 hover:bg-[#158293] hover:text-white`}
            >
              <Zap size={18} />
              بازی سریع
            </button>
          </motion.div>
        </div>
      </section>
      <div className="flex items-center gap-x-2">
        <div className="text-slate-400 p-3 rounded-xl border border-slate-600">
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
            className=" w-[120px] text-sm bg-[#1e293b7e] border border-slate-600 p-3 rounded-xl text-white flex gap-x-2 items-center justify-center"
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
                className=" w-[120px] absolute top-[50px] text-sm bg-[#1e293b7e] border border-slate-600 p-1 rounded-xl text-white flex flex-col items-start gap-y-1"
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-full justify-center bg-[#22D2EE] p-2 rounded-lg text-black flex items-center gap-x-2"
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
            className="w-[130px] text-sm bg-[#1e293b7e] border border-slate-600 p-3 rounded-xl text-white flex gap-x-2 items-center justify-center"
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
                className=" w-[130px] absolute top-[50px] text-sm bg-[#1e293b7e] border border-slate-600 p-1 rounded-xl text-white flex flex-col items-start gap-y-1"
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-full justify-center bg-[#22D2EE] p-2 rounded-lg text-black flex items-center gap-x-2"
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
    </div>
  );
};

export default CodeBattleLobby;
