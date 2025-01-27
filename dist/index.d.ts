export declare class EnBn {
    number: number | string;
    constructor(value: number | string);
    inBnLetter(): string;
    inEnLetter(): string;
    threeDigitEnBn(threeDigits: string[]): string;
    inBnWords(): string;
}
