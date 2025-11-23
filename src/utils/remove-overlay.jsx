import { enableBodyScroll } from "body-scroll-lock";

export default function removeBodyOverlay({ setDrawerToggle, targetRef }) {
  document.querySelector(".body-overlay").remove();
  enableBodyScroll(targetRef.current);
  setDrawerToggle(false);
}
