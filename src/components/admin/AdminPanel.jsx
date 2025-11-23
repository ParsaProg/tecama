import { GoBell } from "react-icons/go";
import convertToFarsiNumbers from "../../functions/convertNumbersToFarsi";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { RiVideoAiLine } from "react-icons/ri";
import { MdOutlineArticle } from "react-icons/md";
import { MdOutlinePodcasts } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import { useEffect } from "react";
import "../../styles/swal.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { PiExamThin } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
import { MdOutlinePoll } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { BsPatchQuestion } from "react-icons/bs";

export default function AdminPanel() {
  const activitys = [
    {
      color: "bg-red-600",
      text: "دوره‌ی جدید به سیستم اضافه شد",
      time: "10 دقیقه پیش",
    },
    {
      color: "bg-blue-600",
      text: "دوره‌ی جدید به سیستم اضافه شد",
      time: "10 دقیقه پیش",
    },
    {
      color: "bg-orange-600",
      text: "دوره‌ی جدید به سیستم اضافه شد",
      time: "10 دقیقه پیش",
    },
    {
      color: "bg-pink-600",
      text: "دوره‌ی جدید به سیستم اضافه شد",
      time: "10 دقیقه پیش",
    },
  ];
  const works = [
    {
      tik: false,
      text: "دوره‌ی «مبانی هوش مصنوعی» در انتظار تأیید است.",
    },
    {
      tik: true,
      text: "مقاله‌ی «آموزش GraphQL برای مبتدیان» با موفقیت منتشر شد.",
    },
    {
      tik: false,
      text: "کاربر جدیدی با نام 'alireza_dev' ثبت‌نام کرده است.",
    },
    {
      tik: false,
      text: "درخواست ویرایش دوره‌ی «React پیشرفته» ارسال شده است.",
    },
  ];

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
  const ADMIN_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1IiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNDA2NzY1OSwiZXhwIjoxNzE0MDc0ODU5fQ.wFRBgNphZ4kjcHqlw5W1EbH7DWBZQgJeUIfpBTyQpOc";
  const isLoginToAdmin = sessionStorage.getItem("admin_token") === ADMIN_TOKEN;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoginToAdmin) {
      showErrorAlert("شما به این بخش دسترسی ندارید");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, []);
  return (
    isLoginToAdmin && (
      <div className="text-white mx-8 mt-5 w-[95%]">
        <div className="flex justify-between w-full items-center pb-5">
          <h1 className="font-bold text-2xl">پنل مدیریت ادمین تکاما</h1>
          <section className="flex items-center gap-x-5">
            <div className="relative flex items-center justify-center p-3 rounded-lg text-white border-slate-700 border-[1.6px] cursor-pointer hover:bg-slate-700 transition-all duration-200">
              <GoBell size={20} />
              <div className="absolute top-[-5px] right-[-5px] rounded-full text-white w-[25px] h-[25px] bg-blue-500 flex items-center justify-center text-sm">
                {convertToFarsiNumbers("3")}
              </div>
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-r from-purple-600 to-blue-600 cursor-pointer"></div>
          </section>
        </div>
        <div className="flex w-full">
          <div className="h-[780px] bg-[#0D1526] border-b-[1px]  border-t-[1px] border-r-[1px] border-l-[1px] border-l-slate-700 border-t-slate-700 border-r-slate-700 border-b-slate-700 py-3 pl-5 pr-3 w-[250px] text-white rounded-r-lg">
            <div className="flex items-center gap-x-3 transition-all duration-200 hover:bg-slate-800 rounded-md p-3 cursor-pointer">
              <LuLayoutDashboard size={20} />
              داشبورد
            </div>
            <div className="flex items-center gap-x-3 transition-all duration-200 hover:bg-slate-800 rounded-md p-3 cursor-pointer">
              <PiUsersThree size={20} />
              کاربران
            </div>
            <div className="flex items-center gap-x-3 transition-all duration-200 hover:bg-slate-800 rounded-md p-3 cursor-pointer">
              <RiVideoAiLine size={20} />
              دوره‌ها
            </div>
            <div className="flex items-center gap-x-3 transition-all duration-200 hover:bg-slate-800 rounded-md p-3 cursor-pointer">
              <MdOutlineArticle size={20} />
              مقالات
            </div>
            <div className="flex items-center gap-x-3 transition-all duration-200 hover:bg-slate-800 rounded-md p-3 cursor-pointer">
              <MdOutlinePodcasts size={20} />
              پادکست‌ها
            </div>
            <div className="flex items-center gap-x-3 transition-all duration-200 hover:bg-slate-800 rounded-md p-3 cursor-pointer">
              <MdOutlinePoll size={20} />
              نظرسنجی‌ها
            </div>
            <div className="flex items-center gap-x-3 transition-all duration-200 hover:bg-slate-800 rounded-md p-3 cursor-pointer">
              <PiExamThin size={20} />
              آزمون‌های فردی
            </div>
            <div className="flex items-center gap-x-3 transition-all duration-200 hover:bg-slate-800 rounded-md p-3 cursor-pointer">
              <GiTrophyCup  size={20} />
              آزمون‌های رقابتی
            </div>
            <div className="flex items-center gap-x-3 transition-all duration-200 hover:bg-slate-800 rounded-md p-3 cursor-pointer">
              <GoQuestion size={20} />
              پرسش‌ها و مشکلات
            </div>
            <div className="flex items-center gap-x-3 transition-all duration-200 hover:bg-slate-800 rounded-md p-3 cursor-pointer">
              <BsPatchQuestion  size={20} />
              سوالات پر‌تکرار
            </div>
            <div className="flex items-center gap-x-3 transition-all duration-200 hover:bg-slate-800 rounded-md p-3 cursor-pointer">
              <BiMessageSquareDots size={20} />
              پیام کاربران
            </div>
          </div>
          <div className="h-[780px] w-full border-t-slate-700 border-t-[1px] border-b-slate-700 border-b-[1px] border-l-slate-700 border-l-[1px] text-white p-7 rounded-l-lg">
            <h1 className="font-bold text-3xl mb-3">داشبورد</h1>
            <h2 className="font-[400] text-slate-400 text-md">
              به پنل مدیریت خوش آمدید. از اینجا می‌توانید تمام بخش‌های سایت را
              مدیریت کنید.
            </h2>
            {/* Stats Cards */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
                <div className="text-white flex items-center justify-between">
                  <h1 className="font-medium text-sm lg:text-base">
                    دوره‌های در حال یادگیری
                  </h1>
                  <RiVideoAiLine size={23} />
                </div>
                <h4 className="text-white font-bold text-xl lg:text-2xl mt-2">
                  ۲۴
                </h4>
                <h4 className="text-gray-400 text-xs lg:text-sm mt-2">
                  از ۵۶ دورۀ موجود
                </h4>
              </div>
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
                <div className="text-white flex items-center justify-between">
                  <h1 className="font-medium text-sm lg:text-base">
                    کاربران فعال
                  </h1>
                  <PiUsersThree size={23} />
                </div>
                <h4 className="text-white font-bold text-xl lg:text-2xl mt-2">
                  {convertToFarsiNumbers("1,000")}
                </h4>
                <h4 className="text-gray-400 text-xs lg:text-sm mt-2">
                  {convertToFarsiNumbers("از 20 هزار کاربر")}
                </h4>
              </div>
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
                <div className="text-white flex items-center justify-between">
                  <h1 className="font-medium text-sm lg:text-base">مقالات</h1>
                  <MdOutlineArticle size={23} />
                </div>
                <h4 className="text-white font-bold text-xl lg:text-2xl mt-2">
                  {convertToFarsiNumbers("130")}
                </h4>
                <h4 className="text-gray-400 text-xs lg:text-sm mt-2">
                  {convertToFarsiNumbers("از 200 مقالۀ موجود")}
                </h4>
              </div>
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
                <div className="text-white flex items-center justify-between">
                  <h1 className="font-medium text-sm lg:text-base">پادکست</h1>
                  <MdOutlinePodcasts size={23} />
                </div>
                <h4 className="text-white font-bold text-xl lg:text-2xl mt-2">
                  {convertToFarsiNumbers("34")}
                </h4>
                <h4 className="text-gray-400 text-xs lg:text-sm mt-2">
                  {convertToFarsiNumbers("از بین 40 پادکست")}
                </h4>
              </div>
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
                <div className="text-white flex items-center justify-between">
                  <h1 className="font-medium text-sm lg:text-base">
                    آزمون‌های سنجش فردی
                  </h1>
                  <PiExamThin size={23} />
                </div>
                <h4 className="text-white font-bold text-xl lg:text-2xl mt-2">
                  {convertToFarsiNumbers("17")}
                </h4>
                <h4 className="text-gray-400 text-xs lg:text-sm mt-2">
                  {convertToFarsiNumbers("از بین 23 آزمون")}
                </h4>
              </div>
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
                <div className="text-white flex items-center justify-between">
                  <h1 className="font-medium text-sm lg:text-base">
                    آزمون‌های رقابتی
                  </h1>
                  <GiTrophyCup size={23} />
                </div>
                <h4 className="text-white font-bold text-xl lg:text-2xl mt-2">
                  {convertToFarsiNumbers("10")}
                </h4>
                <h4 className="text-gray-400 text-xs lg:text-sm mt-2">
                  {convertToFarsiNumbers("از بین 15 آزمون")}
                </h4>
              </div>
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
                <div className="text-white flex items-center justify-between">
                  <h1 className="font-medium text-sm lg:text-base">
                    نظرسنجی‌های فعال
                  </h1>
                  <MdOutlinePoll size={23} />
                </div>
                <h4 className="text-white font-bold text-xl lg:text-2xl mt-2">
                  {convertToFarsiNumbers("34")}
                </h4>
                <h4 className="text-gray-400 text-xs lg:text-sm mt-2">
                  {convertToFarsiNumbers("از بین 40 نظرسنجی")}
                </h4>
              </div>
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
                <div className="text-white flex items-center justify-between">
                  <h1 className="font-medium text-sm lg:text-base">
                    پرسش‌ها و مشکلات کاربران
                  </h1>
                  <GoQuestion size={23} />
                </div>
                <h4 className="text-white font-bold text-xl lg:text-2xl mt-2">
                  {convertToFarsiNumbers("250")}
                </h4>
                <h4 className="text-gray-400 text-xs lg:text-sm mt-2">
                  {convertToFarsiNumbers("از بین 300 مشکل")}
                </h4>
              </div>
            </div>
            <div className="w-full flex items-center gap-x-5 mt-5">
              <div className="flex flex-col gap-y-2 p-5 w-full bg-gray-900 border-[1px] border-slate-600 border-slate- rounded-md h-[350px]">
                <h1 className="text-white font-bold text-2xl">
                  فعالیت‌های اخیر
                </h1>
                <h2 className="text-slate-200 font-[300] text-md">
                  ۵ فعالیت اخیر در سیستم
                </h2>
                <section className="mt-3 flex flex-col gap-y-3">
                  {activitys.map((ac, acIndex) => {
                    return (
                      <div key={acIndex} className="flex items-center gap-x-3">
                        <div
                          className={`rounded-full ${ac.color} w-[10px] h-[10px]`}
                        ></div>
                        <div className="flex flex-col gap-y-1">
                          {ac.text}
                          <h3 className="font-[300] text-sm text-slate-200">
                            {ac.time}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </section>
              </div>
              <div className="flex flex-col gap-y-2 p-5 w-full bg-gray-900 border-[1px] border-slate-600 rounded-md h-[350px]">
                <h1 className="text-white font-bold text-2xl">وظایف امروز</h1>
                <h2 className="text-slate-200 font-[300] text-md">
                  کارهایی که باید امروز انجام شوند
                </h2>
                <section className="mt-3 flex flex-col gap-y-5">
                  {works.map((work, acIndex) => {
                    return (
                      <div key={acIndex} className="flex items-center gap-x-3">
                        <input
                          className="w-[18px] h-[18px] bg-gray-700"
                          type="checkbox"
                          name="work completed"
                          id="work-tick"
                        />
                        <h1>{work.text}</h1>
                      </div>
                    );
                  })}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
