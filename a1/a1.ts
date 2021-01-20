// myMean
export const myMean = (array: number[]): number => (
  array.reduce((accum, curr) => accum + curr) / array.length
);

// getPrimes
const isPrime = (num: number): boolean => {
  if (num === 1) {
    return false;
  }
  else if (num === 2) {
    return true;
  }
  let arr: number[] = [];
  for (let i = 2; i < num; i++) {
    arr.push(i);
  }
  return arr.every(element => num % element !== 0);
}
export const getPrimes = (array: number[]): number[] => (
  array.filter(num => isPrime(num))
);

// partition
export const partition = (
  array: number[],
  belongToGroup1: (element: number) => boolean
): { group1: number[]; group2: number[] } => {
  let group1: number[] = array.filter(num => belongToGroup1(num));
  let group2: number[] = array.filter(num => belongToGroup1(num) === false);
  return { group1, group2 };
};

// makeSentences
type Doggo = {
  name: string;
  age: number;
  breed: string;
};

const sentence = ({name, age, breed}: Doggo): string => (
  `${name} is ${Math.floor(age)} years old and is a ${breed}`
);

export const makeSentences = (array: Doggo[]): string[] => (
  array.map(doggo => sentence(doggo))
);

// makeCorrectSentences
const correctSentence = ({name, age, breed}: Doggo): string => {
  const vowels: string[] = ['A', 'E', 'I', 'O', 'U'];
  const determiner: string = vowels.some(vowel => vowel === breed[0]) ? 'an' : 'a';
  return `${name} is ${Math.floor(age)} years old and is ${determiner} ${breed}`;
};

export const makeCorrectSentences = (array: Doggo[]): string[] => (
  array.map(doggo => correctSentence(doggo))
);

// testing
console.log(myMean([1, 2, 3]));
console.log(myMean([49]));
console.log(myMean([6, 6, 6, 6]));
console.log(getPrimes([1, 2, 3]));
console.log(getPrimes([8, 4, 6]));
console.log(getPrimes([7, 29, 101]));
console.log(partition([1, 2, 3, 4, 5, 6], (n) => n % 3 === 0));
console.log(partition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0));
const doggos = [
  { name: 'Sparky', age: 3.3, breed: 'Pomeranian Husky' },
  { name: 'Oreo', age: 5.4, breed: 'Dalmatian' },
  { name: 'Stella', age: 4.3, breed: 'Alaskan Klee Kai' },
  { name: 'Ella', age: 10.2, breed: 'Italian Greyhound'},
];
console.log(makeSentences(doggos));
console.log(makeCorrectSentences(doggos));