import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

export default function GoUpButton() {
  const [show, setShow] = useState(window.scrollY > 100);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          exit={{
            opacity: 0,
            scale: 0.5,
            transition: { ease: "easeInOut", duration: 0.1, delay: 0.1 },
          }}
          transition={{ ease: "easeInOut", duration: 0.1, delay: 0.1 }}
          className={`cursor-pointer rounded-lg p-3 bg-blue-600 text-white fixed shadow-black shadow-2xl z-[9999] bottom-[20px] right-[20px]`}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <IoIosArrowUp size={20} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
