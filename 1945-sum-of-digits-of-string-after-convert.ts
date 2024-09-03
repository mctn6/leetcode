function getLucky(s: string, k: number): number {
  const chars = [...s];
  let numberOfString = "";
  for (let index = 0; index < chars.length; index++) {
    numberOfString += chars[index].charCodeAt(0) - 96;
  }

  let total = 0;
  let reform = [] as number[];
  let stringArray = [] as string[];
  for (let index = 0; index < k; index++) {
    if (index === 0) {
      stringArray = [...numberOfString.toString()];
    } else {
      stringArray = [...total.toString()];
    }
    reform = stringArray.map(Number);
    total = reform.reduce((sum, current) => sum + current, 0);
  }
  return total;
}

const s_var = "leetcode";
const k_var = 2;
const output = getLucky(s_var, k_var);
console.log(output);
