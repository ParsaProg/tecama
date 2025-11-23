import Lottie from "lottie-react";
import animation from "../../assets/lottie/Animation - 1746438530444.json";

export default function LoadingFallback({ text = "شکیبا باشید ..." }) {
  return (
    <div className="mt-5 flex items-center justify-center text-center flex-col">
      <div style={{ width: 300, height: 170 }}>
        <Lottie animationData={animation} loop={true} />
      </div>
      <h1 className="text-xl">{text}</h1>
    </div>
  );
}
