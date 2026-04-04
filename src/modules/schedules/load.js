import { hoursLoad } from "../form/hours-load";

const selectedDate = document.getElementById("modal-date")

export function schedulesDay(){
  const date = selectedDate.value

  hoursLoad({ date })
}