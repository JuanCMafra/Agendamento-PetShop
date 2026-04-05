import { apiConfig } from "./api-config.js"
import dayjs from "dayjs"

export async function scheduleFetchByDayModal({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    const dailySchedulesModal = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    )

    return dailySchedulesModal
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado")
  }
}

export async function scheduleFetchByDayBody({ bodyDate }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    const dailySchedulesBody = data.filter((schedule) => 
      dayjs(bodyDate).isSame(schedule.when, "day")
    )

    return dailySchedulesBody
    
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado")
  }
}