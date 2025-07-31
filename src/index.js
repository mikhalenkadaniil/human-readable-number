module.exports = function toReadable(number) {
  if (number === 0) return 'zero';
  const UNITS = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const TENS = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  let unit = UNITS[number % 10];
  if (number % 100 < 20) {
    unit = UNITS[number % 100];
  }
  const hundred = UNITS[(number - (number % 100)) / 100];
  const ten = TENS[((number % 100) - (number % 10)) / 10];
  const result = [];
  if (hundred !== '') result.push(`${hundred} hundred`);
  if (ten !== '') result.push(ten);
  if (unit !== '') result.push(unit);
  return result.join(' ');
};
