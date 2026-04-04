import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("name")
const petName = document.getElementById("pet-name")
const telephoneClient = document.getElementById("telephone")
const descriptionSchedule = document.getElementById("description")
const hourSchedule = document.getElementById("schedule-hour")
const selectedDateModal = document.getElementById("modal-date")

const selectedDateBody = document.getElementById("body-date")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDateBody.value = inputToday
selectedDateModal.value = inputToday
selectedDateModal.min = inputToday

form.onsubmit = (event) => {
  event.preventDefault()
  try {
    //Nome
    const name = clientName.value.trim()
    if (!name) {
      return alert("Informe o nome do cliente!")
    }

    //Nome do Pet
    const pet = petName.value.trim()
    if (!pet) {
      return alert("Informe o nome do seu pet!")
    }

    //Telefone
    const telephone = telephoneClient.value.trim()
    if (!telephone) {
      return alert("Informe o telefone!")
    }

    //Descrição
    const description = descriptionSchedule.value.trim()
    if (!description) {
      return alert("Descreva qual é o serviço solicitado!")
    }

    //Horário
    const hourSelected = hourSchedule.value
    if (!hourSelected) {
      return alert("Informe o horário desejado!")
    }

    const [hour] = hourSelected.split(":")

    const when = dayjs(selectedDateModal.value).add(hour, "hour")

    const id = new Date().getTime()

    console.log({
      id,
      name,
      pet,
      telephone,
      description,
      when,
    })
  } catch (error) {
    alert("Não foi possível realizar os agendamentos")
    console.log(error)
  }
}