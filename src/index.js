module.exports = function check(str, bracketsConfig) {
   for (let x = 0; x < bracketsConfig.length; x++) {

      let brackets = bracketsConfig[x].join('');

        if (str.includes(brackets)) {
        str = str.replace(brackets, '');
        x = -1;
    }
  }
  return !str;
}