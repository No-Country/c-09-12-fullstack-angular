const BASE_URL = 'http://localhost:8000/api/v1/';

// -----------------------USUARIOS------------------------------------------------

// Login de usuarios
export const USER_LOGIN_URL = BASE_URL + 'auth/login';

// Registra un usuario (para el admin)
export const USER_POST_URL = BASE_URL + 'auth/signup';

// Obtiene todos los usuarios (para el admin) GET
export const USER_GET_URL = BASE_URL + 'users';

// Trae, edita un usuario por Email (para el admin) GET - PUT - PATCH - DELETE
export const USER_BY_EMAIL_URL = USER_GET_URL + '/';

// Se cambia la contraseña de un usuario logueado (pide la contraseña anterior y la nueva) - POST
export const USER_CHANGE_PASS_URL = BASE_URL + 'auth/change-password';

// Se envia al email del usuario al que se quiere reestablecer la contraseña (pide el email) POST
export const USER_IDENTIFY_EMAIL_URL = BASE_URL + 'auth/forgot-password';

// Autorizacion que valida restablecimiento de contraseña olvidada (POST)
export const AUTHORIZE_RESET_PASS_URL = BASE_URL + 'auth/authorize-password';

// Reestablece la contraseña olvidada (POST)
export const RESET_PASS_URL = BASE_URL + 'auth/new-password';

// -----------------------RUTINAS------------------------------------------------

// Trae y registra las rutinas GET - POST
export const ROUTINES_URL = BASE_URL + 'rutines';

// Trae, Edita y Elimina una rutina por ID - GET - PUT- DELETE
export const ROUTINES_BY_ID_URL = ROUTINES_URL + '';

// -----------------------EJERCICIOS------------------------------------------------

// Trae y registra los ejercicios GET - POST
export const EXCERCISES_URL = BASE_URL + 'excercises';

// Trae, Edita y Elimina los ejercicios por ID - GET - PUT- DELETE
export const EXCERCISES_BY_ID_URL = EXCERCISES_URL + '/';
