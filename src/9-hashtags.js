export const hashtags = (text) => {
  const list = text.split(' ');
  const result = list.filter(word => word.substring(0,1) === "#");
  return result
}
