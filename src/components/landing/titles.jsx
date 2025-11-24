import TopCircle from "../../assets/images/titleCirclePink.webp";
const TitlesLandingPage = (props) => {
  const { titleText,  } = props;
  return (
    <div className="flex items-center" style={{userSelect: "none"}}>
      <img src={TopCircle} alt="circle-title" width={60} height={60} />
      <h1 className={`${props.isDarkTheme? "text-white": "text-black"} font-bold lg:text-[2rem] md:text-[2rem] text-[1.4rem]`}>
        {titleText}
      </h1>
    </div>
  );
};

export default TitlesLandingPage;
