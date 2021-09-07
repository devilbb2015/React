const strModule = (str) => {
  const stringArr = str.split("");
  const uniqeArr = stringArr.filter((e,i) => stringArr.indexOf(e) === i);
  return console.log(uniqeArr);
}

module.exports = strModule;