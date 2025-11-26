// src/pages/Home.jsx
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import LottieAnimation from "../assets/lottie/Animation - 1746438530444.json";
import Lottie from "lottie-react";
import { SignupForm } from "../components/ui/signup-form";
import { Loginform } from "../components/ui/login-form";
import TopLandingSection from "../components/landing/header/TopLandingSection";
import ExamSection from "../components/landing/exam/examSection";
import CoursesSection from "../components/landing/CoursesSection";
import ArticlesSection from "../components/landing/article/ArticleSection";
import ProblemsSection from "../components/landing/problems/problemsSection";
import NewsSection from "../components/landing/news/NewsSection";
import LandingPageFooter from "../components/landing/footer/landingPageFooter";
import SupportField from "../components/landing/supportField";
import AiPage from "../components/ai/AiPage.jsx";
import { GetDataFromApi } from "../components/api.js";
import { Routes, Route, useLocation } from "react-router-dom";
import { dotsList } from "../data/dots.js";
import CodeBattleLanding from "../components/code-battle/CodeBattleLanding.jsx";

const AdminPanel = lazy(() => import("../components/admin/AdminPanel.jsx"));
const AdminRoute = lazy(() => import("../components/admin/Admin.jsx"));
const AdminLogin = lazy(() => import("../components/admin/AdminLogin.jsx"));
const NotFound = lazy(() => import("../components/notfound/notFound.jsx"));
const FaqPage = lazy(() => import("../components/faq/faqPage.jsx"));
const CoursesPage = lazy(() => import("../components/courses/CoursesPage"));
const BlogPage = lazy(() => import("../components/blog/blogPage.jsx"));
const CoursesDetailsPage = lazy(() =>
  import("../components/courses/coursesDetailsPage")
);
const PodcastPage = lazy(() => import("../components/podcast/PodcastPage.jsx"));
const NewsDetailsPage = lazy(() =>
  import("../components/news/NewsDetailsPage.jsx")
);
const RatedExamLiveCodingPage = lazy(() =>
  import("../components/exam/rated/ratedExamLiveCoding.jsx")
);

const RatedExamsListPage = lazy(() =>
  import("../components/exam/rated/ratedExamsListPage.jsx")
);
const CoursePanel = lazy(() => import("../components/courses/coursePanel"));
const ArticlesPage = lazy(() => import("../components/articles/ArticlesPage"));
const ArticleDetailsPage = lazy(() =>
  import("../components/articles/ArticleDetailsPage")
);
const ChoeseExamMode = lazy(() => import("../components/exam/choeseMode"));
const PollPage = lazy(() => import("../components/poll/mainPollPage.jsx"));
const ExamsPage = lazy(() =>
  import("../components/exam/personal/PersonalExamsPage")
);
const ExamInfo = lazy(() => import("../components/exam/personal/page"));
const Exam = lazy(() => import("../components/exam/personal/exam/page"));
const ResultPersonalExam = lazy(() =>
  import("../components/exam/personal/result/resultPage")
);
const WorldMap = lazy(() =>
  import("../components/exam/rated/ratedExamPage.jsx")
);

const UserProblemDetails = lazy(() =>
  import("../components/problems/userProblemDetails.jsx")
);
const RatedTestExamPage = lazy(() =>
  import("../components/exam/rated/ratedTestExamPage.jsx")
);

const UsersProblemsPage = lazy(() =>
  import("../components/problems/userProblemsPage.jsx")
);
const AboutUs = lazy(() => import("../components/aboutus/AboutUsPage.jsx"));

const DashboardPage = lazy(() =>
  import("../components/dashboard/DashboardPage.jsx")
);

