"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Filter, Plus, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import convertToFarsiNumbers from "../../../functions/convertNumbersToFarsi";
import showErrorAlert from "../../../functions/showAlert";
import { useNavigate } from "react-router-dom";
const WS_URL = typeof window !== "undefined" ? "ws://localhost:3001" : "";
const CodeBattleLobby = ({ isDarkTheme, isLogin, userData }) => {
  const [isMount, setIsMount] = useState(false);
  const navigate = useNavigate();
  const wsRef = useRef(null);
  const [socketId, setSocketId] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [showDialogIndex, setShowDialogIndex] = useState(0);
  const displayName = () => userData?.fullName || "Anon";
  useEffect(() => {
    if (!isLogin) {
      showErrorAlert({
        title: "برای ورود به لابی کد بتل وارد حساب کاربری شوید",
        isDarkTheme: true,
      });
      setTimeout(() => navigate(-1), 2000);
      return;
    }
    setIsMount(true);
    connectWs();
    return () => {
      // Do not close ws here to keep connection across pages
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function connectWs() {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) return;
    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;
    ws.onopen = () => {
      console.log("WS Connected");
      ws.send(JSON.stringify({ type: "list_rooms" }));
    };
    ws.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data);
        handleServerMessage(msg.type, msg.payload);
      } catch (e) {
        console.warn("Invalid WS message", ev.data);
      }
    };
    ws.onclose = () => setTimeout(() => isMount && connectWs(), 1500);
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
  function handleServerMessage(type, payload) {
    switch (type) {
      case "welcome":
        setSocketId(payload.socketId);
        break;
      case "rooms_list":
        setRooms(
          (payload.rooms || []).map((r) => ({
            roomId: r.roomId || r.id,
            name: r.challenge?.title || `Battle ${r.roomId}`,
            users: r.userCount || 0,
            status: (r.userCount || 0) >= 2 ? "run" : "waiting",
          }))
        );
        break;
      case "room_created":
        send({
          type: "join_room",
          payload: { roomId: payload.roomId, userData },
        });
        break;
      case "joined_room":
        navigate(`/code-battle/${payload.roomId}`);
        break;
      case "join_error":
        showErrorAlert({ title: payload.message, isDarkTheme });
        break;
      default:
        break;
    }
  }
  const handleCreateRoom = () => send({ type: "create_room" });
  const handleQuickPlay = () => {
    const availableRoom = rooms.find((r) => r.status === "waiting");
    if (availableRoom) {
      handleJoinRoom(availableRoom.roomId);
    } else {
      handleCreateRoom();
    }
  };
  const handleJoinRoom = (roomId) =>
    send({ type: "join_room", payload: { roomId, userData } });
  if (!isMount) return null;
  return (
    <div
      className={`${isDarkTheme ? "text-white" : "text-black"} w-full mt-[50px] flex flex-col gap-y-5`}
    >
      <section className="w-full flex items-center justify-between sm:flex-row flex-col gap-y-5">
        <div className="flex flex-col items-start gap-y-1">
          <h1 className="font-bold text-2xl">لابی اتاق ها</h1>
          <h3 className="font-[300] text-lg text-slate-300">
            به یک اتاق بپیوند یا اتاق خودت رو بساز
          </h3>
        </div>
        <div className="flex items-center gap-x-3">
          <motion.button
            onClick={handleCreateRoom}
            whileTap={{ scale: 0.93 }}
            className="sm:w-auto w-full cursor-pointer py-3 px-5 rounded-xl text-white bg-[#4F4BE6] flex items-center gap-x-2"
          >
            <Plus size={18} /> ساخت اتاق
          </motion.button>
          <motion.button
            onClick={handleQuickPlay}
            whileTap={{ scale: 0.93 }}
            className="flex items-center justify-center text-[#22D2EE] p-3 rounded-xl border border-[#22D2EE] gap-x-2"
          >
            <Zap size={18} /> بازی سریع
          </motion.button>
        </div>
      </section>
      <section className="grid items-center gap-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full">
        {rooms.length === 0 && (
          <div className="text-slate-400">هیچ اتاق فعالی وجود ندارد</div>
        )}
        {rooms.map((room) => (
          <div
            key={room.roomId}
            className="w-full h-[180px] p-5 rounded-xl bg-[#1e293b7e] border border-slate-800 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">{room.name}</h1>
              <div
                className={`p-2 rounded-full text-sm ${
                  room.status === "waiting"
                    ? "bg-slate-600 border border-slate-500"
                    : "bg-red-500 text-white"
                }`}
              >
                {room.status === "waiting" ? "در حال انتظار" : "در حال برگزاری"}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-md text-slate-400 flex items-center gap-x-2">
                <Users size={18} /> {convertToFarsiNumbers(`${room.users}/2`)}
              </div>
              <button
                disabled={room.users >= 2}
                onClick={() => handleJoinRoom(room.roomId)}
                className="disabled:opacity-50 disabled:cursor-not-allowed bg-[#4F4BE6] rounded-lg text-white p-3 text-sm"
              >
                ورود به اتاق
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default CodeBattleLobby;