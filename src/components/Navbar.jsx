import "../styles/navbar.css";
import "../styles/responsive/header_res.css";
import { ReactComponent as TecamaLogo } from "../assets/logo/tecama-logo.svg";
import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ui/theme-toggle";
import { disableBodyScroll } from "body-scroll-lock";
import axios from "axios";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { GoSignOut } from "react-icons/go";
import Swal from "sweetalert2";

export default function Navbar(props) {
  const [users, setUsers] = useState([]);
  const [isDropDownMenuShow, setIsDropDownMenuShow] = useState(false);
  const localToken = localStorage.getItem("refToken");
  const [isUserLoggin, setIsUserLoggin] = useState(null);
  const [userLoginData, setUserLoginData] = useState(null);
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState(0);
  const dropDownMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const fetchUsers = async () => {
    try {
      axios
        .get("https://retoolapi.dev/tPNiZj/tecama-users")
        .then((response, v) => {
          const usersList = response.data; // Extract the list of users from the response
          setUsers(usersList); // Set the users list in state
          if (localToken) {
            // Find the user with the matching token
            const isLoggin = usersList.find(
              (user) => user.token === localToken
            );

            if (isLoggin) {
              // If the token is valid, set the user as logged in
              setIsUserLoggin(true);
              setUserLoginData({
                fullName: `${isLoggin.fname} ${isLoggin.lname}`,
                email: isLoggin.email,
                password: isLoggin.password,
              });
            } else {
              // If the token is invalid, remove it from localStorage and set the user as not logged in
              setIsUserLoggin(false);
              localStorage.removeItem("refToken");
            }
          } else {
            // If no token is found in localStorage, set the user as not logged in
            setIsUserLoggin(false);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  const toggleDropdown = () => {
    setIsDropDownMenuShow(!isDropDownMenuShow);
  };
  useEffect(() => {
    try {
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown and not on the toggle button
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsDropDownMenuShow(false); // Close the dropdown
      }
    };

    if (isDropDownMenuShow) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropDownMenuShow]);
  return (
    <>
      <div
        style={
          !props.isDark
            ? {
                backgroundColor: "#ffffff2f",
                borderBottom: "1px solid #000000",
                color: "#000000",
                backdropFilter: "blur(10px)",
              }
            : { backgroundColor: "#080b2128", backdropFilter: "blur(10px)" }
        }
        className="navbar pt-[20px] pb-[20px] lg:pb-[15px] "
      >
        <div
          className="menu-icon"
          onClick={() => {
            disableBodyScroll(props.targetRef.current);
            props.setDrawerToggle(true);
            props.createOverlay();
          }}
        >
          <HiOutlineMenuAlt1
            color={props.isDark ? "white" : "black"}
            size={35}
            cursor="pointer"
          />
        </div>
        <div
          onClick={() => {
            navigate("/");
          }}
          className="tecama-logo"
        >
          <TecamaLogo />
        </div>
        <div
          style={
            !props.isDark
              ? {
                  color: "#000000",
                }
              : {}
          }
          className="menu-sections items-center"
        >
          <Link to="/">
            <div className="flex items-center gap-1">
              <div className="flex w-[2rem] h-[2rem]">
                <TecamaLogo />
              </div>

              <div className="home-section px-[8px] transition-all duration-100">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "7px",
                  }}
                >
                  <h1 className="text-2xl bg-gradient-to-l from-[#18B2FA] to-[#7B20FB] inline-block text-transparent bg-clip-text">
                    تکاما
                  </h1>
                </div>
                <span className="underline"></span>
              </div>
            </div>
          </Link>
          <div className="questions-section items-center relative px-[8px] transition-all duration-100 ">
            <div
              onMouseOver={() => {
                setHoverIndex(3);
              }}
              onMouseOut={() => {
                setHoverIndex(0);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "7px",

                cursor: "pointer",
              }}
            >
              <h1>آموزش‌ها</h1>
              <IoIosArrowDown
                size={18}
                className={`${
                  hoverIndex === 3 ? "rotate-[180deg]" : ""
                } transition-all duration-200`}
              />
            </div>
            <motion.div
              onMouseOver={() => {
                hoverIndex == 3 && setHoverIndex(3);
              }}
              onMouseOut={() => {
                hoverIndex == 3 && setHoverIndex(0);
              }}
              initial={{ opacity: "0" }}
              animate={hoverIndex == 3 ? { opacity: 1 } : { opacity: 0 }}
              className={`text-center border-[1px] ${
                props.isDark
                  ? " bg-slate-800 text-white border-slate-600 "
                  : "bg-slate-100 text-black border-slate-400 "
              } fixed rounded-lg ${hoverIndex == 3 && "cursor-pointer"}`}
            >
              <h1
                style={
                  hoverIndex == 3 ? { display: "block" } : { display: "none" }
                }
                onClick={() => {
                  hoverIndex == 3 && navigate("/courses");
                }}
                className={`rounded-t-md transition-all duration-100 ${
                  props.isDark
                    ? "hover:bg-slate-200 hover:text-black"
                    : "hover:bg-blue-600 hover:text-white"
                }  p-2`}
              >
                ویدیو‌های آموزشی
              </h1>

              <div
                className={`w-[100%] h-[1px] ${
                  props.isDark ? "bg-slate-500" : "bg-black"
                }`}
              ></div>

              <h1
                style={
                  hoverIndex == 3 ? { display: "block" } : { display: "none" }
                }
                onClick={() => {
                  hoverIndex == 3 && navigate("/articles");
                }}
                className={`rounded-b-md transition-all duration-100 ${
                  props.isDark
                    ? "hover:bg-slate-200 hover:text-black"
                    : "hover:bg-blue-600 hover:text-white"
                }  p-2`}
              >
                مقالات علمی
              </h1>
            </motion.div>
          </div>
          <Link to="/exams">
            <div className="tests-section px-[8px] transition-all duration-100">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                <h1>آزمون</h1>
              </div>
              <span className="underline"></span>
            </div>
          </Link>
          <Link to="/poll">
            <div className="tests-section px-[8px] transition-all duration-100">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                <h1>نظرسنجی</h1>
              </div>
              <span className="underline"></span>
            </div>
          </Link>
          <div className="questions-section items-center relative px-[8px] transition-all duration-100 ">
            <div
              onMouseOver={() => {
                setHoverIndex(1);
              }}
              onMouseOut={() => {
                setHoverIndex(0);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "7px",

                cursor: "pointer",
              }}
            >
              <h1>سوالات</h1>
              <IoIosArrowDown
                size={18}
                className={`${
                  hoverIndex === 1 ? "rotate-[180deg]" : ""
                } transition-all duration-200`}
              />
            </div>
            <motion.div
              onMouseOver={() => {
                hoverIndex == 1 && setHoverIndex(1);
              }}
              onMouseOut={() => {
                hoverIndex == 1 && setHoverIndex(0);
              }}
              initial={{ opacity: "0" }}
              animate={hoverIndex == 1 ? { opacity: 1 } : { opacity: 0 }}
              className={`text-center border-[1px] ${
                props.isDark
                  ? " bg-slate-800 text-white border-slate-600 "
                  : "bg-slate-100 text-black border-slate-400 "
              } fixed rounded-lg ${hoverIndex == 1 && "cursor-pointer"}`}
            >
              <h1
                style={
                  hoverIndex == 1 ? { display: "block" } : { display: "none" }
                }
                onClick={() => {
                  hoverIndex == 1 && navigate("/faq");
                }}
                className={`rounded-t-md transition-all duration-100 ${
                  props.isDark
                    ? "hover:bg-slate-200 hover:text-black"
                    : "hover:bg-blue-600 hover:text-white"
                }  p-2`}
              >
                سوالات پر‌تکرار
              </h1>

              <div
                className={`w-[100%] h-[1px] ${
                  props.isDark ? "bg-slate-500" : "bg-black"
                }`}
              ></div>

              <h1
                style={
                  hoverIndex == 1 ? { display: "block" } : { display: "none" }
                }
                onClick={() => {
                  hoverIndex == 1 && navigate("/problems");
                }}
                className={`rounded-b-md transition-all duration-100 ${
                  props.isDark
                    ? "hover:bg-slate-200 hover:text-black"
                    : "hover:bg-blue-600 hover:text-white"
                }  p-2`}
              >
                مشکلات کاربران
              </h1>
            </motion.div>
          </div>
          <Link to="/weblog">
            <div className="weblog-section px-[8px] transition-all duration-100">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                <h1>وبلاگ</h1>
              </div>
              {<span className="underline"></span>}
            </div>
          </Link>
          <Link to="/podcasts">
            <div className="podcast-section px-[8px] transition-all duration-100">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                <h1>پادکست</h1>
              </div>
              <span className="underline"></span>
            </div>
          </Link>
          <Link to="/code-battle">
            <div className="podcast-section px-[8px] transition-all duration-100">
              <button
                className="
    flex items-center gap-2 px-3 py-2 rounded-xl 
    bg-indigo-600 hover:bg-indigo-500 transition-all
    text-white font-semibold  text-lg shadow-lg hover:shadow-indigo-400/40
    relative
  "
              >
                {/* Badge NEW */}
                <span
                  className="
    absolute -top-2 -right-2 text-xs bg-cyan-400 text-black 
    px-2 py-[2px] rounded-md shadow-cyan-300 font-bold shadow-xl animate-bounce
  "
                >
                  جدید
                </span>
                {/* Animated Duel SVG */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-300"
                >
                  {/* Left bracket */}
                  <path d="M7 4 L4 7 L4 17 L7 20">
                    <animate
                      attributeName="stroke-opacity"
                      values="0.3;1;0.3"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Lightning bolt */}
                  <path d="M12 6 L14 10 L11 10 L13 14 L10 14" stroke="yellow">
                    <animate
                      attributeName="stroke"
                      values="#22d3ee;#facc15;#22d3ee"
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-width"
                      values="2.2;3;2.2"
                      dur="0.8s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Right bracket */}
                  <path d="M17 4 L20 7 L20 17 L17 20">
                    <animate
                      attributeName="stroke-opacity"
                      values="0.3;1;0.3"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
                <div className="font-sans text-lg">Code Battle</div>
              </button>

              <span className="underline"></span>
            </div>
          </Link>
          <Link to="/about_creator">
            <div className="about-creator-section transition-all duration-100">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                <h1>دربارۀ برنامه‌نویس</h1>
              </div>
              <span className="underline"></span>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <div className="theme-toggle-button text-center">
            <div className="flex justify-center" dir="ltr">
              <ThemeToggle
                mainSetIsDark={props.setIsDark}
                isDarkTheme={props.isDark}
              />
            </div>
          </div>

          <div className="account-login-section relative z-50">
            {isUserLoggin ? (
              <div className="relative">
                <div
                  ref={toggleButtonRef}
                  onClick={() => {
                    toggleDropdown();
                  }}
                  className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full bg-gradient-to-l from-blue-700 to-purple-700 rotate-[30deg] text-white"
                ></div>
                <AnimatePresence>
                  {isDropDownMenuShow && (
                    <motion.div
                      ref={dropDownMenuRef}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      style={
                        props.isDark
                          ? {
                              color: "white",
                              backgroundColor: "#0F172A",
                              width: "calc-size(auto, size + 50px)",
                              boxShadow: "1px 1px 15px 5px black",
                            }
                          : {
                              color: "black",
                              backgroundColor: "white",
                              width: "calc-size(auto, size + 50px)",
                              boxShadow: "1px 1px 15px 1px gray",
                            }
                      }
                      className={`absolute px-3 flex flex-col items-start justify-start py-5 border-[0.2px] z-50 rounded-lg left-[0px] ${
                        props.isDark ? "border-neutral-500" : "border-black"
                      } overflow-hidden mt-[10px]`}
                    >
                      <h1 className="font-[400] text-lg">
                        {userLoginData.fullName}
                      </h1>
                      <h3
                        className={`font-[400] text-md ${
                          props.isDark ? "text-slate-200" : "text-neutral-600"
                        } font-mono`}
                      >
                        {userLoginData.email}
                      </h3>
                      <Link to={"/dashboard"} className="w-full">
                        <h1
                          className={`font-[400] text-lg ${
                            props.isDark
                              ? "text-slate-200 hover:bg-slate-800 "
                              : "text-neutral-600 hover:bg-slate-200 "
                          } transition-all duration-200 w-[100%] py-2 rounded-md pr-2 mt-[8px] cursor-pointer flex items-center gap-x-2`}
                        >
                          <LuLayoutDashboard size={20} />
                          داشبورد
                        </h1>
                      </Link>
                      <Link to={"/user_profile"} className="w-full">
                        <h1
                          className={`font-[400] text-lg ${
                            props.isDark
                              ? "text-slate-200 hover:bg-slate-800"
                              : "text-neutral-600 hover:bg-slate-200"
                          } transition-all  duration-200 mb-[8px] w-[100%] py-2 rounded-md pr-2 cursor-pointer flex items-center gap-x-2`}
                        >
                          <LuSettings size={20} />
                          تنظیمات حساب کاربری
                        </h1>
                      </Link>

                      <hr
                        className={`w-[100%] border-[1px] ${
                          props.isDark
                            ? "border-slate-800"
                            : "border-neutral-300"
                        } rounded-full`}
                      />
                      <h1
                        onClick={() => {
                          Swal.fire({
                            background: "#0D1015",
                            title:
                              "<h5 style='color:white; font-size: 20px;'>" +
                              "میخواهید از حساب کاربری خود خارج شوید؟" +
                              "</h5>",
                            showDenyButton: true,
                            showCancelButton: false,
                            confirmButtonText: "بله",
                            confirmButtonColor: "#DC3741",
                            denyButtonColor: "#433CEB",
                            denyButtonText: `خیر`,
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                              localStorage.removeItem("refToken");
                              window.location.reload();
                            }
                          });
                        }}
                        className={` text-lg mt-[8px] hover:bg-[#e035354a] text-[#db3131] transition-all duration-200 w-[100%] py-2 rounded-md pr-2 cursor-pointer flex items-center gap-x-2`}
                      >
                        <GoSignOut size={20} />
                        خروج از حساب
                      </h1>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div
                className={`items-center bg-blue-500 rounded-lg sec1 text-white hover:bg-blue-800 transition-all duration-200`}
              >
                <div className={`sm:flex hidden none text-[1rem] items-center`}>
                  <p
                    className="p-2"
                    to="/login"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    ورود
                  </p>
                  /
                  <p
                    className="pr-2"
                    to={"/register"}
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    ثبت‌نام
                  </p>
                </div>
                <div
                  className="sm:pl-2 p-2 sm:p-0"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <MdAccountCircle size={25} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
