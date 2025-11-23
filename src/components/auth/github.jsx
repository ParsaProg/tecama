import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";

function GitHubAuth() {
  const clientId = "Ov23lizZUSthhqzRmR3G";
  const redirectUri = "https://tecama.vercel.app/auth/callback";

  
  const handleLogin = () => {
    const clientId = 'Ov23lizZUSthhqzRmR3G'; // از گیت‌هاب گرفته شده
    const redirectUri = 'https://tecama.vercel.app/auth/callback'; // URLی که پس از لاگین به آن هدایت می‌شود
    const scope = 'user'; // Scopeهایی که می‌خواهید از گیت‌هاب درخواست کنید (مثل دسترسی به ایمیل و پروفایل)
    
    // ایجاد URL برای ارسال کاربر به صفحه لاگین گیت‌هاب
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    
    window.location.href = githubAuthUrl; // هدایت به گیت‌هاب برای احراز هویت
  };



  return (
    <div className="w-[100%]">
      <div
        onClick={handleLogin}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          width: "100%",
          backgroundColor: "#433CEB",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        
      >
        <h1>ورود با گیت‌هاب</h1>
        <IconBrandGithub color="white" size={25}/>
      </div>
    </div>
  );
}

export default GitHubAuth;
