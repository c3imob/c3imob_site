import { AUTH_TOKEN_KEY } from '../constants';
import { IApiRequestProps, convertObjectToUri } from '../entity-utils';
import { apiGetPath } from './apiGetPath';
import cookie from 'js-cookie';
import { checkLogin } from './checkLogin';

export async function apiGet(endpint: string, options: IApiRequestProps = {}) {
  const sort = options['sort'] ? options['sort'] : { id: 'asc' };
  const size = options['size'] ? options['size'] : 300;
  const page = options['page'] ? options['page'] : 0;

  const filters: any = options['filters'] ? options['filters'] : {};
  const selectColumns: any  = options['selectColumns']
    ? options['selectColumns']
    : false;

  const onSuccess = options['onSuccess'] || undefined;
  const onError = options['onError'] || undefined;

  let _sort = [];
  if (Array.isArray(sort)) {
    sort.forEach((key) => {
      _sort.push(`${Object.keys(key)[0]},${Object.values(key)[0]}`);
    });
  } else {
    _sort.push(Object.keys(sort)[0] + ',' + Object.values(sort)[0]);
  }

  filters['page'] = page;
  filters['size'] = size;
  filters['sort'] = _sort.length > 1 ? _sort : _sort[0];

  const headers: HeadersInit = {
    Authorization: 'Bearer ' + cookie.get(AUTH_TOKEN_KEY),
    'Content-Type': 'application/json;charset=utf-8',
  };

  if (selectColumns) {
    headers['Select-Columns'] = JSON.stringify(selectColumns);
  }

  const responseApi = await fetch(
    apiGetPath() +
      (options.notFilter
        ? `api/${endpint}`
        : `api/${endpint}?${convertObjectToUri(filters)}`),
    { method: 'get', headers }
  );

  if (checkLogin(responseApi)) {
    const data = await responseApi.json();
    const replay = {
      data,
      headers: responseApi.headers,
      status: responseApi.status,
    };

    if (responseApi.status === 200) {
      onSuccess && onSuccess(replay);
    } else {
      onError && onError(replay);
    }
    return replay;
  }
}

export default apiGet;
