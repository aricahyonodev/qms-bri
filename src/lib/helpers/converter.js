function formDataToObject(formData) {
  const obj = {};
  formData.forEach((value, key) => {
    if (!key.includes("$ACTION")) {
      obj[key] = value;
    }
  });
  return obj;
}
function errorsToObject(errors) {
  const objErr = errors.map((err) => ({ [err.path[0]]: err.message }));
  return Object.assign({}, ...objErr);
}

export { formDataToObject, errorsToObject };
