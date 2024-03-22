import { AUTH_TOKEN_KEY, BASE_API_VERSION_PATH } from 'src/util/constants';
import cookie from 'js-cookie';
import { loginFunction } from 'src/util/functions/checkLogin';

interface ApiLoginSubmitInterface {
  email: string;
  password: string;
}
interface ApiChangePasswordInterface {
  oldPassword: string;
  newPassword: string;
}
interface ApiSignupSubmitInterface {
  name: string;
  email: string;
  password: string;
}
export const apiChangePassword = async ({ oldPassword, newPassword }: ApiChangePasswordInterface): Promise<boolean | string> => {
  const result = await fetch(BASE_API_VERSION_PATH + 'api/change-password', {
    method: 'post',
    body: JSON.stringify({ oldPassword, newPassword }),
    headers: {
      Authorization: 'Bearer ' + cookie.get(AUTH_TOKEN_KEY),
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (result.status !== 200 && result.status !== 201) {
    return false;
  } else {
    const bearerToken = await result.json();

    if (bearerToken && bearerToken['id_token']) {
      const jwt = bearerToken['id_token'];
      const user = bearerToken['user'];
      console.info({ bearerToken });
      loginFunction(jwt, user);
      return true;
    }
  }
  return false;
};
interface AddressByCepInterface {
  cep?: string;
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
}
export const getAddressByCep = async (cep: string): Promise<AddressByCepInterface> => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (data.erro) {
      console.error('CEP not found');
      return {};
    } else {
      return data;
    }
  } catch (error) {
    console.error('Failed to fetch address:', error);
    return {};
  }
};
export const apiSignupSubmit = async ({ name, email, password }: ApiSignupSubmitInterface): Promise<boolean | string> => {
  const result = await fetch(BASE_API_VERSION_PATH + 'api/register', {
    method: 'post',
    body: JSON.stringify({ username: email, password, fullname: name }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (result.status !== 200 && result.status !== 201) {
    return false;
  } else {
    const bearerToken = await result.json();

    if (bearerToken && bearerToken['id_token']) {
      const jwt = bearerToken['id_token'];
      const user = bearerToken['user'];
      console.info({ bearerToken });
      loginFunction(jwt, user);
      return true;
    }
  }
  return false;
};
export const apiLoginSubmit = async ({ email, password }: ApiLoginSubmitInterface): Promise<boolean | string> => {
  const result = await fetch(BASE_API_VERSION_PATH + 'api/authenticate', {
    method: 'post',
    body: JSON.stringify({ username: email, password }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (result.status !== 200 && result.status !== 201) {
    // toast.error('Erro ao autenticar. Verifique usuario e senha');
  } else {
    const bearerToken = await result.json();

    if (bearerToken && bearerToken['id_token']) {
      const jwt = bearerToken['id_token'];
      const user = bearerToken['user'];
      loginFunction(jwt, user);
      return true;
    }
  }
  return false;
};
export const apiLogoutSubmit = async ({ email, password }: ApiLoginSubmitInterface): Promise<boolean | string> => {
  const result = await fetch(BASE_API_VERSION_PATH + 'api/authenticate', {
    method: 'post',
    body: JSON.stringify({ username: email, password }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (result.status !== 200 && result.status !== 201) {
    // toast.error('Erro ao autenticar. Verifique usuario e senha');
  } else {
    const bearerToken = await result.json();

    if (bearerToken && bearerToken['id_token']) {
      const jwt = bearerToken['id_token'];
      const user = bearerToken['user'];
      loginFunction(jwt, user);
      return true;
    }
  }
  return false;
};
