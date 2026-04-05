import dayjs from "dayjs"
import { openingHours } from "../../utils/open-hours";

const hours = document.getElementById("schedule-hour")

export function hoursLoad({ date, dailySchedulesModal }) {
  hours.innerHTML = ""

  const unavailableHours = dailySchedulesModal.map((schedules) => dayjs(schedules.when).format("HH:mm"))

  const optionEmpty = document.createElement("option")
  optionEmpty.disabled = true
  optionEmpty.selected = true
  optionEmpty.innerText = "--Selecione--"
  hours.append(optionEmpty)


  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

   return {
      hour,
      available
    }
  })

  opening.forEach(({ hour, available }) => {

    if (available === true) {
      const option = document.createElement("option")
      option.value = hour
      option.textContent = hour

      hours.append(option)
    }    
  })
}