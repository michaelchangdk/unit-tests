export const hashtags = (text) => {
  return text.split(' ').filter(word => word.substring(0,1) === "#");
}

// Tiina & Arianna
// export const hashtags = (text) => {
//   return text.split(' ').filter(word => word.startsWith('#'))
// }

// Savannah
// export const hashtags = (text) => text = text.match(/#\w+/gm);

// Sherin
// export const hashtags = (text) => {
//   return text.split(" ").filter((word) => word.charAt(0) === "#");
// };