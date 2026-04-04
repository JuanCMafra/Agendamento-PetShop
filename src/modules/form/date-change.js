import { schedulesDay } from "../schedules/load";

const selectedDateModal = document.getElementById("modal-date")

selectedDateModal.onchange = () => {
  schedulesDay()
}