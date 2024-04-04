function formDataToObject(formData) {
  const object = {};
  formData.forEach((value, key) => {
    if (!key.includes("$ACTION")) {
      object[key] = value;
    }
  });
  return object;
}
function errorsToObject(errors) {
  const objErr = errors.map((err) => ({ [err.path[0]]: err.message }));
  return Object.assign({}, ...objErr);
}

export { formDataToObject, errorsToObject };
