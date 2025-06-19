import Swal from "sweetalert2"

export const createAlert = (icon, textTi, text) => {
  return Swal.fire({
    icon: icon || "info",
    title: textTi || "Something Wrong!",
    text: text || "ERROR",
    timer: 5000
  })
}
