import React, { useEffect, useState } from "react";
import CodeChallengeEditor from "../../CodeChalengeEditor";
import axios from "axios";
import Swal from "sweetalert2";
import "../../../styles/swal.css";
import { useNavigate } from "react-router-dom";

function RatedExamLiveCodingPage() {
  const localToken = localStorage.getItem("refToken");
  const [isUserLoggin, setIsUserLoggin] = useState(null);
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

  const fetchUsers = async () => {
    try {
      axios
        .get("https://retoolapi.dev/tPNiZj/tecama-users")
        .then((response, v) => {
          const usersList = response.data;
          if (localToken) {
            const isLoggin = usersList.find(
              (user) => user.token === localToken
            );

            if (isLoggin) {
              setIsUserLoggin(true);
            } else {
              setIsUserLoggin(false);
              localStorage.removeItem("refToken");
            }
          } else {
            setIsUserLoggin(false);
            showErrorAlert(
              "برای مشاهدۀ این بخش باید وارد حساب کاربری خود شوید"
            );
            setTimeout(() => {
              navigate("/");
            }, 3000);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const challenge = {
    title: "مجموع اعداد",
    description: "تابعی بنویسید که مجموع اعداد 1 تا n را محاسبه کند.",
    examples: [
      { input: "5", output: "15" },
      { input: "10", output: "55" },
    ],
    testCases: [
      { input: "10", expectedOutput: "55" },
      { input: "100", expectedOutput: "5050" },
    ],
  };

  const defaultCode = `// کد خود را اینجا بنویسید
    function solution(input) {
      // پاسخ خود را اینجا پیاده‌سازی کنید
      return input;
    }
    
    // برای تست کردن کد خود.
    console.log(solution(5));`;

  return (
    isUserLoggin && <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">کد چالش</h1>
      <CodeChallengeEditor
        defaultLanguage="javascript"
        defaultCode={defaultCode}
        challenge={challenge}
      />
    </div>
  );
}

export default RatedExamLiveCodingPage;
