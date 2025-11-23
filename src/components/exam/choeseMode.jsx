import { ArrowRight, BookOpen, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ChoeseExamMode({ isDarkTheme }) {
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
      className={isDarkTheme ? "text-white" : "text-black"}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`mb-8 text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent ${
            isDarkTheme
              ? "bg-gradient-to-r from-blue-400 to-purple-400"
              : "bg-gradient-to-r from-blue-800 to-purple-800"
          }`}
        >
          آزمون ها و چالش های برنامه نویسی
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mb-12 text-center text-xl ${
            isDarkTheme ? "text-gray-300" : "text-gray-700"
          }`}
        >
          مسیر خود را انتخاب کنید: با سرعت خود تمرین کنید یا با دیگران رقابت
          کنید
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Personal Exams Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`group relative overflow-hidden rounded-lg cursor-pointer border-[1.8px] ${
              isDarkTheme ? "border-blue-300" : "border-blue-800"
            } p-6 shadow-lg transition-all`}
          >
            <BookOpen
              className={`mb-4 h-12 w-12 ${
                isDarkTheme ? "text-blue-300" : "text-blue-600"
              }`}
            />
            <h2 className="mb-2 text-2xl font-bold">تمرین و سنجش شخصی</h2>
            <p
              className={`mb-4 ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              امتحانات را با سرعت خودت شرکت کن تمرین کنید و مهارت های خود را
              ارتقا دهید بدون فشار رقابت
            </p>
            <Link
              to="/exams/personal"
              className={`cursor-pointer gap-x-3 text-lg hover:bg-blue-400 inline-flex items-center ${
                isDarkTheme ? "text-blue-300" : "text-blue-700"
              } transition-colors hover:text-black p-3 rounded-lg`}
            >
              شروع آزمون و یادگیری
              <ArrowRight className="ml-2 h-4 w-4 rotate-[180deg]" />
            </Link>
          </motion.div>

          {/* Challenges Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`group relative overflow-hidden rounded-lg cursor-pointer border-[1.8px] ${
              isDarkTheme ? "border-purple-300" : "border-purple-600"
            } p-6 shadow-lg transition-all`}
          >
            <Trophy className={`mb-4 h-12 w-12 ${isDarkTheme? "text-purple-300": "text-purple-600"}`} />
            <h2 className="mb-2 text-2xl font-bold">چالش و رقابت</h2>
            <p className={`mb-4 ${isDarkTheme? "text-gray-300": "text-gray-600"}`}>
              با دیگران رقابت کنید، چالش های زمان بندی شده را حل کنید و از آن ها
              بالا بروید تابلوی امتیازات برای نشان دادن مهارت های خود
            </p>
            <Link
              to="/exams/rated"
              className={`cursor-pointer ${isDarkTheme? "text-purple-300": "text-purple-600"} gap-x-3 text-lg hover:bg-purple-400 inline-flex items-center text-purple-300-300 transition-colors hover:text-black p-3 rounded-lg`}
            >
              عضویت در چالش و رقابت
              <ArrowRight className="ml-2 h-4 w-4 rotate-[180deg]" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
