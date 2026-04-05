import { schedulesDay, schedulesDayBody } from "../schedules/load.js";

const selectedDateModal = document.getElementById("modal-date")

const selectedDateBody = document.getElementById("body-date")

selectedDateModal.onchange = () => {
  schedulesDay()
}

selectedDateBody.onchange = () => {
  schedulesDayBody()
}