const subheaders = [
  'How sunny is sunny? ☀',
  "If it rains, I'm ready ☔",
  "Isn't it hot? 😉",
  'Time to 🏊‍♂️ at the 🌊',
  '💃☀',
];

const getSubheader = () =>
  subheaders[Math.floor(Math.random() * subheaders.length)];

export default getSubheader;
