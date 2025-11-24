import { TbCategoryFilled } from "react-icons/tb";
import { BsPlusLg } from "react-icons/bs";
import { PiMinusThin } from "react-icons/pi";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FaqPage({ isDarkTheme }) {
  const catsData = [
    "عادی",
    "کامپیوتر",
    "فناوری اطلاعات",
    "برنامه‌نویسی",
    "تکاما",
  ];

  // سوالات کامل برای هر دسته‌بندی
  const allQuestions = {
    "عادی": [
      {
        question: "چگونه می‌توانم در سایت ثبت نام کنم؟",
        answer: "برای ثبت نام روی دکمه 'ثبت نام' در بالای صفحه کلیک کرده و اطلاعات خواسته شده شامل نام، ایمیل و رمز عبور را وارد کنید."
      },
      {
        question: "چگونه رمز عبور خود را بازیابی کنم؟",
        answer: "در صفحه ورود روی 'فراموشی رمز عبور' کلیک کرده و ایمیل خود را وارد کنید. لینک بازیابی رمز عبور برای شما ارسال خواهد شد."
      },
      {
        question: "آیا استفاده از سایت رایگان است؟",
        answer: "بله، دسترسی به محتوای اصلی سایت کاملاً رایگان است. برخی ویژگی‌های پیشرفته ممکن است نیاز به اشتراک داشته باشند."
      },
      {
        question: "چگونه می‌توانم پروفایل خود را ویرایش کنم؟",
        answer: "پس از ورود به حساب کاربری، به بخش 'پروفایل من' رفته و اطلاعات مورد نظر خود را ویرایش کنید."
      },
      {
        question: "آیا سایت برای موبایل بهینه شده است؟",
        answer: "بله، سایت کاملاً ریسپانسیو است و در تمام دستگاه‌های موبایل، تبلت و دسکتاپ به خوبی نمایش داده می‌شود."
      },
      {
        question: "چگونه می‌توانم با پشتیبانی تماس بگیرم؟",
        answer: "از طریق بخش 'تماس با ما' در پایین سایت یا ارسال ایمیل به support@takama.com می‌توانید با پشتیبانی در ارتباط باشید."
      }
    ],
    "کامپیوتر": [
      {
        question: "بهترین روش برای افزایش سرعت کامپیوتر چیست؟",
        answer: "حذف برنامه‌های غیرضروری، افزایش RAM، استفاده از SSD به جای HDD و به‌روزرسانی درایورها می‌تواند سرعت کامپیوتر را افزایش دهد."
      },
      {
        question: "چگونه از اطلاعات خود بکاپ بگیرم؟",
        answer: "می‌توانید از نرم‌افزارهای بکاپ‌گیری مانند Windows Backup، استفاده از هارد اکسترنال یا سرویس‌های ابری مانند Google Drive استفاده کنید."
      },
      {
        question: "ویروس‌ها چگونه سیستم را آلوده می‌کنند؟",
        answer: "از طریق دانلود فایل‌های آلوده، باز کردن ایمیل‌های مخرب، بازدید از سایت‌های ناامن و نصب نرم‌افزارهای کرک شده."
      },
      {
        question: "بهترین آنتی‌ویروس کدام است؟",
        answer: "آنتی‌ویروس‌هایی مانند Bitdefender، Kaspersky و Windows Defender گزینه‌های مناسبی هستند. انتخاب بستگی به نیازهای خاص شما دارد."
      },
      {
        question: "چگونه هارد دیسک خود را پارتیشن‌بندی کنم؟",
        answer: "در ویندوز از Disk Management و در مک از Disk Utility می‌توانید برای پارتیشن‌بندی استفاده کنید."
      },
      {
        question: "تفاوت بین RAM و ROM چیست؟",
        answer: "RAM حافظه موقت است که با قطع برق پاک می‌شود، در حالی که ROM حافظه دائمی است که اطلاعات حتی با قطع برق حفظ می‌شود."
      }
    ],
    "فناوری اطلاعات": [
      {
        question: "شبکه‌های کامپیوتری چه انواعی دارند؟",
        answer: "شبکه‌های LAN (محلی)، WAN (وسيع)، MAN (شهری)، PAN (شخصی) و VLAN (مجازی) از انواع اصلی شبکه‌های کامپیوتری هستند."
      },
      {
        question: "پروتکل HTTP و HTTPS چه تفاوتی دارند؟",
        answer: "HTTPS نسخه امن HTTP است که از SSL/TLS برای رمزنگاری ارتباط استفاده می‌کند و امنیت داده‌ها را تضمین می‌نماید."
      },
      {
        question: "DNS چگونه کار می‌کند؟",
        answer: "DNS نام دامنه را به آدرس IP تبدیل می‌کند تا مرورگر بتواند وب‌سایت‌ها را پیدا و بارگذاری کند."
      },
      {
        question: "تفاوت بین هاستینگ اشتراکی و اختصاصی چیست؟",
        answer: "هاستینگ اشتراکی منابع سرور بین چندین کاربر تقسیم می‌شود، در حالی که هاستینگ اختصاصی تمام منابع سرور در اختیار یک کاربر است."
      },
      {
        question: "Cloud Computing چیست؟",
        answer: "ارائه سرویس‌های کامپیوتری از طریق اینترنت شامل سرورها، ذخیره‌سازی، پایگاه داده، شبکه، نرم‌افزار و تحلیل‌گری."
      },
      {
        question: "امنیت سایبری چه اهمیتی دارد؟",
        answer: "امنیت سایبری از داده‌ها، سیستم‌ها و شبکه‌ها در برابر حملات سایبری محافظت می‌کند و از حریم خصوصی کاربران دفاع می‌نماید."
      }
    ],
    "برنامه‌نویسی": [
      {
        question: "بهترین راه برای بهبود مهارت‌های برنامه‌نویسی چیه؟",
        answer: "در دنیای امروز، ترکیب پروژه‌های عملی، استفاده از ابزارهای هوش مصنوعی و تماشای آموزش‌های باکیفیت که به اهداف شما مرتبط باشه، بهترین روشه."
      },
      {
        question: "چطور می‌تونم سریع‌تر برنامه‌نویس بهتری بشم؟",
        answer: "پایداری مهمه—هر روز تمرین کن، با مسائل چالش‌برانگیز روبرو شو و کدت رو بررسی کن تا از اشتباهاتت یاد بگیری."
      },
      {
        question: "باید روی یک زبان برنامه‌نویسی تمرکز کنم یا چندتا یاد بگیرم؟",
        answer: "اول یه زبان رو کامل یاد بگیر تا پایه‌ات قوی بشه، بعد بر اساس علاقه و شغلت به بقیه زبان‌ها برو."
      },
      {
        question: "کار روی پروژه‌های واقعی برای یادگیری چقدر مهمه؟",
        answer: "خیلی مهمه—پروژه‌های واقعی حل مسئله، خطایابی و کاربرد عملی رو بهتر از تئوری یاد می‌دن."
      },
      {
        question: "هوش مصنوعی توی برنامه‌نویسی مدرن چه نقشی داره؟",
        answer: "هوش مصنوعی می‌تونه توی تولید کد، خطایابی و یادگیری کمک کنه، ولی وقتی با درک خودت ترکیب بشه بهترین نتیجه رو می‌ده."
      },
      {
        question: "چطور موقع یادگیری کدنویسی انگیزم رو حفظ کنم؟",
        answer: "اهداف کوچک و قابل‌دسترس بذار، پروژه‌هایی بساز که بهشون علاقه داری و با یه جامعه برنامه‌نویسی در ارتباط باش."
      },
      {
        question: "تفاوت بین Frontend و Backend چیست؟",
        answer: "Frontend بخش قابل مشاهده وب‌سایت است که کاربر با آن تعامل دارد، در حالی که Backend منطق سرور و مدیریت داده‌ها را بر عهده دارد."
      },
      {
        question: "Git و GitHub چه تفاوتی دارند؟",
        answer: "Git یک سیستم کنترل نسخه است، در حالی که GitHub یک پلتفرم میزبانی برای پروژه‌های Git می‌باشد."
      }
    ],
    "تکاما": [
      {
        question: "تکاما چه خدماتی ارائه می‌دهد؟",
        answer: "تکاما در زمینه آموزش برنامه‌نویسی، طراحی وب، توسعه اپلیکیشن‌های موبایل و مشاوره فناوری اطلاعات خدمات ارائه می‌دهد."
      },
      {
        question: "چگونه می‌توانم در دوره‌های تکاما ثبت نام کنم؟",
        answer: "به بخش 'دوره‌ها' مراجعه کرده، دوره مورد نظر خود را انتخاب و با تکمیل فرم ثبت نام، در دوره شرکت کنید."
      },
      {
        question: "آیا دوره‌های تکاما گواهینامه دارد؟",
        answer: "بله، پس از اتمام موفقیت‌آمیز هر دوره، گواهینامه معتبر تکاما به شرکت‌کنندگان اعطا می‌شود."
      },
      {
        question: "چگونه می‌توانم با مدرسین تکاما در ارتباط باشم؟",
        answer: "از طریق سیستم پیام‌رسان داخلی پلتفرم و یا در ساعات مشخص شده برای پشتیبانی می‌توانید با مدرسین در ارتباط باشید."
      },
      {
        question: "آیا امکان پرداخت اقساطی برای دوره‌ها وجود دارد؟",
        answer: "بله، برای برخی دوره‌ها امکان پرداخت اقساطی فراهم شده است. برای اطلاعات بیشتر با پشتیبانی تماس بگیرید."
      },
      {
        question: "چگونه می‌توانم از تخفیف‌های تکاما مطلع شوم؟",
        answer: "با عضویت در خبرنامه سایت و دنبال کردن صفحات اجتماعی تکاما، از آخرین تخفیف‌ها و رویدادها مطلع خواهید شد."
      },
      {
        question: "آیا محتوای دوره‌ها به صورت مادام العمر در دسترس است؟",
        answer: "بله، پس از ثبت نام در هر دوره، دسترسی مادام العمر به محتوای دوره برای شما فراهم می‌شود."
      }
    ]
  };

  const [catsIndex, setCatsIndex] = useState(0);
  const [opendedIndex, setOpendedIndex] = useState(null);

  // دریافت سوالات مربوط به دسته‌بندی انتخاب شده
  const currentQuestions = allQuestions[catsData[catsIndex]] || [];

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
      className={`m-auto flex flex-col items-center p-4 max-w-full overflow-hidden`}
    >
      {/* Header */}
      <h1
        className={`font-bold text-3xl md:text-5xl text-center mt-5 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}
      >
        سوالات پرتکرار
      </h1>
      <h5
        className={`font-[400] text-lg md:text-xl text-center mt-3 ${
          isDarkTheme ? "text-slate-400" : "text-gray-600"
        }`}
      >
        پاسخ سوالات پرتکرار شما در این صفحه
      </h5>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-x-[50px] w-full max-w-[1200px] mt-8">
        {/* Categories Section */}
        <div className="w-full md:w-auto overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal">
          <div className="flex flex-row md:flex-col gap-2 md:gap-0 mb-5">
            {catsData.map((catData, catIndex) => (
              <div key={catIndex}>
                <div
                  onClick={() => {
                    setCatsIndex(catIndex);
                    setOpendedIndex(null); // بستن سوالات باز شده هنگام تغییر دسته‌بندی
                  }}
                  className={`${
                    catIndex === catsIndex
                      ? "bg-[#2763EA] border-transparent text-white"
                      : `${
                          isDarkTheme
                            ? "hover:bg-slate-900 border-slate-700 text-white"
                            : "hover:bg-gray-100 border-gray-300 text-gray-800"
                        } cursor-pointer`
                  } transition-all duration-200 flex items-center justify-center p-3 rounded-md border-[2px] text-sm md:text-base`}
                >
                  {catData}
                </div>
                {catIndex < catsData.length - 1 && (
                  <div
                    className={`w-[3px] h-[15px] ${
                      isDarkTheme ? "bg-slate-500" : "bg-gray-300"
                    } m-auto hidden md:block`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Questions Section */}
        <div className="flex flex-col items-start mt-8 md:mt-[50px] w-full max-w-[800px]">
          <div className="flex items-center gap-x-1">
            <TbCategoryFilled
              size={30}
              color={isDarkTheme ? "white" : "#4B5563"}
            />
            <h1
              className={`text-xl md:text-2xl ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              سوالات {catsData[catsIndex]}
            </h1>
          </div>
          
          {currentQuestions.length > 0 ? (
            <div className="mt-5 w-full">
              {currentQuestions.map((q, qIndex) => (
                <div key={qIndex}>
                  <div
                    onClick={() => {
                      if (opendedIndex === qIndex) {
                        setOpendedIndex(null);
                      } else {
                        setOpendedIndex(qIndex);
                      }
                    }}
                    className={`flex cursor-pointer items-start transition-all duration-200 gap-x-5 md:gap-x-10 justify-between w-full px-3 md:px-5 ${
                      isDarkTheme ? "text-white" : "text-gray-800"
                    }`}
                  >
                    <div className="q-and-a flex-1">
                      <h2 className="font-bold text-lg md:text-xl">
                        {q.question}
                      </h2>
                      {opendedIndex === qIndex && (
                        <motion.h3
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`font-[500] text-base md:text-lg mt-3 ${
                            isDarkTheme ? "text-slate-100" : "text-gray-700"
                          }`}
                        >
                          {q.answer}
                        </motion.h3>
                      )}
                    </div>
                    <div
                      className={`rounded-full p-2 cursor-pointer flex items-center justify-center ${
                        isDarkTheme
                          ? "bg-slate-900 border-slate-600"
                          : "bg-gray-100 border-gray-300"
                      } border-[2px]`}
                    >
                      {qIndex === opendedIndex ? (
                        <PiMinusThin
                          size={20}
                          className="md:hidden"
                          color={isDarkTheme ? "white" : "#4B5563"}
                        />
                      ) : (
                        <BsPlusLg
                          size={20}
                          className="md:hidden"
                          color={isDarkTheme ? "white" : "#4B5563"}
                        />
                      )}
                      {qIndex === opendedIndex ? (
                        <PiMinusThin
                          size={30}
                          className="hidden md:block"
                          color={isDarkTheme ? "white" : "#4B5563"}
                        />
                      ) : (
                        <BsPlusLg
                          size={30}
                          className="hidden md:block"
                          color={isDarkTheme ? "white" : "#4B5563"}
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className={`w-full h-[1px] my-5 rounded-full ${
                      isDarkTheme ? "bg-slate-600" : "bg-gray-300"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`mt-5 w-full text-center py-10 ${
              isDarkTheme ? "text-slate-400" : "text-gray-500"
            }`}>
              هیچ سوالی برای این دسته‌بندی یافت نشد.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}