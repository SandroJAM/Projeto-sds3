// Conexão LOCAL

// export const BASE_URL = 'http://localhost:8080';

// Conexão com Netlify e Heroku

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';