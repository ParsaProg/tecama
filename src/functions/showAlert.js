import Swal from "sweetalert2";

export default function showErrorAlert({title, isDarkTheme}) {
  Swal.fire({
    position: "top-start",
    icon: "error",
    background: isDarkTheme ? "#0D1015" : "#ffffff",
    title: `<h5 style='color:${
      isDarkTheme ? "white" : "black"
    }; font-size: 20px;'>${title}</h5>`,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    customClass: {
      icon: "custom-icon-size",
      timerProgressBar: "custom-progress-bar",
    },
  });
}
