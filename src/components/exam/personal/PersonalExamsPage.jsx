import { motion } from "framer-motion";
import { FaJsSquare } from "react-icons/fa";
import { FaPython, FaJava } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const programmingLanguages = [
  { name: "JavaScript", icon: <FaJsSquare />, color: "#EFD81D" },
  { name: "Python", icon: <FaPython />, color: "#366E9D" },
  { name: "Java", icon: <FaJava />, color: "#E51E23" },
  { name: "Dart", icon: <SiDart />, color: "#0071C0" },
  { name: "Ruby", icon: <DiRuby />, color: "#B11303" },
  { name: "Go", icon: <FaGolang />, color: "#00A7D0" },
];

export default function PersonalExams({ isDarkTheme }) {
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      // Prevent the default browser confirmation dialog
      e.preventDefault();
      e.returnValue = ""; // Required for older browsers
    });
  }, []);
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
      className="min-h-screen text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className={`mb-2 text-4xl font-bold bg-clip-text text-transparent ${isDarkTheme? "bg-gradient-to-r from-blue-400 to-purple-400": "bg-gradient-to-r from-blue-600 to-purple-600"}`}>
            آزمون سنجش و محک فردی
          </h1>
          <p className={`${isDarkTheme? "text-gray-300": "text-gray-700"} text-xl text-center`}>
            مهارت های خود را با سرعت خود آزمایش کنید. زبانی را برای شروع انتخاب
            کنید.
          </p>
        </motion.header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmingLanguages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg bg-gradient-to-br ${isDarkTheme? "from-gray-800 to-gray-700 text-white": "text-black from-gray-200 to-gray-100"} p-6 shadow-lg hover:shadow-xl transition-all`}
            >
              <div style={{ color: lang.color }} className="mb-4 text-5xl">
                {lang.icon}
              </div>
              <h2 className="mb-2 text-2xl font-semibold">{lang.name}</h2>
              <p className={`mb-4 text-sm ${isDarkTheme? "text-gray-300": "text-gray-700"}`}>
                یک امتحان شخصی در {lang.name} بدهید تا دانش و مهارت های خود را
                محک بزنید.
              </p>
              <Link to={`/exams/personal/${lang.name}?lang=${lang.name}`}>
                {" "}
                <button className="p-3 rounded-lg bg-blue-600 transition-all duration-200 hover:bg-blue-700 text-white">
                  شروع آزمون
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
