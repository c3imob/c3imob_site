import { BASE_API_VERSION_PATH, NODE_SERVER_ENV } from '../constants';

export function apiGetPath() {
  if (NODE_SERVER_ENV === 'production') {
    return '/';
  }
  return BASE_API_VERSION_PATH;
}
