function chalkReplacer(chalk: number[], k: number): number {
  const totalChalk = chalk.reduce((sum, current) => sum + current, 0);
  const remainingChalk = k % totalChalk;
  
  let currentSum = 0;
  for (let i = 0; i < chalk.length; i++) {
    currentSum += chalk[i];
    if (currentSum > remainingChalk) {
      return i;
    }
  }

  return 0;
}

const chalk = [3, 4, 1, 2];
const k = 25;
const lastIndex = chalkReplacer(chalk, k);
console.log(lastIndex);
