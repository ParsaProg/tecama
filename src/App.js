import Navbar from "./components/Navbar";
import useTitle from "./hooks/useTitle";
import "./styles/main.css";
import "./styles/backgroundAnimation.css";
import { useEffect, useRef } from "react";
import MainFooter from "./components/mainfooter";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ScrollToTop from "./components/lib/ScrollToTop.js";
import "./styles/loadingAnimations.css";
import axios from "axios";
import { IoIosArrowUp } from "react-icons/io";
import { API_KEY } from "./secret/api.js";
import AppRoutes from "./routes/AppRoutes.jsx";
import createOverlay from "./utils/create-overlay.jsx";

import Drawer from "./components/navigation/Drawer.jsx";
import GoUpButton from "./components/common/GoUpButton.jsx";

export default function App() {
  const [coursesData, setCoursesData] = useState([]);
  const [articlesData, setArticlesData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to check and set the theme from localStorage or system preference
  const checkTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkTheme(prefersDark);
    }
  };

  // Effect to set the initial theme and listen for system theme changes
  useEffect(() => {
    checkTheme(); // Set initial theme

    // Listen for system theme changes only if no theme is saved in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleThemeChange = (e) => setIsDarkTheme(e.matches);
      mediaQuery.addEventListener("change", handleThemeChange);

      // Cleanup listener
      return () => mediaQuery.removeEventListener("change", handleThemeChange);
    }
  }, []);

  // Effect to apply the theme to the app
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const [drawerToggle, setDrawerToggle] = useState(false);

  const bublesRef = useRef();
  const targetRef = useRef(null);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://retoolapi.dev/tPNiZj/tecama-users"
      );
      setUsers(response.data); // Set the fetched data to the state
    } catch (err) {
      throw new Error(err.message); // Set error message if something goes wrong
    }
  };

  useEffect(() => {
    let mounted = true;

    const fetchAll = async () => {
      try {
        // Parallel API calls
        const [_, coursesRes, articlesRes, newsRes] = await Promise.all([
          fetchUsers(), // your own fetch
          axios.get("https://tecama-api.vercel.app/api/courses", {
            headers: { "x-api-key": API_KEY },
          }),
          axios.get("https://tecama-api.vercel.app/api/articles", {
            headers: { "x-api-key": API_KEY },
          }),
          axios.get("https://tecama-api.vercel.app/api/news", {
            headers: { "x-api-key": API_KEY },
          }),
        ]);

        if (!mounted) return;

        setCoursesData(coursesRes.data || []);
        setArticlesData(articlesRes.data?.data || []);
        setNewsData(newsRes.data || []);
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchAll();
  }, []);

  useTitle("تکاما | سامانۀ ملی برنامه‌نویسان");
  return (
    <div ref={targetRef} className="relative">
      <GoUpButton />
      <div className="rounded-[50px] w-[90%] md:w-[450px] h-[250px] opacity-[0] bg-[#18B2FA] blur-[120px] fixed right-[50%] translate-x-[50%] top-[200px] z-[-1]"></div>
      <div className="container-bubles">
        <div className="bubles" ref={bublesRef}></div>
      </div>
      <AnimatePresence>
        <Navbar
          isDark={isDarkTheme}
          setIsDark={setIsDarkTheme}
          users={users}
          setDrawerToggle={setDrawerToggle}
          targetRef={targetRef}
          createOverlay={() => createOverlay({ setDrawerToggle, targetRef })}
        />
        <Drawer
          targetRef={targetRef}
          isDarkTheme={isDarkTheme}
          drawerToggle={drawerToggle}
          setDrawerToggle={setDrawerToggle}
          setIsDarkTheme={setIsDarkTheme}
        />
      </AnimatePresence>
      <div className="fixed z-40 top-0 h-[3rem] backdrop-blur-xl" />
      <div className="h-[5rem]"></div>
      <AnimatePresence>
        <ScrollToTop />
        <AppRoutes
          users={users}
          API_KEY={API_KEY}
          isDarkTheme={isDarkTheme}
          coursesData={coursesData}
          articlesData={articlesData}
          newsData={newsData}
        />
      </AnimatePresence>

      <MainFooter isDark={isDarkTheme} />
    </div>
  );
}
