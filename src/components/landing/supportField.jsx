import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import "../../styles/loadingAnimations.css";
import axios from "axios";
import Swal from "sweetalert2";
import "../../styles/swal.css";
import { FaRegUser, FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Input } from "../ui/input";
import { TiMessages } from "react-icons/ti";

export default function SupportField({ isDarkTheme }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [infoText, setInfoText] = useState("");
  const [infoTextEm, setInfoTextEm] = useState("false");
  const [fnameEm, setFnameEm] = useState("false");
  const [lnameEm, setLnameEm] = useState("false");
  const [emailEm, setEmailEm] = useState("false");
  const [isLoading, setIsLoading] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [windowWidth, setWindowWith] = useState(window.innerWidth);

  useEffect(() => {
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
    if (fname !== "" && lname !== "" && email !== "" && infoText != "") {
      setFnameEm("false");
      setLnameEm("false");
      setEmailEm("false");
      setInfoTextEm("false");

      setIsLoading(true);

      axios
        .post("https://retoolapi.dev/izgHMp/supportMessages", {
          fname: fname.trim(),
          lastName: lname.trim(),
          email: email.trim(),
          message: infoText.trim(),
        })
        .then(() => {
          setIsLoading(false);
          Swal.fire({
            position: "top-start",
            icon: "success",
            background: "#0D1015",
            title:
              "<h5 style='color:white; font-size: 20px;'>" +
              "پیام و درخواست شما با موفقیت برای پشتیبان ارسال شد" +
              "</h5>",

            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            customClass: {
              icon: "custom-icon-size", // Add a custom class to the icon
              timerProgressBar: "custom-progress-bar-success",
            },
          });
          setFname("");
          setLname("");
          setEmail("");
          setInfoText("");
        });
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
      if (infoText == "") {
        setInfoTextEm("true");
      } else {
        setInfoTextEm("false");
      }
      showErrorAlert("همۀ فیلد ها باید کامل شوند");
    }
  };
  return (
    <div
      className={`p-5 lg:p-0 w-full mx-auto rounded-xl md:rounded-2xl ${
        isDarkTheme
          ? "bg-slate-900 text-white border-slate-700"
          : "bg-white text-black border-slate-300"
      } border-[0.5px] ${
        windowWidth > 1020 && "flex items-center gap-x-[50px]"
      }`}
    >
      {windowWidth > 1020 && (
        <div
          className="w-[50%] h-[570px] rounded-r-2xl"
          style={{
            backgroundImage:
              "url(https://github.com/ParsaProg/tecama_images/blob/main/photo_2025-02-17_21-51-13.jpg?raw=true)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      )}
      <div className={`${windowWidth > 1020 && "lg:ml-5 pt-[20px] pb-[20px] w-[70%]"}`}>
        <h1 className="text-xl mb-[5px]">
          ارتباط با پشتیبان ( برنامه‌نویس سامانه )
        </h1>
        <h1
          className={`mb-[5px] ${
            isDarkTheme ? "text-slate-300" : "text-slate-800"
          } font-[400] text-md`}
        >
          آیا به کمک یا پشتیبانی نیاز دارید؟ درخواست همکاری یا هر خواست دیگر را برای
          ما بنویسید
        </h1>
        <form
          className={`mt-8 ${
            isDarkTheme ? "text-slate-300" : "text-slate-700"
          }`}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row items-center gap-3 mb-4">
            <LabelInputContainer>
              <h1
                className={`${
                  isDarkTheme ? "text-slate-300" : "text-slate-700"
                } font-bold text-lg mb-1`}
              >
                نام
              </h1>
              <div className={`relative flex items-center rounded-lg ${isDarkTheme? "text-white": "text-slate-500"}`}>
                <Input
                  theme={isDarkTheme}
                  value={fname}
                  setstatetext={setFname}
                  empty={fnameEm}
                  placeholder="نام مستعار"
                  type="text"
                />
                <div className="absolute right-3">
                  <FaUser size={18} />
                </div>
              </div>
            </LabelInputContainer>
            <LabelInputContainer>
              <h1
                className={`${
                  isDarkTheme ? "text-slate-300" : "text-slate-700"
                } font-bold text-lg mb-1`}
              >
                نام خانوادگی
              </h1>
              <div className={`relative flex items-center rounded-lg ${isDarkTheme? "text-white": "text-slate-500"}`}>
                <Input
                  theme={isDarkTheme}
                  value={lname}
                  empty={lnameEm}
                  setstatetext={setLname}
                  placeholder="نام خانوادگی"
                  type="text"
                />
                <div className="absolute right-3">
                  <FaRegUser size={18} />
                </div>
              </div>
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <h1
              className={`${
                isDarkTheme ? "text-slate-300" : "text-slate-700"
              } font-bold text-lg mb-1`}
            >
              آدرس ایمیل
            </h1>
            <div className={`relative flex items-center rounded-lg ${isDarkTheme? "text-white": "text-slate-500"}`}>
              <Input
                theme={isDarkTheme}
                value={email}
                empty={emailEm}
                setstatetext={setEmail}
                placeholder="ایمیل خود را وارد کنید"
                type="email"
              />
              <div className="absolute right-3">
                <MdOutlineMail size={20} />
              </div>
            </div>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <h1
              className={`${
                isDarkTheme ? "text-slate-300" : "text-slate-700"
              } font-bold text-lg mb-1`}
            >
              متن پیام یا درخواست خود را بنویسید
            </h1>
            <div className="relative rounded-lg flex items-start justify-between">
              <textarea
                placeholder="متن درخواست خود را بنویسید"
                value={infoText}
                style={
                  infoTextEm === "true" ? { border: "1px solid #eb3d51" } : {}
                }
                onChange={(e) => {
                  setInfoText(e.target.value);
                }}
                maxLength={400}
                id="infoText"
                border="true"
                className={`${isDarkTheme? "form-inputs": "form-inputs2 "} min-h-[50px] max-h-[100px] h-full flex w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200  placeholder:text-slate-400 border-slate-400 outline-[3px] fill-none focus-visible:outline-white outline-offset-4 bg-transparent text-justify`} // Add padding to the right for the icon
              />
              <div className={`absolute top-4 right-3 ${!isDarkTheme&& "text-slate-500"}`}>
                <TiMessages size={20} />
              </div>
            </div>
          </LabelInputContainer>

          <button
            disabled={isLoading}
            className="transition-all duration-200 flex items-center justify-center gap-2 relative group/btn bg-[#2563EB] text-white w-full rounded-lg h-10 font-medium disabled:bg-[#2f2ba1] hover:bg-[#2f2ba1]"
            type="submit"
          >
            ثبت درخواست
            {isLoading && <div className="loader"></div>}
            <BottomGradient />
          </button>
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
