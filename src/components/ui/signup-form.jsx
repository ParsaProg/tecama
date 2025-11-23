import React, { useEffect, useState } from "react";
import { Input } from "./input";
import { cn } from "../lib/utils";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/loadingAnimations.css";
import { generateSecureToken } from "../lib/tokenGenerator";
import axios from "axios";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import Swal from "sweetalert2";
import "../../styles/swal.css";
import { FaRegUser, FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbPasswordFingerprint } from "react-icons/tb";
import LottieAnimation from "../../assets/lottie/Animation - 1746437345222.json";
import Lottie from "lottie-react";

export function SignupForm({ isDarkTheme }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fnameEm, setFnameEm] = useState("false");
  const [lnameEm, setLnameEm] = useState("false");
  const [emailEm, setEmailEm] = useState("false");
  const [passwordEm, setPasswordEm] = useState("false");
  const [confirmPasswordEm, setConfirmPasswordEm] = useState("false");
  const [isLoading, setIsLoading] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [windowWidth, setWindowWith] = useState(window.innerWidth);
  const navigate = useNavigate();
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

  useEffect(() => {
    setMotivationalQuote(getRandomMotivationalQuote());
    window.addEventListener("resize", () => setWindowWith(window.innerWidth));
  }, []);
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
    if (
      fname.trim() !== "" &&
      lname.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() != "" &&
      confirmPassword.trim() !== ""
    ) {
      setFnameEm("false");
      setLnameEm("false");
      setEmailEm("false");
      setPasswordEm("false");
      setConfirmPasswordEm("false");
      const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (email.match(re)) {
        if (
          password.trim() == confirmPassword.trim() &&
          password.trim().length >= 8
        ) {
          setIsLoading(true);
          try {
            axios
              .get("https://retoolapi.dev/tPNiZj/tecama-users")
              .then((response, v) => {
                const usersList = response.data; // Extract the list of users from the response

                // Find the user with the matching token
                const isExist = usersList.find(
                  (user) => user.email === email.trim()
                );

                if (isExist) {
                  setEmailEm("true");
                  showErrorAlert("ایمیل وارد شده از قبل وجود دارد");
                  setIsLoading(false);
                } else {
                  const token = generateSecureToken();
                  const userData = {
                    fname: fname.trim(),
                    lname: lname.trim(),
                    email: email.trim(),
                    password: password.trim(),
                    token: token,
                  };
                  localStorage.setItem("refToken", token);
                  axios
                    .post("https://retoolapi.dev/tPNiZj/tecama-users", userData)
                    .then(() => {
                      setIsLoading(false);
                      Swal.fire({
                        position: "top-start",
                        icon: "success",
                        background: "#0D1015",
                        title:
                          "<h5 style='color:white; font-size: 20px;'>" +
                          "حساب کاربری با موفقیت ایجاد شد. به صفحۀ اصلی منتقل میشوید" +
                          "</h5>",

                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        customClass: {
                          icon: "custom-icon-size", // Add a custom class to the icon
                          timerProgressBar: "custom-progress-bar-success",
                        },
                      });
                      setTimeout(() => {
                        navigate("/");
                        window.location.reload();
                      }, 2000);
                    })
                    .catch((error) => {
                      setIsLoading(false);
                      showErrorAlert(`حساب کاربری ایجاد نشد. مشکل: ${error}`);
                    });
                }
              });
          } catch (err) {
            console.log(err);
          }
        } else {
          if (password == confirmPassword) {
            setPasswordEm("true");
            setConfirmPasswordEm("true");
            showErrorAlert("رمز عبور حداقل باید 8 رقم باشد");
          } else {
            setConfirmPasswordEm("true");
            showErrorAlert("تکرار رمز عبور اشتباه است");
          }
        }
      } else {
        setEmailEm("true");
        showErrorAlert("ایمیل وارد شده نامعتبر است");
      }
    } else {
      if (fname == "") {
        setFnameEm("true");
      } else {
        setFnameEm("false");
      }
      if (lname == "") {
        setLnameEm("true");
      } else {
        setLnameEm("false");
      }
      if (email == "") {
        setEmailEm("true");
      } else {
        setEmailEm("false");
      }
      if (password == "") {
        setPasswordEm("true");
      } else {
        setPasswordEm("false");
      }
      if (confirmPassword == "") {
        setConfirmPasswordEm("true");
      } else {
        setConfirmPasswordEm("false");
      }
      showErrorAlert("همۀ فیلد ها باید کامل شوند");
    }
  };
  return (
    <div
      className={`login-container mx-[10px] mt-[120px] ${
        windowWidth < 1020 ? "max-w-md w-full" : " w-[1020px]"
      } md:mx-auto rounded-xl md:rounded-2xl ${
        isDarkTheme ? "bg-[#191928]" : "bg-[#f5f5f5]"
      } ${windowWidth > 1020 && "flex items-start gap-[50px]"}`}
    >
      {windowWidth > 1020 && (
        <div
          className={`none md:block text-${
            isDarkTheme ? "white" : "black"
          } w-[600px] h-[720px] rounded-r-2xl bg-gradient-to-l from-[#7952B3] to-[#4A5FB5] relative`}
        >
          <div
            className={`absolute top-10 right-10 font-bold text-white text-4xl`}
          >
            خوش آمدید!
          </div>
          <div
            className={`absolute top-[50%] right-[50%] translate-y-[-50%] translate-x-[50%]`}
            style={{ width: "500px", height: "500px" }}
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
            لطفا برای ساختن حساب کاربری خود، اطلاعات خود را وارد کنید
          </div>
          <div
            className={`absolute bottom-10 right-10 font-bold text-white text-xl pl-10`}
          >
            {motivationalQuote}
          </div>
        </div>
      )}
      <div
        className={`${windowWidth > 1020 && "w-[50%] md:pt-[30px] pl-[50px]"}`}
      >
        <h1
          className={`mb-[5px] text-${
            isDarkTheme ? "white" : "black"
          } text-2xl sm:text-4xl font-bold`}
        >
          ثبت‌نام در تکاما
        </h1>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-row items-center gap-3 mb-4">
            <LabelInputContainer>
              <h1
                className={`font-bold text-lg text-${
                  isDarkTheme ? "white" : "black"
                } mb-1`}
              >
                نام
              </h1>
              <div className="relative flex items-center rounded-lg">
                <Input
                  theme={isDarkTheme}
                  value={fname}
                  setstatetext={setFname}
                  empty={fnameEm}
                  placeholder="نام مستعار"
                  type="text"
                />
                <div
                  className={`absolute right-3 text-${
                    isDarkTheme ? "white" : "black"
                  }`}
                >
                  <FaUser size={20} />
                </div>
              </div>
            </LabelInputContainer>
            <LabelInputContainer>
              <h1
                className={`font-bold text-lg text-${
                  isDarkTheme ? "white" : "black"
                } mb-1`}
              >
                نام خانوادگی
              </h1>
              <div className="relative flex items-center rounded-lg">
                <Input
                  theme={isDarkTheme}
                  value={lname}
                  empty={lnameEm}
                  setstatetext={setLname}
                  placeholder="نام خانوادگی"
                  type="text"
                />
                <div
                  className={`absolute right-0 pr-3 text-${
                    isDarkTheme ? "white" : "black"
                  }`}
                >
                  <FaRegUser size={20} />
                </div>
              </div>
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <h1
              className={`font-bold text-lg text-${
                isDarkTheme ? "white" : "black"
              } mb-1`}
            >
              آدرس ایمیل
            </h1>
            <div className="relative flex items-center rounded-lg">
              <Input
                theme={isDarkTheme}
                value={email}
                empty={emailEm}
                setstatetext={setEmail}
                placeholder="ایمیل خود را وارد کنید"
                type="text"
              />
              <div
                className={`absolute right-0 pr-3 text-${
                  isDarkTheme ? "white" : "black"
                }`}
              >
                <MdOutlineMail size={23} />
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
            <div className="relative rounded-lg flex items-center justify-between">
              <Input
                theme={isDarkTheme}
                value={password}
                empty={passwordEm}
                setstatetext={setPassword}
                id="password"
                placeholder="یک رمز عبور قدرتمند وارد کنید"
                type={showPassword ? "text" : "password"}
                border="true"
                className="pr-10"
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
              <div
                className={`absolute inset-y-0 right-0 flex items-center pr-3 text-${
                  isDarkTheme ? "white" : "black"
                }`}
              >
                <RiLockPasswordLine size={23} />
              </div>
            </div>
          </LabelInputContainer>
          <LabelInputContainer>
            <h1
              className={`font-bold text-lg text-${
                isDarkTheme ? "white" : "black"
              } mb-1`}
            >
              تکرار رمز عبور
            </h1>
            <div className="flex items-center rounded-lg relative">
              <Input
                theme={isDarkTheme}
                value={confirmPassword}
                empty={confirmPasswordEm}
                setstatetext={setConfirmPassword}
                id="confirmpassword"
                placeholder="رمز عبور را برای اطمینان دوباره وارد کنید"
                type={showPassword ? "text" : "password"}
              />
              <div
                className={`absolute inset-y-0 right-0 flex items-center pr-3 text-${
                  isDarkTheme ? "white" : "black"
                }`}
              >
                <TbPasswordFingerprint size={23} />
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
            disabled={isLoading}
            className="transition-all duration-200 flex items-center justify-center gap-2 relative group/btn bg-[#2563EB] w-full text-white rounded-md p-[15px] text-md disabled:bg-[#2f2ba1] hover:bg-[#2f2ba1]"
            type="submit"
          >
            {!isLoading && "ثبت نام"}
            {isLoading && <div className="loader"></div>}
            <BottomGradient />
          </button>
          <div
            className={`flex items-center justify-center text-${
              isDarkTheme ? "white" : "black"
            } font-[500] mt-5 gap-x-1`}
          >
            حساب کاربری دارید؟
            <Link to="/login">
              <p
                className={`max-w-sm text-${
                  isDarkTheme ? "blue-500" : "blue-600"
                } text-md hover:text-${
                  isDarkTheme ? "white" : "black"
                } transition-all duration-200`}
              >
                ورود به حساب
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
    <div
      className={cn("text-[#B5B3C0] flex flex-col space-y-2 w-full", className)}
    >
      {children}
    </div>
  );
};
