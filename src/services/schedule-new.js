import { apiConfig } from "./api-config.js";

export async function scheduleNew({
  id,
  name,
  pet,
  telephone,
  description,
  when,
}) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, pet, telephone, description, when }),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar agendamento: ${response.status}`);
    }

    console.log("Resposta do POST:", response.status);

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde.");
  }
}
