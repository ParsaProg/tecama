import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = ({ isDarkTheme }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`mt-[-20px] min-h-screen flex flex-col items-center justify-center p-4 ${
        isDarkTheme
          ? "bg-gradient-to-br from-gray-800 to-gray-900"
          : "bg-gradient-to-br from-indigo-50 to-blue-100"
      }`}
    >
      {/* Animated 404 */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1
          className={`text-9xl font-bold mb-4 ${
            isDarkTheme ? "text-indigo-400" : "text-indigo-600"
          }`}
        >
          404
        </h1>
        <h2
          className={`text-3xl font-semibold mb-2 ${
            isDarkTheme ? "text-gray-200" : "text-gray-800"
          }`}
        >
          صفحه مورد نظر پیدا نشد!
        </h2>
        <p
          className={`max-w-md mb-8 ${
            isDarkTheme ? "text-gray-400" : "text-gray-600"
          }`}
        >
          به نظر می‌رسد این صفحه وجود ندارد یا حذف شده است.
        </p>

        {/* Back to Home Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className={`font-medium py-3 px-6 rounded-lg shadow-md transition-all ${
            isDarkTheme
              ? "bg-indigo-700 hover:bg-indigo-600 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          بازگشت به صفحه اصلی
        </motion.button>
      </motion.div>

      {/* Optional: Animated Illustration */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-12"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
          alt="Not Found"
          className={`w-40 h-40 ${
            isDarkTheme ? "opacity-60" : "opacity-80"
          }`}
        />
      </motion.div>
    </div>
  );
};

export default NotFound;