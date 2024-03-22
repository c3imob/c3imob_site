export const BASE_IMG_PATH = process.env.REACT_APP_BASE_IMG_PATH || 'http://localhost:8081/';
export const BASE_API_VERSION_PATH = process.env.REACT_APP_SERVER_API_URL || 'http://localhost:8081/';

export const SERVER_LOGIN_URL = '/';
export const SERVER_LOGOUT_URL = '/';

export const NODE_SERVER_ENV = process.env.NEXT_PUBLIC_SERVER_ENV_ENV || 'local';

export const AUTH_TOKEN_KEY = 'c3imobAuthenticationToken';
export const ERROR_DATA_KEY = 'containerErrorData';
export const USER_DATA_KEY = 'userDataEvo';

export const APP_DATE_FORMAT = 'DD/MM/YYYY HH:mm';
export const APP_TIMESTAMP_FORMAT = 'DD/MM/YY HH:mm:ss';
export const APP_LOCAL_DATE_FORMAT = 'DD/MM/YYYY';
export const APP_LOCAL_DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm';
export const APP_LOCAL_DATETIME_FORMAT_Z = 'YYYY-MM-DDTHH:mm Z';
export const APP_WHOLE_NUMBER_FORMAT = '0,0';
export const APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT = '0,0.[00]';

export const CATEGORY_MAIN_ID = 1;
export const CATEGORY_PROPERTY_DETAILS_ID = 2;
export const CATEGORY_UTILITY_DETAILS_ID = 3;
export const CATEGORY_OUTDOOR_RESOURCES_ID = 4;
export const CATEGORY_AMENITIES_ID = 5;
export const CATEGORY_WHATS_NEARBY_ID = 6;

export const ANONYMOUS_DATA = {
  id_token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbm9ueW1vdXNAYzNpbW9iLmNvbS5iciIsIndoaXRlTGFiZWwiOjEsInVzZXJUeXBlIjoiUkVWSUVXRVIiLCJhdXRob3JpdGllcyI6WyJST0xFX0FOT05ZTU9VUyJdLCJpYXQiOjE3MDk4MzMyODYsImV4cCI6MTcwOTgzMzU4Nn0.SJQEVBJjKUqGdWOJk0GMim3H4rFNInM7Ex9NItOufKo',
  user: JSON.stringify({
    id: 0,
    login: 'anonymous@c3imob.com.br',
    fullname: 'anonymous@c3imob.com.br',
    email: 'anonymous@c3imob.com.br',
    activated: true,
    userType: 'ANONYMOUS',
  }),
};
