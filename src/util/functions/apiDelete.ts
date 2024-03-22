import { AUTH_TOKEN_KEY } from "../constants";
import { IApiRequestProps } from "../entity-utils";
import { apiGetPath } from "./apiGetPath";
import cookie from "js-cookie";

export async function apiDelete(
  endpint: string,
  options: IApiRequestProps = {}
) {
  let id = {};

  if (options["id"]) id = options["id"];

  const onSuccess = options["onSuccess"] || undefined;
  const onError = options["onError"] || undefined;

  const resUser = await fetch(apiGetPath() + `api/${endpint}/${id}`, {
    method: "delete",
    headers: {
      Authorization: "Bearer " + cookie.get(AUTH_TOKEN_KEY),
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (resUser.status === 204) {
    onSuccess && onSuccess(resUser);
    return true;
  } else {
    onError && onError(resUser);
    return false;
  }
}

export default apiDelete;
