export const hackerSpeak = (words) => {
  const a = /a/gi;
  const four = '4';
  const e = /e/gi;
  const three = '3';
  const i = /i/gi;
  const one = '1';
  const o = /o/gi;
  const zero = '0';
  const s = /s/gi;
  const five = '5';
  return words.replaceAll(a, four).replaceAll(e, three).replaceAll(i, one).replaceAll(o, zero).replaceAll(s, five);
}
