import { schedulesDay } from "../schedules/load.js";

const selectedDateModal = document.getElementById("modal-date")

selectedDateModal.onchange = () => {
  schedulesDay()
}