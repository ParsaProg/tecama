"use client";

import { ArrowRight, Check, Clock } from "lucide-react";
import convertToFarsiNumbers from "../../../functions/convertNumbersToFarsi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import showErrorAlert from "../../../functions/showAlert";
import { useEffect, useState } from "react";

export default function CodeBattleRoom({ isDarkTheme, isLogin }) {
  const [isMount, setIsMount] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      setIsMount(true);
    } else {
      showErrorAlert({
        title: "برای ورود به لابی کد بتل وارد حساب کاربری شوید",
        isDarkTheme: true,
      });
      setTimeout(() => navigate(-1), 2000);
    }
  }, []);
  return isMount ? (
    <div
      className={`${
        isDarkTheme ? "text-white" : "text-black"
      } w-full mt-[50px] flex flex-col items-start`}
    >
      <section className="flex w-full items-center justify-between py-3">
        <div className="w-full flex gap-x-2 items-center p-5 bg-[#504be635] border border-[#504be643] rounded-xl">
          <div className="flex justify-center items-center w-12 h-12 text-md bg-[#4F4BE6] rounded-full font-bold p-3">
            پ
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-lg flex gap-x-1 items-center">
              پارسا شعبانی{" "}
              <div className="font-[400] text-md flex items-center gap-x-2 text-[#22D2EE]">
                {"("}
                شما
                <div className="flex items-center">
                  <Check size={15} />
                  {")"}
                </div>
              </div>
            </h1>
            <h1 className="font-[400] text-md text-slate-400">
              امتیاز: {convertToFarsiNumbers("12")}
            </h1>
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-center gap-y-2">
          <h1 className="font-bold text-3xl flex items-center gap-x-2">
            14:54
            <div className="text-[#22D2EE]">
              <Clock size={20} />
            </div>
          </h1>
          <div className="text-sm rounded-full py-2 px-5 bg-[#22d3ee32] border border-[#22d3ee43] text-[#22D2EE]">
            در حال کد‌نویسی
          </div>
        </div>
        <div className="w-full flex gap-x-2 items-center p-5 border border-[#504be643] rounded-xl">
          <div className="flex justify-center items-center w-12 h-12 text-md bg-[#4F4BE6] rounded-full font-bold p-3">
            ر
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-lg">رضا قناعتیان</h1>
            <h1 className="font-[400] text-md text-slate-400">
              امتیاز: {convertToFarsiNumbers("12")}
            </h1>
          </div>
        </div>
      </section>

      <motion.div
        onClick={() => navigate("/code-battle/lobby")}
        whileTap={{ scale: 0.94 }}
        className="border border-slate-800 rounded-xl p-3 flex items-center gap-x-2"
      >
        <ArrowRight size={20} />
        بازگشت به لابی
      </motion.div>
    </div>
  ) : null;
}
