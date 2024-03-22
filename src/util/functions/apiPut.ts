import { AUTH_TOKEN_KEY } from '../constants';
import { IApiRequestProps } from '../entity-utils';
import { apiGetPath } from './apiGetPath';
import cookie from 'js-cookie';

export async function apiPut(endpint: string, options: IApiRequestProps = {}) {
  let body = {};
  if (options['body']) body = options['body'];

  const onSuccess = options['onSuccess'] || undefined;
  const onError = options['onError'] || undefined;

  const request = await fetch(apiGetPath() + `api/${endpint}`, {
    body: JSON.stringify(body),
    method: 'put',
    headers: {
      Authorization: 'Bearer ' + cookie.get(AUTH_TOKEN_KEY),
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  const data = await request.json();
  const replay = { data, headers: request.headers, status: request.status };
  if (request.status === 201 || request.status === 200) {
    onSuccess && onSuccess(replay);
  } else {
    onError && onError(replay);
  }
  return replay;
}

export default apiPut;
