import { hoursLoad } from "../form/hours-load";
import { scheduleFetchByDayModal, scheduleFetchByDayBody } from "../../services/schedule-fetch-by-day.js"
import { scheduleShow } from "./show.js";

const selectedModalDate = document.getElementById("modal-date")
const selectedBodyDate = document.getElementById("body-date")

export async function schedulesDay(){
  const date = selectedModalDate.value

  const dailySchedulesModal = await scheduleFetchByDayModal({ date })
  
  hoursLoad({ date, dailySchedulesModal })
}

export async function schedulesDayBody () {
  const bodyDate = selectedBodyDate.value

  const dailySchedulesBody = await scheduleFetchByDayBody({ bodyDate })

  scheduleShow({ dailySchedulesBody })
}