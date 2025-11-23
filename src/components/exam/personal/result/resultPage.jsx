import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExamResultsPieChart from "../../../ui/pichart";
import "../../../../styles/loadingAnimations.css";

export default function ResultPersonalExam({ isDarkTheme }) {
  const location = useLocation();
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedResult = localStorage.getItem("examResult");
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      navigate("/exams/personal");
    }
  }, []);

  if (!result) {
    return <div className="loader"></div>;
  }

  const { totalQuestions, correctAnswers, incorrectAnswers, score } = result;
  const percentage = (correctAnswers / totalQuestions) * 100;

  const getPerformanceLevel = (percentage) => {
    if (percentage >= 90) return "عالی";
    if (percentage >= 70) return "خوب";
    if (percentage >= 50) return "متوسط";
    return "ضعیف";
  };

  const data = [{ value: correctAnswers }, { value: incorrectAnswers }];

  const COLORS = ["#00C49F", "#FF8042"];

  return (
    <div className={`${isDarkTheme? "text-white": "text-black"} container mx-auto px-4 py-8`}>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-[10px]">
          <h1 className="text-2xl font-bold">
            نتایج آزمون{" "}
            {location.search.substring(location.search.indexOf("=") + 1)}
          </h1>
        </div>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">{percentage.toFixed(2)}%</p>
            <p className="text-xl">
              {percentage >= 50
                ? "تبریک! شما قبول شدید."
                : "متأسفانه شما قبول نشدید."}
            </p>
            <p className="text-lg mt-2">
              عملکرد شما:{" "}
              <span className="font-bold">
                {getPerformanceLevel(percentage)}
              </span>
            </p>
          </div>

          <div style={{ width: "250px", margin: "0 auto" }}>
            <ExamResultsPieChart results={result} />
          </div>

          <div className="text-center">
            <p>تعداد کل سؤالات: {totalQuestions}</p>
            <p>پاسخ‌های صحیح: {correctAnswers}</p>
            <p>پاسخ‌های نادرست: {incorrectAnswers}</p>
            <p>امتیاز نهایی: {score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
