import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { cn } from "../lib/utils";
import "../../styles/loadingAnimations.css";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import "../../styles/swal.css";
import Swal from "sweetalert2";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

export default function AdminLogin() {
  const ADMIN_USERNAME = "tecama_admin";
  const ADMIN_PASSWORD = "X#9vT!e2pL@7rWqZ$1fG";
  const ADMIN_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1IiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNDA2NzY1OSwiZXhwIjoxNzE0MDc0ODU5fQ.wFRBgNphZ4kjcHqlw5W1EbH7DWBZQgJeUIfpBTyQpOc";
  const isLoginToAdmin = sessionStorage.getItem("admin_token") === ADMIN_TOKEN;

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
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameEmpy, setUserNameEmpty] = useState("false");
  const [passwordEmpty, setPasswordEmpty] = useState("false");
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWith] = useState(window.innerWidth);
  const navigate = useNavigate();
  function showErrorAlert(title) {
    Swal.fire({
      position: "top-start",
      icon: "error",
      background: "#0D1015",
      title: "<h5 style='color:white; font-size: 20px;'>" + title + "</h5>",

      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      customClass: {
        icon: "custom-icon-size", // Add a custom class to the icon
        timerProgressBar: "custom-progress-bar",
      },
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() !== "" && username.trim() !== "") {
      setIsLoading(true);
      setUserNameEmpty("false");
      setPasswordEmpty("false");
      setIsLoading(false);
      if (username === ADMIN_USERNAME) {
        setUserNameEmpty("false");
        if (password === ADMIN_PASSWORD) {
          setPassword("false");
          sessionStorage.setItem("admin_token", ADMIN_TOKEN)
          navigate("/admin/dashboard");
        } else {
          setPassword("true");
          showErrorAlert("رمز‌عبور وارد شده نا‌معتبر است");
        }
      } else {
        showErrorAlert("نام‌کاربری وارد شده نا‌معتبر است");
        setUserNameEmpty("true");
      }
    } else {
      if (password == "" && username !== "") {
        setPasswordEmpty("true");
        showErrorAlert("وارد کردن رمز عبور الزامی است");
      }
      if (username == "" && password !== "") {
        setUserNameEmpty("true");
        showErrorAlert("وارد کردن نام‌کاربری الزامی است");
      }
      if (username == "" && password == "") {
        setUserNameEmpty("true");
        setPasswordEmpty("true");
        showErrorAlert("وارد کردن هر دو فیل الزامی است");
      }
    }
  };

  useEffect(() => {
    isLoginToAdmin && navigate("/admin/dashboard");
    setMotivationalQuote(getRandomMotivationalQuote());
    window.addEventListener("resize", () => setWindowWith(window.innerWidth));
  }, []);
  return (
    !isLoginToAdmin && (
      <div className="flex items-center justify-center w-full">
        <div
          className={`login-container mx-[10px] mt-[120px] ${
            windowWidth < 1020 ? "max-w-md w-full" : " w-[1020px]"
          } md:mx-auto rounded-xl md:rounded-2xl bg-[#191928]  ${
            windowWidth > 1020 && "flex items-start gap-[50px]"
          }`}
        >
          {windowWidth > 1020 && (
            <div className="none md:block  text-white w-[600px] h-[520px] rounded-r-2xl bg-gradient-to-l from-[#7952B3] to-[#4A5FB5] relative">
              <div className="absolute top-10 right-10 font-bold text-white text-4xl">
                خوش آمدید!
              </div>
              <div className="absolute top-24 right-10 font-[500] text-white text-lg">
                لطفا برای ورود به پنل ادمین تکاما، اطلاعات را وارد کنید
              </div>
              <div className="absolute bottom-10 right-10 font-bold text-white text-xl pl-10">
                {motivationalQuote}
              </div>
            </div>
          )}
          <div
            className={`${
              windowWidth > 1020 && "w-[50%] md:pt-[50px] pl-[50px]"
            }`}
          >
            <h1 className="mb-[5px] text-white text-2xl sm:text-4xl font-bold">
              ورود به پنل ادمین
            </h1>

            <form className="my-8" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-4">
                <h1 className="font-bold text-lg text-white mb-1">
                  نام کاربری
                </h1>
                <div className="relative rounded-lg flex items-center">
                  <Input
                    value={username}
                    empty={usernameEmpy}
                    setstatetext={setUserName}
                    id="username"
                    placeholder="نام‌کاربری را وارد کنید"
                    type="text"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaRegUser size={20} color="white" />
                  </div>
                </div>
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <h1 className="font-bold text-lg text-white mb-1">رمز عبور</h1>
                <div className="relative rounded-lg flex items-center">
                  <Input
                    value={password}
                    empty={passwordEmpty}
                    setstatetext={setPassword}
                    id="password"
                    placeholder="رمز عبور را وارد کنید"
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
                        color="white"
                        className="cursor-pointer"
                      />
                    ) : (
                      <LuEye
                        onClick={() => {
                          setShowPassword(true);
                        }}
                        size={25}
                        color="white"
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <RiLockPasswordLine size={20} color="white" />
                  </div>
                </div>
              </LabelInputContainer>

              <h1 className="text-[#b7c9f0] font-[400] my-[15px] cursor-pointer transition-all duration-200 hover:text-slate-200">
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
            </form>
          </div>
        </div>
      </div>
    )
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
    <div
      className={cn("text-[#B5B3C0] flex flex-col space-y-2 w-full", className)}
    >
      {children}
    </div>
  );
};
