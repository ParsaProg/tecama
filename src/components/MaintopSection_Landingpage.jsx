import "../styles/main_landingpage_section.css";
import "../styles/responsive/main_section_res.css";
import Sec1Image from "../assets/images/darkTopSectionRight.webp";
import Sec2Image from "../assets/images/darkTopSectionLeft.webp";
import { useNavigate } from "react-router-dom";
export default function MaintopSectionLandingpage() {
  const navigate = useNavigate();
  return (
    <div className="main-landingpage-section">
      <div className="img-sec2">
        <img src={Sec2Image} alt="Optimized Image" />
      </div>
      <div className="center-sec">
        <h1>سامانۀ ملی تکنولوژی و کامپیوتر ایران</h1>
        <p>یادگیری و تمرین برنامه‌نویسی!</p>
        <div className="buttons">
          <button className="section-button how-to-start">
            چطور شروع کنم؟
          </button>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="section-button register"
          >
            ثبت نام
          </button>
        </div>
      </div>
      <div className="img-sec1">
        <img src={Sec1Image} alt="Optimized Image" />
      </div>
    </div>
  );
}
