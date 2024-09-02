/**
 * https://leetcode.com/problems/roman-to-integer/description/
 */

function romanToInt(s: string): number {
    let roman = new Map<string, number>();
    roman.set("I", 1);
    roman.set("V", 5);
    roman.set("X", 10);
    roman.set("L", 50);
    roman.set("C", 100);
    roman.set("D", 500);
    roman.set("M", 1000);

    const symbols = [...s];
    let output = 0;
    for (let index = 0; index < symbols.length; index++) {
        const symbol = symbols[index];
        if (roman.has(symbol)){
            const currentValue = Number(roman.get(symbol))

            // if not first index
            if (index > 0) {

                // get prev symbol and compare from current
                const prevSymbol = symbols[index-1];
                const prevValue = Number(roman.get(prevSymbol))

                if (prevValue < currentValue){
                    output += (currentValue - (prevValue * 2));
                    continue;
                }
            } 
            output += currentValue;
            
        }
        
    }
    return output;
};