import { motion } from "framer-motion";
import { Code, Github, Linkedin, Mail, Twitter, Moon, Sun } from "lucide-react";
import { FaNetworkWired, FaTelegram } from "react-icons/fa6";

export default function AboutUs({ isDarkTheme }) {
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
      className={`min-h-screen transition-colors duration-200 ${
        isDarkTheme ? " text-white" : " text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`relative w-40 h-40 rounded-full overflow-hidden border-4 shadow-xl ${
                isDarkTheme ? "border-zinc-700" : "border-zinc-200"
              }`}
            >
              <img
                src="https://avatars.githubusercontent.com/u/122119546?v=4"
                alt="تصویر برنامه‌نویس"
                className="object-cover"
              />
            </motion.div>
            <div className="text-center md:text-right">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl font-bold mb-2"
                dir="rtl"
              >
                پارسا شعبانی
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={`text-xl ${
                  isDarkTheme ? "text-zinc-400" : "text-zinc-600"
                }`}
                dir="rtl"
              >
                توسعه‌دهنده فول‌استک
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={`mb-12 rounded-2xl p-8 shadow-sm ${
            isDarkTheme
              ? "bg-zinc-800 shadow-zinc-800/20"
              : "bg-zinc-100 border-[1px] border-slate-300 shadow-zinc-200/20"
          }`}
          dir="rtl"
        >
          <h2 className="text-2xl font-bold mb-6 border-b pb-4">درباره من</h2>
          <p className="text-xl font-[400] leading-relaxed mb-4">
            سلام! من پارسا شعبانی هستم، یک توسعه‌دهنده فول‌استک با بیش از ۵ سال
            تجربه در ساخت اپلیکیشن‌های وب مدرن. تخصص اصلی من در React، Next.js و
            Node.js است.
          </p>
          <p className="text-xl font-[400] leading-relaxed mb-4">
            من عاشق حل مسائل پیچیده و تبدیل ایده‌ها به محصولات دیجیتال کاربردی
            هستم. همیشه در حال یادگیری تکنولوژی‌های جدید و بهبود مهارت‌های خود
            هستم.
          </p>
          <p className="text-xl font-[400] leading-relaxed">
            در اوقات فراغت، به کمک به جامعه متن‌باز علاقه دارم و در پروژه‌های
            مختلف مشارکت می‌کنم. همچنین به کوهنوردی و عکاسی علاقه‌مندم.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={`rounded-2xl p-6 shadow-sm ${
              isDarkTheme
                ? "bg-zinc-800 shadow-zinc-800/20"
                : "bg-zinc-100 border-[1px] border-slate-300 shadow-zinc-200/20"
            }`}
            dir="rtl"
          >
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Code className="h-5 w-5" />
              مهارت‌ها
            </h2>
            <div className="space-y-3">
              {[
                { name: "React / Next.js", level: 90 },
                { name: "Node.js / Express", level: 85 },
                { name: "TypeScript", level: 80 },
                { name: "MongoDB / PostgreSQL", level: 75 },
                { name: "Docker / AWS", level: 70 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span
                      className={`${
                        isDarkTheme ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`h-2 rounded-full overflow-hidden ${
                      isDarkTheme ? "bg-zinc-700" : "bg-zinc-300"
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.4, duration: 1 }}
                      className={`h-full rounded-full ${
                        isDarkTheme ? "bg-zinc-300" : "bg-zinc-600"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className={`rounded-2xl p-6 shadow-sm ${
              isDarkTheme
                ? "bg-zinc-800 shadow-zinc-800/20"
                : "bg-zinc-100 border-[1px] border-slate-300 shadow-zinc-200/20"
            }`}
            dir="rtl"
          >
            <h2 className="text-xl font-bold mb-4">تجربیات</h2>
            <div className="space-y-4">
              {[
                {
                  role: "توسعه‌دهنده ارشد فرانت‌اند",
                  company: "تک‌اپ",
                  period: "1404 - اکنون",
                },
                {
                  role: "توسعه‌دهنده فول‌استک",
                  company: "دیجی‌تال",
                  period: "1400 - 1404",
                },
                {
                  role: "توسعه‌دهنده جونیور",
                  company: "وب‌پرداز",
                  period: "1397 - 1400",
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className={`border-b pb-3 last:pb-0 last:border-0 ${
                    isDarkTheme ? "border-zinc-700" : "border-zinc-200"
                  }`}
                >
                  <div className="font-medium">{exp.role}</div>
                  <div
                    className={`text-sm flex justify-between ${
                      isDarkTheme ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    <span>{exp.company}</span>
                    <span
                      className={`${
                        isDarkTheme ? "text-zinc-500" : "text-zinc-500"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className={`rounded-2xl p-8 shadow-lg ${
            isDarkTheme
              ? "bg-zinc-800 shadow-zinc-800/20"
              : "bg-zinc-100 border-[1px] border-slate-300 shadow-zinc-200/20"
          }`}
          dir="rtl"
        >
          <h2 className="text-2xl font-bold mb-6">تماس با من</h2>
          <p className="mb-6">
            برای همکاری یا صحبت درباره پروژه‌های جدید، از طریق راه‌های زیر با من
            در تماس باشید:
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:parsashaabani3@gmail.com@gmail.com"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isDarkTheme
                  ? "bg-zinc-700 hover:bg-zinc-600"
                  : "bg-zinc-200 hover:bg-zinc-300"
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>ایمیل</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ParsaProg"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isDarkTheme
                  ? "bg-zinc-700 hover:bg-zinc-600"
                  : "bg-zinc-200 hover:bg-zinc-300"
              }`}
            >
              <Github className="h-4 w-4" />
              <span>گیت‌هاب</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/Parsa_Shaabani"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isDarkTheme
                  ? "bg-zinc-700 hover:bg-zinc-600"
                  : "bg-zinc-200 hover:bg-zinc-300"
              }`}
            >
              <FaTelegram className="h-4 w-4" />
              <span>تلگرام</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://parsashaabani.ir/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isDarkTheme
                  ? "bg-zinc-700 hover:bg-zinc-600"
                  : "bg-zinc-200 hover:bg-zinc-300"
              }`}
            >
              <FaNetworkWired className="h-4 w-4" />
              <span>وبسایت شخصی</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
