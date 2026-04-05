import dayjs from "dayjs"

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function scheduleShow({ dailySchedulesBody }) {
  try {
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    dailySchedulesBody.forEach((schedule) => {
      const item = document.createElement("li")
      const when = document.createElement("div")
      const time = document.createElement("strong")
      const pet = document.createElement("strong")
      const name = document.createElement("pre")
      const description = document.createElement("span")
      const cancel = document.createElement("button")

      when.classList.add("when")
      cancel.classList.add("cancel")

      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      pet.textContent = `${schedule.pet} `
      description.textContent = schedule.description
      name.textContent = ` / ${schedule.name}`
      cancel.textContent = "Remover agendamento"

      item.append(when, description, cancel)
      when.append(time, pet, name)

      const hour = dayjs(schedule.when).hour()

      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }

    })
  } catch (error) {
    console.log(error)
    alert("Não foi possível exibir os agendamentos!")
  }
}