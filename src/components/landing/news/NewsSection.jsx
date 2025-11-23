import { Link, useNavigate } from "react-router-dom";
import TitlesLandingPage from "../titles";

export default function NewsSection({isDarkTheme, newsData}) {
  const navigate = useNavigate();

  return (
    <div className="z-[20] mb-[2rem] mt-[50px]">
      <Link to={"/weblog?index=news"}>
        <TitlesLandingPage titleText="اخبار روز تکنولوژی" isDarkTheme={isDarkTheme}/>
      </Link>
      <div className="grid 2xl:grid-cols-2 gap-5 mt-4 mx-3 lg:mx-[5rem]">
        {newsData.map((news, newsIndex) => {
          return (
            <div
            key={newsIndex}
              onClick={() => navigate(`/news/${news.titleText}`)}
              className={`cursor-pointer hover:scale-[1.02] transition-all duration-200  flex items-center md:flex-row flex-col gap-[20px] w-[100%] h-auto rounded-md p-3 border-[1px] ${isDarkTheme? "border-[#2e3c51]": "border-[#b0bcce]"}`}
            >
              <section className="banner-image md:w-[250px] w-full">
                <div
                  className="rounded-md md:w-[250px] w-full md:h-[170px] h-[50vw]"
                  style={{
                    backgroundImage: `url(${news.titleImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </section>
              <section>
                <h1 className={`font-bold ${isDarkTheme? "text-white": "text-black"} mb-2 text-xl`}>{news.titleText}</h1>
                <p className={`font-bold ${isDarkTheme? "text-slate-400": "text-slate-800"} font-[400] text-md`}>{news.desc}</p>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}
