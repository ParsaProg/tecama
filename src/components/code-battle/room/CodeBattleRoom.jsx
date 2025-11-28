"use client";
import { ArrowRight, Check, Clock } from "lucide-react";
import convertToFarsiNumbers from "../../../functions/convertNumbersToFarsi";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import showErrorAlert from "../../../functions/showAlert";
import { useEffect, useRef, useState } from "react";
import CodeChallengeEditor from "../../CodeChalengeEditor";
const WS_URL = typeof window !== "undefined" ? "ws://localhost:3001" : "";
export default function CodeBattleRoom({ isDarkTheme, isLogin, userData }) {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [isMount, setIsMount] = useState(false);
  const wsRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [challenge, setChallenge] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const timerRef = useRef(null);
  const defaultCode = `function solution(input) {\n return input;\n}\nconsole.log(solution(5));`;
  useEffect(() => {
    if (!isLogin) {
      showErrorAlert({ title: "ابتدا وارد شوید", isDarkTheme: true });
      setTimeout(() => navigate("/code-battle/lobby"), 2000);
      return;
    }
    setIsMount(true);
    connectWs();
    return () => {
      // Do not close ws here
    };
  }, [isLogin, navigate, roomId, userData, isDarkTheme]);
  function connectWs() {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      // Rejoin or get state
      wsRef.current.send(
        JSON.stringify({ type: "join_room", payload: { roomId, userData } })
      );
      return;
    }
    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;
    ws.onopen = () => {
      console.log("WS Connected in Room");
      ws.send(
        JSON.stringify({ type: "join_room", payload: { roomId, userData } })
      );
    };
    ws.onmessage = (ev) => {
      let msg;
      try {
        msg = JSON.parse(ev.data);
      } catch (e) {
        console.warn("Invalid WS message", ev.data);
        return;
      }
      switch (msg.type) {
        case "joined_room":
          setUsers(msg.payload.users || [userData]);
          setChallenge(msg.payload.challenge);
          if (msg.payload.users?.length === 2) {
            setRemainingTime(300);
          }
          break;
        case "user_joined":
          setUsers((prev) => {
            const newUsers = [...prev, msg.payload.userData].filter(
              (u, index, self) =>
                index === self.findIndex((t) => t.email === u.email)
            );
            if (newUsers.length === 2) {
              setRemainingTime(300);
            }
            return newUsers;
          });
          break;
        case "user_left":
          setUsers(msg.payload.users || []);
          setRemainingTime(0);
          break;
        case "start_timer":
          setRemainingTime(msg.payload.time);
          break;
        case "join_error":
          showErrorAlert({ title: msg.payload.message, isDarkTheme });
          break;
        default:
          break;
      }
    };
    ws.onclose = () =>
      setTimeout(() => isMount && connectWs(), 1500);
    ws.onerror = (err) => console.error("WS error", err);
  }
  function send(obj) {
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      connectWs();
      return;
    }
    ws.send(JSON.stringify(obj));
  }
  useEffect(() => {
    if (!remainingTime) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setRemainingTime((s) => (s <= 1 ? 0 : s - 1)),
      1000
    );
    return () => clearInterval(timerRef.current);
  }, [remainingTime]);
  const submitSolution = (code) => {
    send({ type: "submit_solution", payload: { roomId, user: userData, code } });
  };
  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${convertToFarsiNumbers(m.toString())}:${convertToFarsiNumbers(
      s.toString().padStart(2, "0")
    )}`;
  };
  if (!isMount) return null;
  const opponent = users.find((u) => u.email !== userData.email);
  return (
    <div
      className={`${isDarkTheme ? "text-white" : "text-black"} w-full mt-[50px] flex flex-col items-start`}
    >
      <section className="flex w-full items-center justify-between py-3">
        {/* YOU */}
        <div className="w-full flex gap-x-2 items-center p-5 bg-[#504be635] border border-[#504be643] rounded-xl">
          <div className="flex justify-center items-center w-12 h-12 text-md bg-[#4F4BE6] rounded-full font-bold p-3">
            {userData.fullName[0]}
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-lg flex gap-x-1 items-center">
              {userData.fullName}
              <div className="font-[400] text-md flex items-center gap-x-2 text-[#22D2EE]">
                (شما <Check size={15} />)
              </div>
            </h1>
          </div>
        </div>
        {/* TIMER */}
        <div className="w-[50%] flex flex-col items-center gap-y-2">
          <h1 className="font-bold text-3xl flex items-center gap-x-2">
            {formatTime(remainingTime)} <Clock size={20} />
          </h1>
          <div className="text-sm rounded-full py-2 px-5 bg-[#22d3ee32] border border-[#22d3ee43] text-[#22D2EE]">
            {opponent ? "در حال کدنویسی" : "در انتظار بازیکن دوم..."}
          </div>
        </div>
        {/* OPPONENT */}
        <div className="w-full flex gap-x-2 items-center p-5 border border-[#504be643] rounded-xl">
          {opponent ? (
            <>
              <div className="flex justify-center items-center w-12 h-12 text-md bg-[#4F4BE6] rounded-full font-bold p-3">
                {opponent.fullName[0]}
              </div>
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-lg">{opponent.fullName}</h1>
              </div>
            </>
          ) : (
            <h1 className="text-slate-400">منتظر بازیکن...</h1>
          )}
        </div>
      </section>
      <motion.div
        onClick={() => {
          send({ type: "leave_room", payload: { roomId } });
          navigate("/code-battle/lobby");
        }}
        whileTap={{ scale: 0.94 }}
        className="border border-slate-800 rounded-xl p-3 flex items-center gap-x-2 mt-5 cursor-pointer"
      >
        <ArrowRight size={20} /> بازگشت به لابی
      </motion.div>
      <div className="mt-8 w-full">
        {challenge ? (
          <CodeChallengeEditor
            defaultLanguage="javascript"
            defaultCode={defaultCode}
            challenge={challenge}
            onSubmit={submitSolution}
          />
        ) : (
          <h1 className="text-slate-400 text-lg">در حال دریافت چالش...</h1>
        )}
      </div>
    </div>
  );
}