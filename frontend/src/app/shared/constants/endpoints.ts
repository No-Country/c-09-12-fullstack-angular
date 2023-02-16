const BASE_URL = 'http://localhost:3000/';

// -----------------------USUARIOS------------------------------------------------

// Login de usuarios
export const USER_LOGIN_URL = BASE_URL + 'auth/login';

// Registra un usuario y/o obtiene todos los usuarios (para el admin)
export const USER_URL = BASE_URL + 'users';

// Trae, edita un usuario por email (para el admin)
export const USER_BY_EMAIL_URL = USER_URL + '/';

// Se cambia la contraseña de un usuario logueado (pide la contraseña anterior y la nueva) - POST
export const USER_CHANGE_PASS_URL = BASE_URL + 'auth/change-password';

// Se envia al email del usuario al que se quiere reestablecer la contraseña (pide el email) POST
export const USER_IDENTIFY_EMAIL_URL = BASE_URL + 'auth/forgot-password';

// Autorizacion que valida restablecimiento de contraseña olvidada (POST)
export const AUTHORIZE_RESET_PASS_URL = BASE_URL + 'auth/authorize-password';

// Reestablece la contraseña olvidada (POST)
export const RESET_PASS_URL = BASE_URL + 'auth/new-password';