export default function AppRoutes({
  isDarkTheme,
  coursesData,
  articlesData,
  newsData,
  users,
  API_KEY,
}) {
  const location = useLocation();
  const refToken = localStorage.getItem("refToken") || "notLoggined";
  return (
    <Routes location={location} key={location.key}>
      <Route
        path="/"
        element={
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 50,
              transition: { duration: 0.3, mease: "easeInOut" },
            }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="z-20 mx-auto w-[90%]"
          >
            <TopLandingSection isDarkTheme={isDarkTheme} />
            <ExamSection isDarkTheme={isDarkTheme} />
            <CoursesSection
              isDarkTheme={isDarkTheme}
              coursesData={coursesData}
            />
            <ArticlesSection
              isDarkTheme={isDarkTheme}
              articlesData={articlesData}
            />
            <ProblemsSection isDarkTheme={isDarkTheme} />
            <NewsSection isDarkTheme={isDarkTheme} newsData={newsData} />
            {/* <PodcastLandingPage isDarkTheme={isDarkTheme} /> */}
            <div className="h-[50px]"></div>
            <LandingPageFooter isDarkTheme={isDarkTheme} />
            <div className="h-[50px] md:h-[100px]"></div>
            <SupportField isDarkTheme={isDarkTheme} />
          </motion.div>
        }
      />
      // admin panel Routes
      <Route
        path="/admin"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <AdminRoute isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound isDarkTheme={isDarkTheme} />} />
      <Route
        path="/admin/login"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <AdminLogin isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <AdminPanel isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route path="/poll" element={<PollPage isDarkTheme={isDarkTheme} />} />
      <Route
        path="/not-found"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <NotFound isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <DashboardPage isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/news/:news_title"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <NewsDetailsPage
              isDarkTheme={isDarkTheme}
              newsData={newsData}
              API_KEY={API_KEY}
            />
          </Suspense>
        }
      />
      <Route
        path="/ai"
        element={<AiPage isDarkTheme={isDarkTheme} users={users} />}
      />
      <Route
        path="/problems"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <UsersProblemsPage isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/problems/:problem_title"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <UserProblemDetails isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/faq"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <FaqPage isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/weblog"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <BlogPage
              isDarkTheme={isDarkTheme}
              coursesData={coursesData}
              articlesData={articlesData}
              newsData={newsData}
            />
          </Suspense>
        }
      />
      <Route
        path="/podcasts"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <PodcastPage isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/about_creator"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
              //
            }
          >
            <AboutUs isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/courses"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <CoursesPage isDarkTheme={isDarkTheme} coursesData={coursesData} />
          </Suspense>
        }
      />
      <Route
        path="/courses/:title"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <CoursesDetailsPage
              isDarkTheme={isDarkTheme}
              coursesData={coursesData}
              API_KEY={API_KEY}
            />
          </Suspense>
        }
      />
      <Route
        path="/courses/:title/course-panel"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <CoursePanel isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/articles"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <ArticlesPage
              isDarkTheme={isDarkTheme}
              articlesData={articlesData}
            />
          </Suspense>
        }
      />
      <Route
        path="/exams/rated/:title"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <RatedTestExamPage isLogin={refToken} isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/exams/rated/live-coding/:title"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <RatedExamLiveCodingPage isLogin={refToken} />
          </Suspense>
        }
      />
      <Route
        path="/articles/:title"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <ArticleDetailsPage
              isDarkTheme={isDarkTheme}
              articlesData={articlesData}
              API_KEY={API_KEY}
            />
          </Suspense>
        }
      />
      <Route
        path="/exams"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <ChoeseExamMode isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/exams/rated/exams-list"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <RatedExamsListPage isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/exams/personal"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <ExamsPage isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/exams/personal/:lang"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <ExamInfo isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/exams/personal/:lang/result"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <ResultPersonalExam isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/exams/personal/:lang/:panel-name"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <Exam isLoggin={refToken} isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/exams/rated"
        element={
          <Suspense
            fallback={
              <div
                className={`mt-5 flex items-center justify-center text-center flex-col`}
              >
                <div style={{ width: "300px", height: "170px" }}>
                  <Lottie
                    animationData={LottieAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h1
                  className={`text-xl ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  شکیبا باشید ...
                </h1>
              </div>
            }
          >
            <WorldMap dots={dotsList} isDarkTheme={isDarkTheme} />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 50,
              transition: { duration: 0.3, mease: "easeInOut" },
            }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-[27rem] flex items-center justify-center"
          >
            <Suspense>
              <Loginform isDarkTheme={isDarkTheme} />
            </Suspense>
          </motion.div>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 50,
                transition: { duration: 0.3, mease: "easeInOut" },
              }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="h-[43rem] flex items-center justify-center"
            >
              <SignupForm isDarkTheme={isDarkTheme} />
            </motion.div>
          </Suspense>
        }
      /><Route
        path="/code-battle"
        element={
          <Suspense>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 50,
                transition: { duration: 0.3, mease: "easeInOut" },
              }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-[90%] mx-auto"
            >
              <CodeBattleLanding isDarkTheme={isDarkTheme} />
            </motion.div>
          </Suspense>
        }
      />
      <Route path="/data-get" element={<GetDataFromApi />} />
    </Routes>
  );
}
