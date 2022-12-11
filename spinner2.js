//creates a low-fidelity loading spinner

const displaySpinner = function() {
const spinner = '|/-\|/-\|';
let delay = 100;
for (const line of (spinner + '\n')) {
  setTimeout(() => {
    process.stdout.write(line === '\n' ? line : `\r${line}   `);
  }, delay);
  delay += 200;
}
};

displaySpinner();

