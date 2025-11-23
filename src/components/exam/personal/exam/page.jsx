import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CodeBlock } from "../../../ui/code-block";
import { Navigate } from "react-router-dom";
import convertToFarsiNumbers from "../../../../functions/convertNumbersToFarsi.js";
import Swal from "sweetalert2";
import "../../../../styles/swal.css";

export default function Exam(props) {
  const location = useLocation();
  const { isDarkTheme } = props;
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "کدام یک از موارد زیر یک نوع داده اولیه در جاوااسکریپت نیست؟",
      options: ["String", "Number", "Boolean", "Array"],
      correctAnswer: "Array",
      canAns: true,
      codeBlock: false,
    },
    {
      id: 2,
      question: "خروجی کد زیر چیست؟",
      codeText: `import random
  for i in range(1, 10):
      print(i * "*")
  if v == 50:
      print(random.randint(0, 50))`,
      options: ["ستاره‌های افزایشی", "عدد تصادفی", "Syntax Error", "هیچ‌کدام"],
      correctAnswer: "Syntax Error",
      canAns: true,
      codeBlock: true,
    },
    {
      id: 3,
      question:
        "کدام متد در جاوااسکری Erik برای افزودن یک عنصر به انتهای آرایه استفاده می‌شود؟",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
      canAns: true,
      codeBlock: false,
    },
    {
      id: 4,
      question: "کدام یک از موارد زیر یک نوع داده اولیه در پایتون نیست؟",
      options: ["String", "Integer", "Boolean", "List"],
      correctAnswer: "List",
      canAns: true,
      codeBlock: false,
    },
    {
      id: 5,
      question: "خروجی کد جاوااسکریپت زیر چیست؟",
      codeText: `let x = 10;
  let y = "5";
  console.log(x + y);`,
      options: ["15", "105", "50", "Syntax Error"],
      correctAnswer: "105",
      canAns: true,
      codeBlock: true,
    },
    {
      id: 6,
      question: "در پایتون، کدام تابع برای محاسبه طول یک لیست استفاده می‌شود؟",
      options: ["len()", "length()", "size()", "count()"],
      correctAnswer: "len()",
      canAns: true,
      codeBlock: false,
    },
    {
      id: 7,
      question: "خروجی کد پایتون زیر چیست؟",
      codeText: `def factorial(n):
      if n == 0:
          return 1
      return n * factorial(n - 1)
  print(factorial(5))`,
      options: ["120", "24", "60", "720"],
      correctAnswer: "120",
      canAns: true,
      codeBlock: true,
    },
    {
      id: 8,
      question:
        "در جاوااسکریپت، کدام کلمه کلیدی برای تعریف ثابت استفاده می‌شود؟",
      options: ["var", "let", "const", "static"],
      correctAnswer: "const",
      canAns: true,
      codeBlock: false,
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [examCompleted, setExamCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [innoCorrectAnsLen, setInnoCorrectAnsLen] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  ); // Track user answers
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          finishExam();
          Swal.fire({
            position: "top-start",
            icon: "error",
            background: "#0D1015",
            title:
              "<h5 style='color:white; font-size: 20px;'>" +
              "وقت آزمون به اتمام رسید. چند لحظۀ دیگر به صفحۀ نتایج هدایت میشوید. لطفا شکیبا باشید" +
              "</h5>",

            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            customClass: {
              icon: "custom-icon-size", // Add a custom class to the icon
              timerProgressBar: "custom-progress-bar",
            },
          });
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Set the selected option and answer index when the current question changes
    setSelectedOption(userAnswers[currentQuestion]);
    setAnswerIndex(
      userAnswers[currentQuestion] !== null
        ? questions[currentQuestion].options.indexOf(
            userAnswers[currentQuestion]
          )
        : null
    );
  }, [currentQuestion, questions, userAnswers]);

  function submitAnswer() {
    const correct = selectedOption === questions[currentQuestion].correctAnswer;
    if (correct) {
      setScore(score + 1);
    } else if (selectedOption !== null && selectedOption !== "") {
      setInnoCorrectAnsLen(innoCorrectAnsLen + 1);
    }

    // Update user answers
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = selectedOption;
    setUserAnswers(newUserAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reset selected option for the next question
      setAnswerIndex(null); // Reset answer index for the next question
    } else {
      finishExam();
    }
  }

  const finishExam = () => {
    setExamCompleted(true);

    const result = {
      totalQuestions: questions.length,
      correctAnswers: score,
      incorrectAnswers: questions.length - score,
      score: score,
    };

    localStorage.setItem("examResult", JSON.stringify(result));
    try {
      navigate(
        `/exams/personal/${location.search.substring(
          location.search.indexOf("=") + 1
        )}/result?lang=${location.search.substring(
          location.search.indexOf("=") + 1
        )}`
      );
    } catch {
      Swal.fire({
        position: "top-start",
        icon: "error",
        background: "#0D1015",
        title:
          "<h5 style='color:white; font-size: 20px;'>" +
          "برای ورود به این بخش باید وارد حساب کاربری خود شوید" +
          "</h5>",

        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        customClass: {
          icon: "custom-icon-size", // Add a custom class to the icon
          timerProgressBar: "custom-progress-bar",
        },
      });
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleOptionClick = (index, option) => {
    if (answerIndex === index) {
      // If the same option is clicked again, deselect it
      setAnswerIndex(null);
      setSelectedOption(null);
    } else {
      setAnswerIndex(index);
      setSelectedOption(option);
    }
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestion(index);
  };

  // Calculate progress
  const answeredQuestions = userAnswers.filter(
    (answer) => answer !== null
  ).length;
  const totalQuestions = questions.length;

  return props.isLoggin !== "notLoggined" ? (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 50,
        transition: { duration: 0.3, mease: "easeInOut" },
      }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`mt-[30px] container w-[90%] sm:w-[750px] mx-auto px-4 py-8 ${
        isDarkTheme ? "text-white bg-[#0D1117]" : " bg-white text-[#0D1117]"
      } border-[1px] border-slate-500 rounded-lg md:flex`}
    >
      <motion.div
        className="md:ml-[30px] mx-auto md:w-[500px] w-[95%]"
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-2xl mx-auto">
          <div>
            <div className="flex md:flex-row flex-col gap-x-[50px] gap-y-[10px] justify-between items-start mb-[20px]">
              <h1 className="text-2xl font-bold">
                سوال {convertToFarsiNumbers((currentQuestion + 1).toString())}{" "}
                از {convertToFarsiNumbers(questions.length.toString())}
              </h1>
              <span>
                زمان باقی‌مانده:{" "}
                {convertToFarsiNumbers(formatTime(timeLeft).toString())}
              </span>
            </div>
          </div>
          <section className="space-y-4">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p className="text-lg font-semibold">
                {questions[currentQuestion].question}
              </p>
              {questions[currentQuestion].codeBlock && (
                <div className="w-[100%] h-auto mt-[20px]">
                  <CodeBlock
                    isDarkTheme={isDarkTheme}
                    language="python"
                    filename="main.py"
                    code={questions[currentQuestion].codeText}
                  />
                </div>
              )}
              <div className="space-y-2  mt-[20px]">
                {questions[currentQuestion].options.map((option, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        transition: { ease: "easeInOut", duration: "0.5" },
                      }}
                      transition={{ ease: "easeInOut", duration: "0.5" }}
                      key={index}
                    >
                      <div
                        className={`text-center cursor-pointer transition-all duration-200 w-full border-[1px] rounded-md p-2 ${
                          index === answerIndex
                            ? "border-blue-500 bg-[#2822c520]"
                            : "border-slate-500 "
                        }  `}
                        onClick={() => handleOptionClick(index, option)}
                      >
                        {option}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          <div className={`w-full ${isDarkTheme? "bg-gray-500": "bg-gray-300"} rounded-full h-2.5 mt-6`}>
              <div
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                style={{
                  width: `${(answeredQuestions / totalQuestions) * 100}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>
                پاسخ‌داده‌شده:{" "}
                {convertToFarsiNumbers(answeredQuestions.toString())}
              </span>
              <span>
                پاسخ‌داده‌نشده:{" "}
                {convertToFarsiNumbers(
                  (totalQuestions - answeredQuestions).toString()
                )}
              </span>
            </div>
            <hr
              style={{ marginTop: "20px", marginBottom: "20px" }}
              className="mt-[50px]"
            />
            <div
              className={`font-bold text-center cursor-pointer transition-all duration-200 w-full border-[1px] rounded-md p-2 ${
                selectedOption === null
                  ? isDarkTheme? "bg-gray-500 cursor-not-allowed": "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              onClick={() => {
                if (selectedOption !== null) {
                  submitAnswer();
                }
              }}
            >
              {currentQuestion == questions.length - 1
                ? "اتمام آزمون"
                : "ثبت سوال و رفتن به سوال بعدی"}
            </div>
          </section>
        </div>
      </motion.div>
      {/* Sidebar for question navigation */}
      <div className="p-5 border-slate-500 mt-[20px] md:mt-0 rounded-lg pt-[10px] md:h-[450px]">
        <div className="grid gap-6 md:grid-cols-5 grid-cols-6 sm:grid-cols-12">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer transition-all duration-200 ${
                userAnswers[index] !== null ? "bg-blue-500" : isDarkTheme? "bg-gray-500": "bg-gray-300"
              }`}
              onClick={() => handleQuestionClick(index)}
            >
              {convertToFarsiNumbers((index + 1).toString())}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  ) : (
    <Navigate to="/exams/personal"></Navigate>
  );
}
