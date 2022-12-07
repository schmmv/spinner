//creates a low-fidelity loading spinner
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;
for (const line of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${line}   `);
  }, delay);
  delay += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, delay);


