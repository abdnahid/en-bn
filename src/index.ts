const {
  numBdLetterObj,
  numEnLetterObj,
  numBdWordsObj,
  divisionWords,
} = require("./wordsBook.json");

export class EnBn {
  number: number | string;
  constructor(value: number | string) {
    this.number = value;
  }

  inBnLetter() {
    const numberList: string[] = Array.from(String(this.number));
    const numberBnList: string[] = [];
    numberList.map((item, index) => {
      if (item === "." || item === "-") {
        numberBnList.push(item);
      } else {
        numberBnList.push(numBdLetterObj[item]);
      }
    });
    return numberBnList.join("");
  }
  inEnLetter() {
    const numberList: string[] = Array.from(String(this.number));
    const numberEnList: string[] = [];
    numberList.map((item, index) => {
      if (item === "." || item === "-") {
        numberEnList.push(item);
      } else {
        numberEnList.push(numEnLetterObj[item]);
      }
    });
    return numberEnList.join("");
  }

  threeDigitEnBn(threeDigits: string[]) {
    let inWords: string = "";
    if (threeDigits[0] !== "0") {
      inWords += `${numBdWordsObj[threeDigits[0]]}শত `;
    }
    inWords += numBdWordsObj[threeDigits.slice(-2).join("")];
    return inWords;
  }
  inBnWords() {
    let inWords: string = "";
    const numberList: string[] = Array.from(String(this.number));
    if (numberList.length > 3) {
      const lastThree: string[] = numberList.slice(-3);
      const rest = numberList.slice(0, -3);
      inWords += this.threeDigitEnBn(lastThree);
      let i: number = 0;
      let x: number = -2;
      while (i < Math.ceil(rest.length / 2)) {
        if (i === 0) {
          if (rest.slice(x).join("") !== "00") {
            inWords =
              `${numBdWordsObj[rest.slice(x).join("")]} ${divisionWords[i]} ` +
              inWords;
          }
        } else {
          if (rest.slice(x, x + 2).join("") !== "00") {
            inWords =
              `${numBdWordsObj[rest.slice(x, x + 2).join("")]} ${
                divisionWords[i]
              }` + inWords;
          }
        }
        i += 1;
        x -= 2;
      }
    } else {
      inWords = this.threeDigitEnBn(numberList);
    }
    return inWords;
  }
}
