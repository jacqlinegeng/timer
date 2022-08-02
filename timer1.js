const args = process.argv.slice(2);

if (args.length === 0) {
  return null;
}

for (let timeOut of args) {
  if (!isNaN(timeOut) && timeOut > 0) {
    setTimeout(() => {
      process.stdout.write('beep\n');
    }, Number(timeOut) * 800);
  }
}