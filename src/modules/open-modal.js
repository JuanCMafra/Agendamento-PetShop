import { schedulesDay } from "../modules/schedules/load.js";

const button = document.getElementById("open-modal")
const modal = document.querySelector("dialog")

button.onclick = function () {
  modal.showModal()
  schedulesDay()
}