const PUBLIC_API_URL = typeof window !== 'undefined' && window.__API_URL__
  ? window.__API_URL__
  : (process && process.env && process.env.API_URL) || 'https://agendamento-petshop-api-publica.onrender.com'

export const apiConfig = {
  baseURL: PUBLIC_API_URL,
}

// Note: you can set `window.__API_URL__` before the app loads to override.

