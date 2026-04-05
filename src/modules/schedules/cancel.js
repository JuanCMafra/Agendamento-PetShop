import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay, schedulesDayBody } from "./load.js";

const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel")) {
      const item = event.target.closest("li")
      const { id } = item.dataset

      if (id) {
        const isConfirm = confirm("Tem certeza que quer cancelar o agendamento?")

        if (isConfirm) {
          console.log("cancelando ID:", id)
          await scheduleCancel({ id })
          schedulesDay()
          schedulesDayBody()
        }
      } 
    }
  })
})