// roman num calculator functon takes number and returns roman number as string

const Char: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

export const romanNumCalculator = (x: any) : string => {
  var romanString = '';
  for (var i of Object.keys(Char)) {
    var q = Math.floor(x / Char[i]);
    x -= q * Char[i];
    romanString += i.repeat(q);
  }
  return romanString;
}