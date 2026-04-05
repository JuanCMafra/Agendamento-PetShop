import { hoursLoad } from "../form/hours-load";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day"
import { scheduleShow } from "./show.js";

const selectedModalDate = document.getElementById("modal-date")
const selectedBodyDate = document.getElementById("body-date")

export async function schedulesDay(){
  const date = selectedModalDate.value
  const bodyDate = selectedBodyDate.value

  const dailySchedules = await scheduleFetchByDay({ bodyDate })

  scheduleShow({ dailySchedules })
  
  hoursLoad({ date })
}