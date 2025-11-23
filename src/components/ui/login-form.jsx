import React, { useEffect, useState } from "react";
import { Input } from "./input";
import { cn } from "../lib/utils";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/loadingAnimations.css";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import "../../styles/swal.css";
import Swal from "sweetalert2";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import LottieAnimation from "../../assets/lottie/Animation - 1746437345222.json";
import Lottie from "lottie-react";

export function Loginform({ isDarkTheme }) {
  const [motivationalQuote, setMotivationalQuote] = useState("");
  function getRandomMotivationalQuote() {
    const quotes = [
      "سفر هزار فرسنگ با یک قدم آغاز می‌شود | امروز اولین قدم را بردارید",
      "موفقیت جمع چیزهای کوچک است که هر روز تکرار می‌شوند | ثابت قدم باشید",
      "برترین نسخه خودت باش | تو توانایی‌هایی داری که هنوز کشف نکرده‌ای",
      "هر روز فرصتی جدید است | از امروزت نهایت استفاده را ببر",
      "محدودیت‌ها فقط در ذهن ما وجود دارند | رویاهای بزرگ داشته باش",
      "تمرکز + تلاش = موفقیت | معادله ساده زندگی",
      "اشتباهات پله‌های ترقی هستند | از هر تجربه چیزی بیاموز",
      "امروز همان فردایی است که دیروز نگرانش بودی | زمان را دریاب",
      "استعداد مهم نیست، پشتکار مهم است | تسلیم نشو",
      "شکست پایان راه نیست، بلکه درس جدیدی است | ادامه بده",
    ];

    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailEmpty, setEmailEmpty] = useState("false");
  const [passwordEmpty, setPasswordEmpty] = useState("false");
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWith] = useState(window.innerWidth);
  const navigate = useNavigate();

  function showErrorAlert(title) {
    Swal.fire({
      position: "top-start",
      icon: "error",
      background: isDarkTheme ? "#0D1015" : "#ffffff",
      title:
        "<h5 style='color:" +
        (isDarkTheme ? "white" : "black") +
        "; font-size: 20px;'>" +
        title +
        "</h5>",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      customClass: {
        icon: "custom-icon-size",
        timerProgressBar: "custom-progress-bar",
      },
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() !== "" && email.trim() !== "") {
      setIsLoading(true);
      setEmailEmpty("false");
      setPasswordEmpty("false");
      try {
        axios
          .get("https://retoolapi.dev/tPNiZj/tecama-users")
          .then((response, v) => {
            const usersList = response.data;

            const isExist = usersList.find(
              (user) => user.email.toLowerCase() === email.trim().toLowerCase()
            );
            if (isExist) {
              if (isExist.password == password) {
                setPasswordEmpty("false");
                localStorage.setItem("refToken", isExist.token);
                setTimeout(() => {
                  setIsLoading(false);
                  navigate("/");
                  window.location.reload();
                }, 2000);
              } else {
                setIsLoading(false);
                showErrorAlert("رمز عبور وارد شده نامعتبر است");
                setPasswordEmpty("true");
              }
            } else {
              setIsLoading(false);
              setEmailEmpty("true");
              showErrorAlert("این ایمیل در سامانه ثبت نشده و نامعتبر است");
            }
          });
      } catch (err) {
        setIsLoading(false);
      }
    } else {
      if (password == "" && email !== "") {
        setPasswordEmpty("true");
        showErrorAlert("وارد کردن رمز عبور الزامی است");
      }
      if (email == "" && password !== "") {
        setEmailEmpty("true");
        showErrorAlert("وارد کردن ایمیل الزامی است");
      }
      if (email == "" && password == "") {
        setEmailEmpty("true");
        setPasswordEmpty("true");
        showErrorAlert("وارد کردن هر دو فیل الزامی است");
      }
    }
  };

  useEffect(() => {
    setMotivationalQuote(getRandomMotivationalQuote());
    window.addEventListener("resize", () => setWindowWith(window.innerWidth));
  }, []);

  return (
    <div
      className={`login-container mx-[10px] mt-[150px] ${
        windowWidth < 1020 ? "max-w-md w-full" : " w-[1020px]"
      } md:mx-auto rounded-xl md:rounded-2xl ${
        isDarkTheme ? "bg-[#191928]" : "bg-[#f5f5f5]"
      } ${windowWidth > 1020 && "flex items-start gap-[50px]"}`}
    >
      {windowWidth > 1020 && (
        <div
          className={`none md:block text-${
            isDarkTheme ? "white" : "black"
          } w-[600px] h-[520px] rounded-r-2xl bg-gradient-to-l from-[#7952B3] to-[#4A5FB5] relative`}
        >
          <div
            className={`absolute top-10 right-10 font-bold text-white text-4xl`}
          >
            خوش آمدید!
          </div>
          <div
            className={`absolute top-32 right-[50%] translate-x-[50%]`}
            style={{ width: "300px", height: "300px" }}
          >
            <Lottie
              animationData={LottieAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
          <div
            className={`absolute top-24 right-10 font-[500] text-white text-lg`}
          >
            لطفا برای ورود به حساب کاربری خود، اطلاعات خود را وارد کنید
          </div>
          <div
            className={`absolute bottom-10 right-10 font-bold text-white text-xl pl-10`}
          >
            {motivationalQuote}
          </div>
        </div>
      )}
      <div
        className={`${windowWidth > 1020 && "w-[50%] md:pt-[50px] pl-[50px]"}`}
      >
        <h1
          className={`mb-[5px] text-${
            isDarkTheme ? "white" : "black"
          } text-2xl sm:text-4xl font-bold`}
        >
          ورود به حساب تکاما
        </h1>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <h1
              className={`font-bold text-lg text-${
                isDarkTheme ? "white" : "black"
              } mb-1`}
            >
              آدرس ایمیل
            </h1>
            <div className="relative rounded-lg flex items-center">
              <Input
                theme={isDarkTheme}
                value={email}
                empty={emailEmpty}
                setstatetext={setEmail}
                id="email"
                placeholder="ایمیل خود را وارد کنید"
                type="email"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FaRegUser size={20} color={isDarkTheme ? "white" : "black"} />
              </div>
            </div>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <h1
              className={`font-bold text-lg text-${
                isDarkTheme ? "white" : "black"
              } mb-1`}
            >
              رمز عبور
            </h1>
            <div className="relative rounded-lg flex items-center">
              <Input
                theme={isDarkTheme}
                value={password}
                empty={passwordEmpty}
                setstatetext={setPassword}
                id="password"
                placeholder="یک رمز عبور قدرتمند وارد کنید"
                type={showPassword ? "text" : "password"}
                border="true"
              />
              <div className="absolute inset-y-0 left-3 flex items-center pr-3">
                {showPassword ? (
                  <LuEyeOff
                    onClick={() => {
                      setShowPassword(false);
                    }}
                    size={25}
                    color={isDarkTheme ? "white" : "black"}
                    className="cursor-pointer"
                  />
                ) : (
                  <LuEye
                    onClick={() => {
                      setShowPassword(true);
                    }}
                    size={25}
                    color={isDarkTheme ? "white" : "black"}
                    className="cursor-pointer"
                  />
                )}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <RiLockPasswordLine
                  size={20}
                  color={isDarkTheme ? "white" : "black"}
                />
              </div>
            </div>
          </LabelInputContainer>

          <h1
            className={`text-${
              isDarkTheme ? "[#b7c9f0]" : "[#4a5568]"
            } font-[400] my-[15px] cursor-pointer transition-all duration-200 hover:text-${
              isDarkTheme ? "slate-200" : "slate-600"
            }`}
          >
            فراموشی رمز عبور؟
          </h1>

          <button
            className="transition-all duration-200 flex items-center justify-center gap-2 relative group/btn bg-[#2563EB] w-full text-white rounded-lg p-[15px] text-md hover:bg-[#2f2ba1]"
            type="submit"
          >
            {!isLoading && "ورود به حساب"}
            {isLoading && <div className="loader"></div>}
            <BottomGradient />
          </button>
          <div
            className={`flex items-center justify-center text-${
              isDarkTheme ? "white" : "black"
            } font-[500] mt-5 gap-x-1`}
          >
            حساب کاربری ندارید؟
            <Link to="/register">
              <p
                className={`max-w-sm text-${
                  isDarkTheme ? "blue-500" : "blue-600"
                } text-md hover:text-${
                  isDarkTheme ? "white" : "black"
                } transition-all duration-200`}
              >
                ثبت نام
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-white to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
