const employee = {
  name: "Jonas",
  streetAddress: "225 Happy Lane",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newEmployee = { ...obj };
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  const deleteEmployee = { ...obj };
  delete deleteEmployee[key];
  return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}
