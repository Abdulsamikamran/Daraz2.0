let obj = {
  userName: "sami",
  age: 24,
  gender: "M",
};

function duplicateObject(obj) {
  const newObj = {};

  for (let property in obj) {
    newObj[property] = obj[property];
  }

  return newObj;
}

obj.userName = "abdul";
console.log(obj.userName);
