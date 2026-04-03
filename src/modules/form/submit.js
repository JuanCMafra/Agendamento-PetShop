import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDateBody = document.getElementById("body-date")
const selectedDateModal = document.getElementById("modal-date")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDateBody.value = inputToday
selectedDateModal.value = inputToday

selectedDateModal.min = inputToday

form.onsubmit = (event) => {
  event.preventDefault()

}