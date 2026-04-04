import dayjs from "dayjs";
import { openingHours } from "../../utils/open-hours";

const hours = document.getElementById("hour")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

   return {
      hour,
      available: isHourPast,
    }
  })

  opening.forEach(({ hour, available }) => {

    if (available === true) {
      const option = document.createElement("option")
      option.textContent = hour

      hours.append(option)
    }    
  })
}