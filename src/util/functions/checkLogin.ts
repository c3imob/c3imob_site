import { ANONYMOUS_DATA, AUTH_TOKEN_KEY, SERVER_LOGOUT_URL, USER_DATA_KEY } from '../constants';
import cookie from 'js-cookie';

export async function loginFunction(jwt: string, userlogged: Object, module?: string) {
  saveTokenInLocalStorage(jwt);
  localStorage.setItem(USER_DATA_KEY, JSON.stringify({ ...userlogged }));
}

export function saveTokenInLocalStorage(jwt: string) {
  cookie.set(AUTH_TOKEN_KEY, jwt, { expires: 10000 });
}

export function checkLogin(response: Response) {
  if (response.status === 401) {
    logoutFunction();
    return false;
  }
  return true;
}

export async function logoutFunction() {
  const { id_token, user } = ANONYMOUS_DATA;
  cookie.set(AUTH_TOKEN_KEY, id_token, { expires: 10000 });
  localStorage.setItem(USER_DATA_KEY, user);
  document.location.reload();
}

export function isLoggedUser(): boolean {
  const userLogged = getLoggedUser(); 
  return userLogged && userLogged.id > 0;
}

export function getLoggedUser(): ICookieUser {
  let userLogger = null;
  const { user } = ANONYMOUS_DATA;
  try {
    userLogger = JSON.parse(localStorage.getItem(USER_DATA_KEY) || user);
  } catch (error) {}
  if (userLogger) return userLogger;

  return {
    id: 0,
    whiteLabel: '',
    login: '',
    fullname: '',
  };
}

export type ICookieUser = {
  id: number;
  whiteLabelData?: any[];
  clientId?: number;
  clientData?: any[];
  whiteLabel: string;
  login: string;
  fullname: string;
  avatar?: string;
};
