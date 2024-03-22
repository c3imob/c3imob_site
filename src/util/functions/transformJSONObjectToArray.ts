function transformJSONObjectToArray(obj: any, prefix?: string): Array<string> {
  if (Array.isArray(obj)) {
    obj = obj[0];
  }

  const res: any = {};
  for (const k of Object.keys(obj)) {
    const val: any = obj[k];
    const key = prefix ? prefix + '.' + k : k;
    if (typeof val === 'object') Object.assign(res, transformJSONObjectToArray(val, key));
    else res[key] = val;
  }
  return res;
}

export default transformJSONObjectToArray;
