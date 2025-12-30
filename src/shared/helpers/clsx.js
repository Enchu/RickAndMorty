export function cl() {
  let tmp;
  let str = '';
  for (let i = 0; i < arguments.length; i++) {
    if ((tmp = arguments[i])) {
      if (typeof tmp === 'string') {
        str += (str && ' ') + tmp;
      }
    }
  }
  return str;
}
