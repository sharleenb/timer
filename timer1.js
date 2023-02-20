const args = process.argv;
let timerMarks = args.slice(2)
function compareNumbers(a, b) {
  return a - b;
}
timerMarks.sort(compareNumbers);


for (const arg of timerMarks) {
  if (isNaN(arg) || arg < 0) {
    return '';
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000)
}
