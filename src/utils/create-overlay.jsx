import { enableBodyScroll } from "body-scroll-lock";

export default function createOverlay({ setDrawerToggle, targetRef }) {
  const overlay = document.createElement("div");
  overlay.classList.add("body-overlay");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.zIndex = "999";
  overlay.style.backgroundColor = "rgba(3, 3, 3, 0.79)";
  document.body.appendChild(overlay);
  overlay.addEventListener("click", () => {
    enableBodyScroll(targetRef.current);
    setDrawerToggle(false);
    document.querySelector(".body-overlay").remove();
  });
}
