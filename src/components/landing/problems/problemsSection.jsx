import { Link } from "react-router-dom";
import TitlesLandingPage from "../titles";
import ProblemContainer from "./problemContainer";
import { useEffect, useState } from "react";

export default function ProblemsSection({ isDarkTheme }) {
  const [displayState, setDisplayState] = useState();
  useEffect(() => {
    setDisplayState(window.innerWidth);
    window.addEventListener("resize", () => setDisplayState(window.innerWidth));
  }, []);
  const codetext = `import { ImageResponse } from "next/server";

// file configs
export const runtime = "edge";
export const contentType = "image/png";

// image configs
export const alt = "Hello CodeNight";
export const size = {
  width: 1200,
  height: 630,
};`;
  return (
    <div className="w-full z-[20]">
      <Link to={"/problems"}>
        <TitlesLandingPage titleText="سؤال و جواب‌‌ها" isDarkTheme={isDarkTheme}/>
      </Link>
      <div className="w-full z-[30] flex justify-center gap-[1.5rem] m-auto mt-5">
        <ProblemContainer codetext={codetext} isDarkTheme={isDarkTheme}/>
        {displayState > 1300 && <ProblemContainer codetext={codetext} isDarkTheme={isDarkTheme}/>}
      </div>
    </div>
  );
}
