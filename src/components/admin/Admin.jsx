import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../../styles/swal.css";
import { useNavigate } from "react-router-dom";

export default function AdminRoute() {
  const ADMIN_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1IiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNDA2NzY1OSwiZXhwIjoxNzE0MDc0ODU5fQ.wFRBgNphZ4kjcHqlw5W1EbH7DWBZQgJeUIfpBTyQpOc";
  const isLoginToAdmin = sessionStorage.getItem("admin_token") === ADMIN_TOKEN;

  const navigate = useNavigate();

  useEffect(() => {
    switch (isLoginToAdmin) {
      case true:
        navigate("/admin/dashboard");
        break;

      case false:
        navigate("/admin/login");
        break;
      default:
        // nothing for here block
        break;
    }
  }, []);

  return <div>Hello</div>;
}
