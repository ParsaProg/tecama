import { TbCategoryFilled } from "react-icons/tb";
import { BsPlusLg } from "react-icons/bs";
import { PiMinusThin } from "react-icons/pi";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FaqPage({ isDarkTheme }) {
  const catsData = [
    "عادی",
    "کامپیوتر",
    "فناوری اطلاعات",
    "برنامه‌نویسی",
    "تکاما",
  ];
  const fakeQuestions = [
    {
      question: "بهترین راه برای بهبود مهارت‌های برنامه‌نویسی چیه؟",
      answer:
        "در دنیای امروز، ترکیب پروژه‌های عملی، استفاده از ابزارهای هوش مصنوعی و تماشای آموزش‌های باکیفیت که به اهداف شما مرتبط باشه، بهترین روشه.",
    },
    {
      question: "چطور می‌تونم سریع‌تر برنامه‌نویس بهتری بشم؟",
      answer:
        "پایداری مهمه—هر روز تمرین کن، با مسائل چالش‌برانگیز روبرو شو و کدت رو بررسی کن تا از اشتباهاتت یاد بگیری.",
    },
    {
      question: "باید روی یک زبان برنامه‌نویسی تمرکز کنم یا چندتا یاد بگیرم؟",
      answer:
        "اول یه زبان رو کامل یاد بگیر تا پایه‌ات قوی بشه، بعد بر اساس علاقه و شغلت به بقیه زبان‌ها برو.",
    },
    {
      question: "کار روی پروژه‌های واقعی برای یادگیری چقدر مهمه؟",
      answer:
        "خیلی مهمه—پروژه‌های واقعی حل مسئله، خطایابی و کاربرد عملی رو بهتر از تئوری یاد می‌دن.",
    },
    {
      question: "هوش مصنوعی توی برنامه‌نویسی مدرن چه نقشی داره؟",
      answer:
        "هوش مصنوعی می‌تونه توی تولید کد، خطایابی و یادگیری کمک کنه، ولی وقتی با درک خودت ترکیب بشه بهترین نتیجه رو می‌ده.",
    },
    {
      question: "چطور موقع یادگیری کدنویسی انگیزم رو حفظ کنم؟",
      answer:
        "اهداف کوچک و قابل‌دسترس بذار، پروژه‌هایی بساز که بهشون علاقه داری و با یه جامعه برنامه‌نویسی در ارتباط باش.",
    },
  ];

  const [catsIndex, setCatsIndex] = useState(0);
  const [opendedIndex, setOpendedIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 50,
        transition: { duration: 0.3, mease: "easeInOut" },
      }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`m-auto flex flex-col items-center p-4 max-w-full overflow-hidden`}
    >
      {/* Header */}
      <h1
        className={`font-bold text-3xl md:text-5xl text-center mt-5 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}
      >
        سوالات پرتکرار
      </h1>
      <h5
        className={`font-[400] text-lg md:text-xl text-center mt-3 ${
          isDarkTheme ? "text-slate-400" : "text-gray-600"
        }`}
      >
        پاسخ سوالات پرتکرار شما در این صفحه
      </h5>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-x-[50px] w-full max-w-[1200px] mt-8">
        {/* Categories Section */}
        <div className="w-full md:w-auto overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal">
          <div className="flex flex-row md:flex-col gap-2 md:gap-0 mb-5">
            {catsData.map((catData, catIndex) => (
              <div key={catIndex}>
                <div
                  onClick={() => setCatsIndex(catIndex)}
                  className={`${
                    catIndex === catsIndex
                      ? "bg-[#2763EA] border-transparent text-white"
                      : `${
                          isDarkTheme
                            ? "hover:bg-slate-900 border-slate-700 text-white"
                            : "hover:bg-gray-100 border-gray-300 text-gray-800"
                        } cursor-pointer`
                  } transition-all duration-200 flex items-center justify-center p-3 rounded-md border-[2px] text-sm md:text-base`}
                >
                  {catData}
                </div>
                {catIndex < catsData.length - 1 && (
                  <div
                    className={`w-[3px] h-[15px] ${
                      isDarkTheme ? "bg-slate-500" : "bg-gray-300"
                    } m-auto hidden md:block`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Questions Section */}
        <div className="flex flex-col items-start mt-8 md:mt-[50px] w-full max-w-[800px]">
          <div className="flex items-center gap-x-1">
            <TbCategoryFilled
              size={30}
              color={isDarkTheme ? "white" : "#4B5563"}
            />
            <h1
              className={`text-xl md:text-2xl ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              سوالات عادی
            </h1>
          </div>
          <div className="mt-5 w-full">
            {fakeQuestions.map((q, qIndex) => (
              <div key={qIndex}>
                <div
                  onClick={() => {
                    if (opendedIndex === qIndex) {
                      setOpendedIndex(null);
                    } else {
                      setOpendedIndex(qIndex);
                    }
                  }}
                  className={`flex cursor-pointer items-start transition-all duration-200 gap-x-5 md:gap-x-10 justify-between w-full px-3 md:px-5 ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  <div className="q-and-a">
                    <h2 className="font-bold text-lg md:text-xl">
                      {q.question}
                    </h2>
                    {opendedIndex === qIndex && (
                      <h3
                        className={`font-[500] text-base md:text-lg mt-3 ${
                          isDarkTheme ? "text-slate-100" : "text-gray-700"
                        }`}
                      >
                        {q.answer}
                      </h3>
                    )}
                  </div>
                  <div
                    className={`rounded-full p-2 cursor-pointer flex items-center justify-center ${
                      isDarkTheme
                        ? "bg-slate-900 border-slate-600"
                        : "bg-gray-100 border-gray-300"
                    } border-[2px]`}
                  >
                    {qIndex === opendedIndex ? (
                      <PiMinusThin
                        size={20}
                        className="md:hidden"
                        color={isDarkTheme ? "white" : "#4B5563"}
                      />
                    ) : (
                      <BsPlusLg
                        size={20}
                        className="md:hidden"
                        color={isDarkTheme ? "white" : "#4B5563"}
                      />
                    )}
                    {qIndex === opendedIndex ? (
                      <PiMinusThin
                        size={30}
                        className="hidden md:block"
                        color={isDarkTheme ? "white" : "#4B5563"}
                      />
                    ) : (
                      <BsPlusLg
                        size={30}
                        className="hidden md:block"
                        color={isDarkTheme ? "white" : "#4B5563"}
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`w-full h-[1px] my-5 rounded-full ${
                    isDarkTheme ? "bg-slate-600" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
